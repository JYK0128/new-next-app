import Image, { type ImageProps } from "next/image";

import { AspectRatio } from "@/components/shadcn";
import { cn } from "@/lib/utils";

export function AspectImage({ src, alt, ratio, ...props }: Omit<ImageProps, "src" | "alt">
  & { src: Nullish<string>, alt?: Nullish<string>, ratio?: number }) {
  return (
    <AspectRatio ratio={ratio || (16 / 9)}>
      <Image
        src={src || "/no-image.svg"}
        alt={alt || "no-image"}
        priority={!src || src.startsWith("http")}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={(e) => {
          e.currentTarget.src = "/no-image.svg";
        }}
        {...props}
        className={cn("tw:object-contain", props.className)}
      />
    </AspectRatio>
  );
}
