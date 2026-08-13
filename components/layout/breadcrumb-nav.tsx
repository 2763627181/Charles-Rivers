"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useDictionary, useLocale } from "@/lib/context/locale-context";
import type { Dictionary } from "@/types/dictionary";

function resolveLabel(segment: string, dictionary: Dictionary): string {
  const map: Record<string, string> = {
    guide: dictionary.nav.guide,
    aging: dictionary.nav.aging,
    "coat-colors": dictionary.nav.coatColors,
    "ear-identification": dictionary.nav.earId,
    health: dictionary.nav.health,
    sexing: dictionary.nav.sexing,
    reference: dictionary.nav.reference,
    "head-body": dictionary.health.categories.headBody,
    eyes: dictionary.health.categories.eyes,
    "repro-digest": dictionary.health.categories.reproDigest,
    neurological: dictionary.health.categories.neurological,
    emergency: dictionary.health.categories.emergency,
    handbook: dictionary.health.categories.handbook,
  };
  return map[segment] ?? segment;
}

export function BreadcrumbNav() {
  const locale = useLocale();
  const dictionary = useDictionary();
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean).slice(1); // drop locale segment
  if (segments.length === 0) return null;

  const crumbs = segments.map((segment, index) => {
    const href = `/${locale}/${segments.slice(0, index + 1).join("/")}`;
    return { segment, href, label: resolveLabel(segment, dictionary) };
  });

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-white px-4 py-3 sm:px-6 lg:px-8">
      <Breadcrumb>
        <BreadcrumbList>
          {crumbs.map((crumb, index) => (
            <span key={crumb.href} className="flex items-center gap-1.5">
              <BreadcrumbItem>
                {index === crumbs.length - 1 ? (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={crumb.href}>{crumb.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < crumbs.length - 1 && <BreadcrumbSeparator />}
            </span>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      {pathname !== `/${locale}/guide` && (
        <Link
          href={`/${locale}/guide`}
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-corporate-blue transition-colors hover:bg-light-blue"
        >
          <ArrowLeft className="size-3.5" />
          {dictionary.nav.backToGuide}
        </Link>
      )}
    </div>
  );
}
