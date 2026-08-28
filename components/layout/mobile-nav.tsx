"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { primaryNav, healthCategoryNav } from "@/data/navigation";
import { useDictionary, useLocale } from "@/lib/context/locale-context";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const dictionary = useDictionary();
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={dictionary.nav.menu}>
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0">
        <SheetHeader className="border-b border-border px-5 py-4">
          <SheetTitle className="text-left text-base font-semibold text-navy">
            {dictionary.meta.siteName}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 overflow-y-auto px-3 py-4">
          {primaryNav.map((item) => {
            const href = `/${locale}${item.href}`;
            const Icon = getIcon(item.icon);
            const isActive = item.href === "/guide" ? pathname === href : pathname.startsWith(href);
            return (
              <Link
                key={item.href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-light-blue",
                  isActive && "bg-light-blue text-corporate-blue"
                )}
              >
                <Icon className="size-4.5" aria-hidden="true" />
                {dictionary.nav[item.labelKey]}
              </Link>
            );
          })}

          <div className="mt-3 border-t border-border pt-3">
            <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {dictionary.nav.health}
            </p>
            {healthCategoryNav
              .filter((c) => c.category !== "all")
              .map((item) => {
                const href = `/${locale}${item.href}`;
                const Icon = getIcon(item.icon);
                const isActive = pathname === href;
                return (
                  <Link
                    key={item.href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-light-blue",
                      isActive && "bg-light-blue text-corporate-blue"
                    )}
                  >
                    <Icon className="size-4.5" aria-hidden="true" />
                    {dictionary.health.categories[item.labelKey]}
                  </Link>
                );
              })}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
