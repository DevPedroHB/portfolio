"use client";

import { Avatar } from "@/components/ui/avatar";
import { Rating } from "@/components/ui/rating";
import { Section } from "@/components/ui/section";
import { faker } from "@/lib/faker";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";

interface ITestimonial {
  name: string;
  type: string;
  content: string;
}

export function Testimonial() {
  const t = useTranslations("home.testimonial");
  const testimonials: ITestimonial[] = t.raw("testimonials");

  return (
    <Section.Root id="testimonial">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("subtitle")}</Section.Subtitle>
      <Section.Container className="block">
        <Swiper
          loop
          grabCursor
          spaceBetween={48}
          pagination={{
            el: ".swiper-pagination-testimonials",
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            568: {
              slidesPerView: 2,
            },
          }}
          mousewheel
          keyboard
        >
          {testimonials.map((testimonial) => {
            return (
              <SwiperSlide key={testimonial.name}>
                <div>
                  <div className="mb-4 flex justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={faker.image.avatar()}
                        alt={`Avatar ${testimonial.name}`}
                      />
                      <div className="flex-1">
                        <h3 className="line-clamp-1 text-xl font-medium">
                          {faker.person.fullName()}
                        </h3>
                        <span className="text-mauve-dim text-sm">
                          {testimonial.type}
                        </span>
                      </div>
                    </div>
                    <Rating rating={faker.number.int({ min: 2, max: 5 })} />
                  </div>
                  <p className="text-mauve-dim mb-10 line-clamp-4">
                    {faker.lorem.text()}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-pagination-testimonials"></div>
      </Section.Container>
    </Section.Root>
  );
}
