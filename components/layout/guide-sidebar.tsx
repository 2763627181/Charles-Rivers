"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, BookImage } from "lucide-react";
import { primaryNav, healthCategoryNav } from "@/data/navigation";
import { useDictionary, useLocale } from "@/lib/context/locale-context";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

function SidebarLink({
  href,
  label,
  icon: Icon,
  active,
  indent,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active: boolean;
  indent?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
        "hover:bg-light-blue hover:text-corporate-blue",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue",
        indent && "ml-3",
        active && "bg-light-blue text-corporate-blue"
      )}
    >
      <Icon
        className={cn(
          "size-4 shrink-0 text-muted-foreground/70 transition-colors group-hover:text-corporate-blue",
          active && "text-corporate-blue"
        )}
      />
      <span className="truncate">{label}</span>
    </Link>
  );
}

export function GuideSidebar() {
  const locale = useLocale();
  const dictionary = useDictionary();
  const pathname = usePathname();
  const base = `/${locale}`;

  const identificationLinks = primaryNav.filter((item) => item.href !== "/guide" && item.href !== "/guide/health");

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-border bg-white py-6 pr-2 lg:block">
      <nav className="flex flex-col gap-6 px-3" aria-label={dictionary.nav.guide}>
        <div className="flex flex-col gap-1">
          <SidebarLink
            href={`${base}/guide`}
            label={dictionary.guideDashboard.title}
            icon={LayoutGrid}
            active={pathname === `${base}/guide`}
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
            {dictionary.nav.identificationGroup}
          </p>
          {identificationLinks.map((item) => {
            const href = `${base}${item.href}`;
            return (
              <SidebarLink
                key={item.href}
                href={href}
                label={dictionary.nav[item.labelKey]}
                icon={getIcon(item.icon)}
                active={pathname.startsWith(href)}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-1">
          <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
            {dictionary.nav.health}
          </p>
          {healthCategoryNav.map((item) => {
            const href = `${base}${item.href}`;
            const active = pathname === href;
            return (
              <SidebarLink
                key={item.href}
                href={href}
                label={dictionary.health.categories[item.labelKey]}
                icon={getIcon(item.icon)}
                active={active}
                indent={item.category !== "all"}
              />
            );
          })}
        </div>

        <div className="mt-auto flex flex-col gap-1 border-t border-border pt-4">
          <SidebarLink
            href={`${base}/guide/reference`}
            label={dictionary.nav.reference}
            icon={BookImage}
            active={pathname === `${base}/guide/reference`}
          />
        </div>
      </nav>
    </aside>
  );
}
