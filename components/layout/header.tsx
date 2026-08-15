"use client";

import Link from "next/link";
import Image from "next/image";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LanguageSelector } from "@/components/layout/language-selector";
import { GlobalSearch } from "@/components/guide/global-search";
import { useLocale } from "@/lib/context/locale-context";

export function Header() {
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <MobileNav />

        <Link
          href={`/${locale}`}
          className="flex shrink-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue"
        >
          <Image
            src="/images/brand/charles-river-logo-mark-navy.png"
            alt="Charles River"
            width={464}
            height={104}
            priority
            className="h-6 w-auto object-contain sm:h-7"
          />
          <span className="hidden flex-col justify-center border-l border-border pl-2.5 leading-none sm:flex">
            <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
              Laboratory Guide
            </span>
          </span>
        </Link>

        <div className="mx-2 hidden h-6 w-px bg-border lg:block" />

        <DesktopNav />

        <div className="ml-auto flex items-center gap-2">
          <GlobalSearch />
          <LanguageSelector variant="compact" />
        </div>
      </div>
    </header>
  );
}
