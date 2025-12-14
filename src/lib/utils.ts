import { type ClassValue, clsx } from "clsx";
import shortID from "short-uuid";
import { twMerge } from "tailwind-merge";
import { v7 } from "uuid";

/**
 * tailwind 클래스 함수
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 이미지 리사이징 및 압축
 */
export function compress(file: File, quality = 0.8) {
  if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
    return Promise.resolve(file);
  }

  const imageSizes = {
    thumbnail: 200,
    avatar: 300,
    preview: 800,
    general: 1280,
    full: 1920,
  };

  function getImageType(longestSide: number, threshold = 10) {
    if ((longestSide + threshold) > 1920) return "full";
    if ((longestSide + threshold) > 1280) return "general";
    if ((longestSide + threshold) > 800) return "preview";
    if ((longestSide + threshold) > 300) return "avatar";
    return "thumbnail";
  }

  return new Promise<File>((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const longestSide = Math.max(img.width, img.height);
      const type = getImageType(longestSide);
      const maxSide = imageSizes[type];
      const scale = Math.min(1, maxSide / longestSide);

      const canvas = document.createElement("canvas");
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("fail to create canvas context");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(
        (blob) => {
          if (!blob) return reject(new Error("Failed to convert canvas to blob"));

          const compFile = new File([blob], file.name, {
            type: file.type,
            lastModified: Date.now(),
          });

          resolve(compFile);
        },
        file.type,
        ["image/jpeg", "image/jpg"].includes(file.type)
          ? quality
          : undefined,
      );
    };

    img.onerror = reject;
  });
}

export function slugify(text: string): string {
  // 1. Unicode 정규화 & 악센트 제거
  let slug = text
    // .normalize("NFKD")
    // .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9가-힣]+/g, "-") // 특수문자, 공백 → 대시
    .toLowerCase();

  // 2. 앞뒤 대시 제거 (RegExp 없이 안전하게)
  let start = 0;
  let end = slug.length;

  while (start < end && slug[start] === "-") start++;
  while (end > start && slug[end - 1] === "-") end--;

  slug = slug.slice(start, end);

  // 3. 연속된 대시 하나로
  slug = slug.replace(/-{2,}/g, "-");

  return slug;
}

export const uuid = v7;

export const toShortId = (longId: string) => {
  return shortID().fromUUID(longId);
};

export const toLongId = (shortId: string) => {
  return shortID().toUUID(shortId);
};
