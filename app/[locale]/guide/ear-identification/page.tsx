import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";
import { SectionHeader } from "@/components/guide/section-header";
import { EarIdContent } from "@/components/guide/ear-id-content";

export default async function EarIdentificationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader eyebrow={dictionary.nav.guide} title={dictionary.earId.title} description={dictionary.earId.subtitle} />
      <EarIdContent locale={locale} dictionary={dictionary} />
    </div>
  );
}
