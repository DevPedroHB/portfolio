import { Button } from "@/components/button";
import { HomeBlob } from "@/components/home-blob";
import { LinkScroll } from "@/components/link-scroll";
import { Link } from "@/navigation";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Mouse,
  SendHorizontal,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section id="hero" className="p-section-responsive lg:p-section">
      <div className="mx-auto grid max-w-app gap-4 lg:gap-20">
        <div className="lg:grid-cols-hero grid-cols-hero-responsive grid items-center gap-8 pt-12 lg:pt-20">
          <div className="grid gap-7 lg:-translate-x-24">
            <Link
              href="https://www.linkedin.com/in/devpedrohb/"
              target="_blank"
            >
              <Linkedin className="h-5 w-5 text-violet-9 transition-colors hover:text-violet-10 dark:text-violetdark-9 dark:hover:text-violetdark-10" />
            </Link>
            <Link href="mailto:pedroh.bergamo20@gmail.com" target="_blank">
              <Mail className="h-5 w-5 text-violet-9 transition-colors hover:text-violet-10 dark:text-violetdark-9 dark:hover:text-violetdark-10" />
            </Link>
            <Link href="/https://github.com/DevPedroHB" target="_blank">
              <Github className="h-5 w-5 text-violet-9 transition-colors hover:text-violet-10 dark:text-violetdark-9 dark:hover:text-violetdark-10" />
            </Link>
          </div>
          <div className="lg:order-1 lg:justify-self-center">
            <HomeBlob />
          </div>
          <div className="lg:col-initial col-1/3">
            <h1 className="text-5xl font-semibold">{t("title")}</h1>
            <h3 className="text-mauve-dim my-3 text-xl font-medium">
              {t("sub-title")}
            </h3>
            <p className="text-mauve-dim mb-8">{t("description")}</p>
            <LinkScroll to="contact">
              <Button>
                {t("button")}
                <SendHorizontal className="h-5 w-5" />
              </Button>
            </LinkScroll>
          </div>
        </div>
        <div className="lg:ml-12">
          <LinkScroll
            to="about"
            className="flex items-center gap-1 transition-transform hover:translate-y-1"
          >
            <Mouse className="h-7 w-7 text-violet-9 dark:text-violetdark-9" />
            <span className="text-mauve-normal mr-1 text-sm font-medium">
              {t("scroll-down")}
            </span>
            <ArrowDown className="h-4 w-4 text-violet-9 dark:text-violetdark-9" />
          </LinkScroll>
        </div>
      </div>
    </section>
  );
}
