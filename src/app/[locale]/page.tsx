import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("common");

  return (
    <main className="flex flex-1 items-center justify-center p-8">
      {/* Phase 0 placeholder — homepage UI is built in Phase 3 of the roadmap */}
      <p className="text-muted-foreground">{t("siteName")} — scaffold OK</p>
    </main>
  );
}
