"use client";

import Link from "next/link";
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
          <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-corporate-blue to-navy text-white">
            <svg viewBox="0 0 24 24" fill="none" className="size-4.5" aria-hidden="true">
              <path
                d="M3 15c2-4 5-7 9-7s7 3 9 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 10c2-3 5-5 9-5s7 2 9 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.55"
              />
            </svg>
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[15px] font-semibold tracking-tight text-navy">charles river</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
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
