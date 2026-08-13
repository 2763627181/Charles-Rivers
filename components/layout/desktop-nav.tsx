"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/data/navigation";
import { useDictionary, useLocale } from "@/lib/context/locale-context";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const locale = useLocale();
  const dictionary = useDictionary();
  const pathname = usePathname();

  return (
    <nav aria-label={dictionary.nav.guide} className="hidden items-center gap-1 lg:flex">
      {primaryNav.map((item) => {
        const href = `/${locale}${item.href}`;
        const isActive =
          item.href === "/guide" ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={item.href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-navy",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue focus-visible:ring-offset-2",
              isActive && "text-corporate-blue"
            )}
          >
            {dictionary.nav[item.labelKey]}
            {isActive && (
              <span className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-corporate-blue" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
