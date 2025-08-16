"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";
import { type FieldValues, type SubmitHandler, useForm } from "react-hook-form";
import { buttonList } from "suneditor-react";
import { z } from "zod";

import { Button } from "@/components";
import { FormController, FormInput } from "@/components/custom";
import { FormEditor } from "@/components/custom/FormEditor";
import { useTRPC } from "@/lib/trpc";
import { compress } from "@/lib/utils";

const fields = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
}).default({
  title: "",
  content: "",
});

export default function Page() {
  const locale = useLocale();
  const t = useTranslations();

  const form = useForm({
    resolver: zodResolver(fields.removeDefault()),
    defaultValues: fields._def.defaultValue(),
  });

  const trpc = useTRPC();
  const { mutateAsync: uploadFile } = useMutation(trpc.file.upload.mutationOptions());

  const onSubmit: SubmitHandler<FieldValues> = (fields, evt) => {
    const { submitter } = (evt?.nativeEvent ?? {}) as SubmitEvent;
    if (!(submitter instanceof HTMLButtonElement)) return;

    switch (submitter.name) {
      case "submit": {
        break;
      }
    }
  };

  return (
    <FormController
      form={form}
      onSubmit={onSubmit}
      className="tw:size-full tw:grid tw:grid-rows-[auto_1fr_auto] tw:gap-2"
    >
      <FormInput
        control={form.control}
        name="title"
        orientation="vertical"
        label="제목"
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
        }}
        onImageUploadBefore={(files, _, uploadHandler) => {
          const file = files[0];
          // "image/jpeg", "image/jpg", "image/png" 압축
          compress(file).then((compressed) => {
            const formData = new FormData();
            formData.set("file", compressed);

            // uploadHandler가 업로드 프로세스 처리
            uploadFile(formData)
              .then((res) => uploadHandler(res))
              .catch((err: Error) => uploadHandler({
                errorMessage: err.message,
                result: [],
              }));
          });

          // 기존 업로드 프로세스 무시
          return false;
        }}
      />
      <Button>저장</Button>
    </FormController>
  );
}
