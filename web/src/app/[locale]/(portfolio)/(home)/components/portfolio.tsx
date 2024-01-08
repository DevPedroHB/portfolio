"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface IProject {
  image: string;
  title: string;
  description: string;
  button: string;
}

export function Portfolio() {
  const t = useTranslations("home.portfolio");
  const projects: IProject[] = t.raw("projects");

  return (
    <Section.Root id="portfolio">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("subtitle")}</Section.Subtitle>
      <Section.Container className="block">
        <Swiper
          className="mx-auto max-w-app gap-6 lg:gap-20"
          cssMode={true}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          mousewheel={true}
          keyboard={true}
        >
          {projects.map((project) => {
            return (
              <SwiperSlide key={project.title}>
                <div className="grid items-center gap-6 px-6 lg:grid-cols-2 lg:gap-20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-auto w-64 justify-self-center rounded-lg lg:w-80"
                  />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-mauve-dim mb-3">{project.description}</p>
                    <Button>
                      {project.button}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        strokeWidth={3}
                      />
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          className="swiper-button-next"
          style={{
            right: "-1rem",
            color: "hsl(252, 56.0%, 57.5%)",
          }}
        ></div>
        <div
          className="swiper-button-prev"
          style={{
            left: "-1rem",
            color: "hsl(252, 56.0%, 57.5%)",
          }}
        ></div>
        <div className="swiper-pagination" style={{ bottom: "-2.5rem" }}></div>
      </Section.Container>
    </Section.Root>
  );
}
