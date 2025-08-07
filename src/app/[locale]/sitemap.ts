import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  console.log("========", routing);
  // 페이지, 이미지, 비디오
  return [{
    url: process.env.NEXT_SITE_DOMAIN + "/about",
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          new URL(locale + "/about", process.env.NEXT_SITE_DOMAIN).toString(),
        ]),
      ),
    },
  }];
}
