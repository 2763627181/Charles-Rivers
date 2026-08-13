import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";
import { SectionHeader } from "@/components/guide/section-header";
import { HandbookContent } from "@/components/guide/handbook-content";

export default async function HandbookPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader eyebrow={dictionary.nav.health} title={dictionary.health.categories.handbook} description={dictionary.health.subtitle} />
      <HandbookContent dictionary={dictionary} />
    </div>
  );
}
