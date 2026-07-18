import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Alexandria, Plus_Jakarta_Sans } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import "../globals.css";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  variable: "--font-alexandria",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Shumos Care",
  description:
    "Shumos Care Physiotherapy & Rehabilitation Center — Taif, Saudi Arabia",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale as Locale);
  const dir = locale === "ar" ? "rtl" : "ltr";
  const activeFontVariable =
    locale === "ar" ? "var(--font-alexandria)" : "var(--font-plus-jakarta-sans)";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${alexandria.variable} ${plusJakartaSans.variable} h-full antialiased`}
      style={{ "--font-sans": activeFontVariable } as CSSProperties}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
