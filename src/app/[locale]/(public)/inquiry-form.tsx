"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { type SubmitErrorHandler, type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button, FormController, FormInput, FormRicharea } from "@/components";
import { useMessage } from "@/hooks";
import { useTRPC } from "@/lib/trpc";


export function InquiryForm() {
  const t = useTranslations();
  const { message } = useMessage();
  const trpc = useTRPC();

  const fields = z.object({
    email: z.string().email(t("invalid_email")),
    title: z.string().min(1, t("invalid_title")),
    content: z.string().min(1, t("invalid_content")),
  }).default({
    email: "",
    title: "",
    content: "",
  });
  type FieldValues = z.infer<typeof fields>;

  const form = useForm({
    resolver: zodResolver(fields.removeDefault()),
    defaultValues: fields._def.defaultValue(),
  });

  const { mutateAsync: inquiry } = useMutation(trpc.inquiry.inquiry.mutationOptions());

  const onSubmit: SubmitHandler<FieldValues> = (fields, evt) => {
    const { submitter } = (evt?.nativeEvent ?? {}) as SubmitEvent;
    if (!(submitter instanceof HTMLButtonElement)) return;

    switch (submitter.name) {
      case "submit": {
        inquiry(new FormData(evt?.target))
          .then(() => message({
            type: "alert",
            description: t("inquiry_success"),
          }))
          .catch((err: Error) => message({
            type: "error",
            description: err.message,
          }));
      }
    }
  };

  const onError: SubmitErrorHandler<FieldValues> = (err, evt) => {
    const { submitter } = (evt?.nativeEvent ?? {}) as SubmitEvent;
    if (!(submitter instanceof HTMLButtonElement)) return;

    switch (submitter.name) {
      case "submit": {
        message({
          type: "error",
          description: Object.values(err)[0].message || "",
        });
      }
    }
  };

  return (
    <FormController
      form={form}
      onSubmit={onSubmit}
      onError={onError}
      className="tw:flex tw:flex-col tw:gap-2"
    >
      <div className="tw:flex tw:items-end tw:gap-1">
        <FormInput
          control={form.control}
          name="email"
          label={t("email")}
          orientation="vertical"
        />
        <Button type="submit" name="submit" variant="ghost">
          {t("inquiry")}
        </Button>
      </div>
      <FormInput
        control={form.control}
        name="title"
        label={t("title")}
        orientation="vertical"
      />
      <FormRicharea
        control={form.control}
        name="content"
        label={t("content")}
        orientation="vertical"
        className="tw:h-[10rem]"
      />
    </FormController>
  );
}
