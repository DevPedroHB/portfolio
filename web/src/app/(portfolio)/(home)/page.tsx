import { ChangeLocale } from "@/components/change-locale";
import { ChangeTheme } from "@/components/change-theme";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    title: t("titles.home"),
  };
}

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <div className="flex items-center gap-4">
        <ChangeTheme />
        <ChangeLocale />
      </div>
    </main>
  );
}
