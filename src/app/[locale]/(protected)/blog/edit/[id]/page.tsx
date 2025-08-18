"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { buttonList } from "suneditor-react";
import { z } from "zod";

import { Button, FormController, FormEditor, FormInput } from "@/components";
import { useRouter } from "@/i18n/navigation";
import { useTRPC } from "@/lib/trpc";
import { compress, longUUID, shortUUID, slugify } from "@/lib/utils";

const fields = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  content: z.string().min(1),
}).default({
  title: "",
  category: "",
  content: "",
});
type FieldValues = z.infer<typeof fields>;


export default function Page() {
  const router = useRouter();
  const locale = useLocale();
  const { id } = useParams();
  const t = useTranslations();


  const trpc = useTRPC();
  const { data } = useQuery(trpc.blog.item.queryOptions({ id: longUUID(id as string) }));
  const { mutateAsync: uploadFile } = useMutation(trpc.file.upload.mutationOptions());
  const { mutateAsync: savePost } = useMutation(trpc.blog.save.mutationOptions());


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
        savePost(fields)
          .then((post) => {
            const { id, title } = post;
            router.replace(`/blog/${shortUUID(id)}/${slugify(title)}`);
          });
      }
    }
  };

  return (
    <FormController
      form={form}
      onSubmit={onSubmit}
      className="tw:size-full tw:grid tw:grid-rows-[auto_1fr_auto] tw:gap-2 tw:p-5"
    >
      <div className="tw:grid tw:grid-cols-[1fr_auto] tw:gap-2">
        <FormInput
          control={form.control}
          name="title"
          orientation="vertical"
          label="제목"
        />
        <FormInput
          control={form.control}
          name="category"
          orientation="vertical"
          label="카테고리"
        />
      </div>
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
      <Button type="submit" name="submit">저장</Button>
    </FormController>
  );
}
