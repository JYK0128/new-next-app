import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


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

