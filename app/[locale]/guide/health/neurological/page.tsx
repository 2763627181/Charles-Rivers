import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";
import { HealthCategoryPage } from "@/components/guide/health-category-page";

export default async function NeurologicalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return <HealthCategoryPage category="neurological" dictionary={dictionary} />;
}
