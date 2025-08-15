"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { type FieldValues, type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components";
import { FormController, FormInput } from "@/components/custom";
import { FormEditor } from "@/components/custom/FormEditor";
import { useTRPC } from "@/lib/trpc";

const fields = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
}).default({
  title: "",
  content: "",
});

export default function Page() {
  const form = useForm({
    resolver: zodResolver(fields.removeDefault()),
    defaultValues: fields._def.defaultValue(),
  });

  const trpc = useTRPC();
  const { mutateAsync } = useMutation(trpc.file.upload.mutationOptions());

  const onSubmit: SubmitHandler<FieldValues> = (fields, evt) => {
    const { submitter } = (evt?.nativeEvent ?? {}) as SubmitEvent;
    if (!(submitter instanceof HTMLButtonElement)) return;

    switch (submitter.name) {
      case "submit": {
        console.log(fields);
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
        onImageUploadBefore={(files, info, uploadHandler) => {
          const file = files[0];
          const formData = new FormData();
          formData.set("file", file);

          mutateAsync(formData)
            .then((res) => (console.log(res), uploadHandler(res)))
            .catch((err: Error) => uploadHandler({
              errorMessage: err.message,
              result: [],
            }));
          return false;
        }}
      />
      <Button>저장</Button>
    </FormController>
  );
}
