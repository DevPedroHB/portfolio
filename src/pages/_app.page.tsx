import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { globalStyles } from "@/styles/global";
import { darkTheme } from "@/styles/themes/dark";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme,
      }}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
