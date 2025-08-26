import fs from "fs";
import type { MetadataRoute } from "next";
import path from "path";

function getRouters(source: string): string[] {
  const results: string[] = [];
  const queue: string[] = ["/"];

  while (queue.length > 0) {
    const pathname = queue.shift();
    if (!pathname) continue;

    const dirList = fs.readdirSync(path.join(source, pathname));
    const hasPage = dirList.includes("page.tsx");
    if (hasPage) {
      results.push(pathname);
      continue;
    }

    for (const name of dirList) {
      const currentPath = path.posix.join(pathname, name);
      const fullPath = path.join(source, currentPath);
      const stat = fs.lstatSync(fullPath);

      if (stat.isDirectory()) {
        queue.push(currentPath);
      }
      else if (name === "page.tsx") {
        results.push(pathname);
      }
    }
  }

  return results;
}

export default function robots(): MetadataRoute.Robots {
  const source = path.join(process.cwd(), "src/app/[locale]/(protected)");
  const disallow = getRouters(source);

  // 사이트맵에 기술된 페이지만 승인
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow,
    },
    sitemap: `${process.env.NEXT_SITE_URL}/sitemap.xml`,
  };
}
