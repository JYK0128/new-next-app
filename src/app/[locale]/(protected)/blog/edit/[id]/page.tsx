"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { buttonList } from "suneditor-react";
import { z } from "zod";

import { Button, FormController, FormEditor, FormInput } from "@/components";
import { useRouter } from "@/i18n/navigation";
import { useTRPC } from "@/lib/trpc";
import { compress, slugify, toLongId, toShortId } from "@/lib/utils";

const fields = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
}).default({
  title: "",
  content: "",
});
type FieldValues = z.infer<typeof fields>;


export default function Page() {
  const router = useRouter();
  const locale = useLocale();
  const { id } = useParams();
  const t = useTranslations();


  const trpc = useTRPC();
  const { data } = useQuery({
    ...trpc.blog.item.queryOptions({ id: toLongId(id as string) }),
    refetchOnWindowFocus: false,
  });
  const { mutateAsync: uploadFile } = useMutation(trpc.file.upload.mutationOptions());
  const { mutateAsync: savePost, isPending } = useMutation(trpc.blog.save.mutationOptions());


  const form = useForm({
    resolver: zodResolver(fields.removeDefault()),
    defaultValues: fields._def.defaultValue(),
  });

  useEffect(() => {
    form.reset(data);
  }, [form, data]);


  const onSubmit: SubmitHandler<FieldValues> = (fields, evt) => {
    const { submitter } = (evt?.nativeEvent ?? {}) as SubmitEvent;
    if (!(submitter instanceof HTMLButtonElement)) return;

    switch (submitter.name) {
      case "submit": {
        if ("string" !== typeof id) return;
        savePost({ id: toLongId(id), ...fields })
          .then((post) => {
            const { id, title } = post;
            router.replace(`/blog/${toShortId(id)}/${slugify(title)}`);
          });
      }
    }
  };


  useEffect(() => {
    const handler: OnBeforeUnloadEventHandler = (evt) => {
      evt.preventDefault();
      return "";
    };
    window.addEventListener("beforeunload", handler);
    return () => {
      window.removeEventListener("beforeunload", handler);
    };
  }, []);

  return (
    <FormController
      form={form}
      onSubmit={onSubmit}
      className="tw:size-full tw:grid tw:grid-rows-[auto_1fr_auto] tw:gap-2 tw:p-5"
    >
      <FormInput
        control={form.control}
        name="title"
        orientation="vertical"
        label="제목"
        autoComplete="off"
      />
      <FormEditor
        control={form.control}
        name="content"
        orientation="vertical"
        label="내용"
        lang={locale}
        placeholder={t("editor.placeholder")}
        setOptions={{
          buttonList: buttonList.complex,
          resizeEnable: false,
          font: [
            "Pretendard",
            "Nanum Gothic Coding",
            "Nanum Brush Script",
            "Nanum Pen Script",
            "Nanum Myeongjo",
            "Nanum Gothic",
            "Noto Sans KR",
            "Noto Serif KR",
          ],
          defaultStyle: "font-family: Pretendard; font-size: 16px;",
          callBackSave: () => {
            if ("string" !== typeof id) return;
            savePost({ id: toLongId(id), ...form.getValues() })
              .then(() => toast.success(t("editor.saved")))
              .catch(() => toast.error(t("editor.failed")));
          },
        }}
        onImageUploadBefore={(files, _, uploadHandler) => {
          const file = files[0];
          // "image/jpeg", "image/jpg", "image/png" 압축
          compress(file).then((compressed) => {
            const formData = new FormData();
            formData.set("file", compressed);

            // uploadHandler가 업로드 프로세스 처리
            uploadFile(formData)
              .then((res) => uploadHandler({ result: [res] }))
              .catch((err: Error) => uploadHandler({
                errorMessage: err.message,
                result: [],
              }));
          });

          // 기존 업로드 프로세스 무시
          return false;
        }}
      />
      <Button type="submit" name="submit" disabled={isPending}>
        저장
      </Button>
    </FormController>
  );
}
