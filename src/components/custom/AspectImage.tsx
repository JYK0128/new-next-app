import Image, { type ImageProps } from "next/image";

import { AspectRatio } from "@/components/shadcn";
import { cn } from "@/lib/utils";


type Props = Omit<ImageProps, "src" | "alt">
  & { src: Nullish<string>, alt?: Optional<string>, ratio?: number };

export function AspectImage({ src, alt, ratio, priority, fill, ...props }: Props) {
  const orgSrc = src ?? "/no-image.svg";

  return (
    <AspectRatio ratio={ratio || (16 / 9)}>
      <Image
        src={orgSrc}
        alt={alt ?? "no-image"}
        priority={priority ?? !src}
        fill={fill ?? true}
        {...props}
        className={cn("tw:object-contain", props.className)}
      />
    </AspectRatio>
  );
}
