"use client";

import { Globe, LogOut, Search } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import type { Locale } from "next-intl";
import { useRef } from "react";

import { Button, Input, Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const searchRef = useRef<HTMLInputElement>(null);
  const session = useSession();


  const toggleSearch = () => searchRef.current?.classList.toggle("tw:hidden");
  const switchLanguage = (locale: Locale) => router.push(pathname, { locale });
  const logout = () => {
    location.href = "/api/auth/logout";
  };

  return (
    <header className="tw:flex tw:justify-between tw:p-1">
      <Link href="/" className="tw:justify-self-start">
        Logo
      </Link>
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
            { !!session.data?.user
              && (
                <li className={pathname === "/editor" ? "tw:border-b-blue-600 tw:border-b-2" : ""}>
                  <Link href="/editor">
                    Editor
                  </Link>
                </li>
              )}
          </ul>
        </nav>
        <div className="tw:flex tw:ml-10">
          <div className="tw:flex tw:gap-1">
            <Input ref={searchRef} className="tw:hidden" placeholder="Search" />
            <Button size="icon" variant="ghost" onClick={toggleSearch}>
              <Search />
            </Button>
          </div>
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
          { !!session.data?.user
            && (
              <Button size="icon" variant="ghost" onClick={logout}>
                <LogOut />
              </Button>
            )}
        </div>
      </div>
    </header>
  );
}
