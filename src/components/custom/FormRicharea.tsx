import { X } from "lucide-react";
import { ComponentPropsWithoutRef, CSSProperties, useRef, useState } from "react";
import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

import { Button, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shadcn";
import { useEventUtils } from "@/hooks";
import { cn } from "@/lib/utils";


type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<UseControllerProps<TFieldValues, TName>, "defaultValue">
  & Omit<ComponentPropsWithoutRef<"p">, "defaultValue" | "value" | "defaultChecked" | "checked">
  & {
    control: UseControllerProps<TFieldValues, TName>["control"]
    name: TName
    label?: string
    labelWidth?: CSSProperties["width"]
    orientation?: "vertical" | "horizontal"
    showError?: boolean
    placeholder?: string
  }
  & {
    required?: boolean
  };

/** 리치 텍스트 입력 */
export function FormRicharea<T extends FieldValues>(props: Props<T>) {
  const {
    name, disabled, control,
    label, labelWidth = "auto", orientation = "horizontal",
    showError = false, required = false,
    ...inputProps
  } = props;
  const { prevent, stop } = useEventUtils();

  /* 폼 입력 기능 */
  const areaRef = useRef<HTMLParagraphElement>(null);
  const [isComposing, setIsComposing] = useState(false);


  /* 파일 기능 */
  const fileRef = useRef<HTMLInputElement>(null);
  const transferRef = useRef(new DataTransfer());
  const [fileList, setFileList] = useState<File[]>([]);

  const addFiles = (files: (File | null)[]) => {
    for (const file of files) {
      if (!file) throw Error("it is not readable file");
      transferRef.current.items.add(file);
    }

    setFileList(Array.from(transferRef.current.files));
    if (fileRef.current) {
      fileRef.current.files = transferRef.current.files;
    }
  };

  const deleteFile = (idx: number) => {
    setFileList((prev) => prev.toSpliced(idx, 1));
    transferRef.current.items.remove(idx);
    if (fileRef.current) {
      fileRef.current.files = transferRef.current.files;
    }
  };

  const normalizeValue = (html: string) => {
    if (html === "<br>" || html === "<div><br></div>") return "";
    return html;
  };

  return (
    <FormField
      name={name}
      control={control}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <FormItem
          className={cn(
            "tw:size-full",
            "tw:min-h-auto tw:min-w-auto",
            "tw:flex tw:flex-wrap",
            orientation === "horizontal"
              ? "tw:flex-row"
              : "tw:flex-col",
          )}
        >
          {label && (
            <div
              style={{ width: labelWidth }}
              className="tw:flex tw:items-start"
            >
              <FormLabel onClick={() => areaRef.current?.focus()}>
                {label}
                {required && (
                  <sup className="tw:text-red-600"> *</sup>
                )}
              </FormLabel>
            </div>
          )}
          <div className={cn("tw:flex-1", "tw:grid tw:grid-rows-[auto_1fr]")}>
            <div className="tw:flex tw:flex-wrap-reverse tw:w-full">
              {fileList.map((file, idx) => (
                <div key={file.name} className="tw:flex tw:flex-auto tw:items-center tw:gap-2">
                  <span>{file.name}</span>
                  <Button size="sm" variant="ghost" onClick={() => deleteFile(idx)}>
                    <X />
                  </Button>
                </div>
              ))}
              <input ref={fileRef} type="file" name="files" multiple hidden />
            </div>
            <p
              {...inputProps}
              ref={areaRef}
              contentEditable
              aria-invalid={fieldState.invalid}
              suppressContentEditableWarning={true}
              onCompositionStart={() => setIsComposing(true)}
              onCompositionEnd={(e) => {
                setIsComposing(false);
                field.onChange(normalizeValue(e.currentTarget.innerHTML));
              }}
              onInput={(e) => {
                if (!isComposing) {
                  inputProps.onInput?.(e);
                  field.onChange(normalizeValue(e.currentTarget.innerHTML));
                }
              }}
              onBlur={(e) => {
                inputProps.onBlur?.(e);
                field.onBlur();
              }}
              onPaste={(e) => {
                const clipboardFiles = [...e.clipboardData.items]
                  .filter((i) => i.kind === "file");

                if (clipboardFiles.length) {
                  const files = clipboardFiles
                    .map((i) => i.getAsFile());
                  addFiles(files);
                }
              }}
              onDragEnter={prevent(stop)}
              onDragOver={prevent(stop)}
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files) {
                  addFiles([...e.dataTransfer.files]);
                }
              }}
              style={{ backgroundColor: "transparent" }}
              className={cn(
                "tw:cursor-default",
                "tw:size-full tw:overflow-auto tw:w-full tw:rounded-md tw:border tw:border-input tw:bg-transparent tw:px-3 tw:py-2 tw:text-base tw:shadow-sm tw:placeholder:text-muted-foreground tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring tw:disabled:cursor-not-allowed tw:disabled:opacity-50 tw:md:text-sm",
                "tw:break-words",
                "tw:empty:before:content-[attr(placeholder)]",
                "tw:empty:before:text-gray-500",
                "tw:focus-visible:border-ring tw:focus-visible:ring-ring/50 tw:focus-visible:ring-[3px]",
                "tw:aria-invalid:ring-destructive/20 tw:dark:aria-invalid:ring-destructive/40 tw:aria-invalid:border-destructive",
                inputProps.className,
              )}
            />
            <FormControl>
              <input
                {...field}
                type="text"
                hidden
              />
            </FormControl>
            {showError && (
              <FormMessage />
            )}
          </div>
        </FormItem>
      )}
    />
  );
}
