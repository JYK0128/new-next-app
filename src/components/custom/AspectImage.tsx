import Image, { type ImageProps } from "next/image";

import { AspectRatio } from "@/components/shadcn";
import { cn } from "@/lib/utils";


type Props = Omit<ImageProps, "src" | "alt">
  & { src: Nullish<string>, alt?: Nullish<string>, ratio?: number };

export function AspectImage({ src, alt, ratio, ...props }: Props) {
  const orgSrc = src ? new URL(src, location.origin).toString() : "/no-image.svg";

  return (
    <AspectRatio ratio={ratio || (16 / 9)}>
      <Image
        src={orgSrc}
        alt={alt || "no-image"}
        priority={!src || src.startsWith("http")}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
        className={cn("tw:object-contain", props.className)}
      />
    </AspectRatio>
  );
}
