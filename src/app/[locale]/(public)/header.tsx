"use client";

import { Globe, Search } from "lucide-react";
import Link from "next/link";
import type { Locale } from "next-intl";
import { useRef } from "react";

import { Button, Input, Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const searchRef = useRef<HTMLInputElement>(null);


  const toggleSearch = () => searchRef.current?.classList.toggle("tw:hidden");
  const switchLanguage = (locale: Locale) => router.push(pathname, { locale });


  return (
    <header className="tw:flex tw:justify-between">
      <div className="tw:justify-self-start">
        Logo
      </div>
      <div className="tw:flex">
        <nav>
          <ul className="tw:flex tw:gap-10 tw:items-center tw:size-full">
            <li className={pathname === "/" ? "tw:border-b-blue-600 tw:border-b-2" : ""}>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className={pathname === "/blog" ? "tw:border-b-blue-600 tw:border-b-2" : ""}>
              <Link href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="tw:flex tw:ml-10">
          <Input ref={searchRef} className="tw:hidden" placeholder="Search" />
          <Button size="icon" variant="ghost" onClick={toggleSearch}>
            <Search />
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button size="icon" variant="ghost">
                <Globe />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="tw:w-fit">
              <Button variant="ghost" onClick={() => switchLanguage("ko")}>한국어</Button>
              <Button variant="ghost" onClick={() => switchLanguage("en")}>English</Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
