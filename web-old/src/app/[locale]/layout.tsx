import { ThemeProvider } from "@/components/theme-provider";
import { Toast } from "@/components/toastify";
import { locales } from "@/constants/locales";
import { env } from "@/env";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

interface IMetadata {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: IMetadata): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      template: "%s | PedroHB",
      default: "PedroHB",
    },
    description: t("description"),
    metadataBase: new URL(env.APP_URL),
  };
}

interface IRootLayout {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params }: IRootLayout) {
  const messages = useMessages();

  if (!locales.includes(params.locale)) {
    notFound();
  }

  return (
    <html
      lang={params.locale}
      className={twMerge(poppins.variable, "scroll-smooth antialiased")}
    >
      <body
        className={twMerge(
          "bg-mauve-app text-mauve-normal",
          "scrollbar scrollbar-track-mauve-2 scrollbar-thumb-violet-9 scrollbar-thumb-rounded-full scrollbar-w-1 scrollbar-h-1",
          "hover:scrollbar-thumb-violet-10",
          "dark:scrollbar-track-mauvedark-2 dark:scrollbar-thumb-violetdark-9 dark:hover:scrollbar-thumb-violetdark-10",
        )}
      >
        <ThemeProvider>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            {children}
            <Toast />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
