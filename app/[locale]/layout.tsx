import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { LocaleProvider } from "@/lib/context/locale-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SetHtmlLang } from "@/components/layout/set-html-lang";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale);

  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      <SetHtmlLang locale={locale} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer dictionary={dictionary} />
    </LocaleProvider>
  );
}
