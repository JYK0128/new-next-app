import { type CSSProperties, ForwardedRef, forwardRef, useEffect } from "react";
import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
import lang from "suneditor/src/lang";
import SunEditorCore from "suneditor/src/lib/core";
import SunEditor, { buttonList } from "suneditor-react";
import type { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shadcn/form";
import { useCallbackRef } from "@/hooks/use-callback-ref";
import { cn } from "@/lib/utils";

type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<UseControllerProps<TFieldValues, TName>, "defaultValue">
  & Omit<SunEditorReactProps, "defaultValue" | "value" | "defaultChecked" | "checked">
  & {
    control: UseControllerProps<TFieldValues, TName>["control"]
    name: TName
    required?: boolean
    label?: string
    labelWidth?: CSSProperties["width"]
    orientation?: "vertical" | "horizontal"
    showError?: boolean
  };

/** 텍스트 에디터 */
export const FormEditor = forwardRef(
  function FormEditorInner<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  >(
    props: Props<TFieldValues, TName>,
    ref: ForwardedRef<SunEditorCore>,
  ) {
    const {
      control, name, disabled,
      label, labelWidth = "auto", orientation = "horizontal",
      showError = false, required = false,
      ...inputProps
    } = props;
    const [editorRef, setEditorRef] = useCallbackRef(ref);

    const getSunEditorInstance = (editor: SunEditorCore) => {
      setEditorRef(editor);
    };

    useEffect(() => {
      if (editorRef.current) {
        editorRef.current.setOptions({
          buttonList: buttonList.complex,
          lang: lang.ko,
          placeholder: "내용을 입력해주세요.",
          resizeEnable: false,
        });
      }
    }, [editorRef]);

    return (
      <FormField
        name={name}
        control={control}
        disabled={disabled}
        render={({ field }) => (
          <FormItem
            className={cn(
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
                className="tw:flex tw:items-center"
              >
                <FormLabel>
                  {label}
                  {required && (
                    <sup className="tw:text-red-600"> *</sup>
                  )}
                </FormLabel>
              </div>
            )}
            <div className="tw:flex-1">
              <FormControl>
                <SunEditor
                  {...inputProps}
                  {...field}
                  getSunEditorInstance={getSunEditorInstance}
                  setContents={field.value}
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
  },
);
