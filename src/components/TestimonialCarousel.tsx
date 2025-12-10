"use client";

import Image from "next/image";
import { useState } from "react";
import { easeOut, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";

const testimonials = [
  {
    icon: "/icon-cloud.png",
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod.",
    name: "Jane Cooper",
  },
  {
    icon: "/icon-stars.png",
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim.",
    name: "Ralph Edwards",
  },
  {
    icon: "/icon-vest.png",
    text: "Viverra lacus suspendisse elit, adipiscing orci non turpis etiam sapien. Viverra blandit sem neque pretium. Duis semper fermentum consequat libero.",
    name: "Courtney Henry",
  },
  {
    icon: "/icon-timer.png",
    text: "Hendrerit augue ut neque vitae, quis integer netus. Rhoncus habitasse amet egestas lorem suscipit phasellus urna.",
    name: "Cameron Williamson",
  },
];

export default function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  const sectionVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
  };

  const section = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <div className="space-y-16 md:space-y-36 my-12 md:my-36">
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative bg-[#155ADA] w-full overflow-hidden text-white"
      >
        <div className="mx-auto px-4 sm:px-6 md:px-16 py-10 md:py-20 max-w-7xl">
          <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-6 md:gap-0">
            <div className="w-full md:max-w-2xl">
              <p className="mb-3 font-semibold text-lg sm:text-2xl tracking-[-0.02em]">
                Join other Sun harvesters
              </p>
              <h2 className="font-roboto-condensed font-bold text-[24px] sm:text-[28px] md:text-[42px] uppercase leading-tight tracking-[-0.02em]">
                LOREM IPSUM DOLOR SIT AMET
              </h2>
              <p className="mt-4 max-w-2xl text-white text-sm md:text-base leading-[25px]">
                Dui euismod iaculis libero, aliquet vitae et elementum
                porttitor. Eleifend mi tristique condimentum congue fusce nunc,
                donec magnis commodo.
              </p>
            </div>

            <div className="flex justify-start md:justify-end w-full md:w-auto">
              <Button
                type="submit"
                className="bg-white hover:bg-white/95 px-6 sm:px-10 py-2.5 sm:py-3 rounded font-bold text-black"
              >
                Lorem Ipsum
              </Button>
            </div>
          </div>

          <div className="relative my-8 md:my-12">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((t, idx) => (
                  <CarouselItem
                    key={idx}
                    className="pl-4 basis-[85%] sm:basis-[55%] md:basis-[45%] lg:basis-[32%] xl:basis-[28%]"
                  >
                    <div className="flex flex-col bg-white shadow-lg p-6 rounded-lg h-full text-[#0f172a]">
                      <Image
                        src={t.icon}
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <p className="mb-6 font-normal text-sm md:text-lg leading-[160%] tracking-normal">
                        {t.text}
                      </p>
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="rounded-full w-10 h-10 overflow-hidden">
                          <Image
                            src="/avatar.jpg"
                            alt={t.name}
                            width={50}
                            height={50}
                            className="object-cover"
                          />
                        </div>
                        <div className="md:text-lg">{t.name}</div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="hidden md:block -bottom-14 md:-bottom-20 left-0 z-20 absolute">
              <div className="flex gap-3">
                <button
                  onClick={scrollPrev}
                  className="flex justify-center items-center bg-transparent hover:bg-white/10 border-2 border-white rounded-full w-10 md:w-11 h-10 md:h-11 text-white transition cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" />
                </button>

                <button
                  onClick={scrollNext}
                  className="flex justify-center items-center bg-transparent hover:bg-white/10 border-2 border-white rounded-full w-10 md:w-11 h-10 md:h-11 text-white transition cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={section}
        className="bg-white w-full"
      >
        <div className="mx-auto px-6 md:px-16 py-12 md:py-20 container">
          <div className="items-center gap-8 md:gap-12 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="mb-6 font-roboto-condensed font-bold text-[#0F172A] text-[28px] sm:text-[32px] md:text-[42px] uppercase leading-tight tracking-[-0.02em]">
                LOREM IPSUM DOLOR SIT AMET
              </h2>

              <div className="max-w-xl">
                <Tabs defaultValue="research" className="mb-6">
                  <TabsList className="grid grid-cols-3 bg-transparent p-0.5 border border-[#CBD5E1] rounded-md w-full font-semibold text-xl">
                    <TabsTrigger
                      value="research"
                      className="bg-transparent data-[state=active]:bg-[#F1F5F9] data-[state=active]:shadow-none data-[state=active]:rounded-none font-semibold"
                    >
                      Research
                    </TabsTrigger>
                    <TabsTrigger
                      value="plan"
                      className="bg-transparent data-[state=active]:bg-[#F1F5F9] data-[state=active]:shadow-none data-[state=active]:rounded-none font-semibold"
                    >
                      Plan
                    </TabsTrigger>
                    <TabsTrigger
                      value="design"
                      className="bg-transparent data-[state=active]:bg-[#F1F5F9] data-[state=active]:shadow-none data-[state=active]:rounded-none font-semibold"
                    >
                      Design
                    </TabsTrigger>
                  </TabsList>

                  <div className="mt-6">
                    <TabsContent value="research" className="p-0">
                      <p className="text-[#475569] text-base md:text-lg leading-[25px]">
                        Egestas fringilla aliquam leo, habitasse arcu varius
                        lorem elit. Neque pellentesque donec et tellus ac varius
                        tortor, bibendum. Nulla felis ac turpis at amet. Purus
                        malesuada placerat arcu at enim elit in accumsan.
                      </p>
                    </TabsContent>

                    <TabsContent value="plan" className="p-0">
                      <p className="text-[#475569] text-base md:text-lg leading-[25px]">
                        Planning brings structure — we map milestones, budgets,
                        and resources so your project scales. Suspendisse varius
                        id velit at facilisis. Integer sit amet nisl fermentum,
                        aliquam eros at.
                      </p>
                    </TabsContent>

                    <TabsContent value="design" className="p-0">
                      <p className="text-[#475569] text-base md:text-lg leading-[25px]">
                        Design turns ideas into pixel-perfect interfaces. Nulla
                        facilisi. Curabitur vitae dui vitae lectus gravida
                        ultricies. Pellentesque habitant morbi tristique
                        senectus et netus.
                      </p>
                    </TabsContent>
                  </div>
                </Tabs>

                <div className="mt-6">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 font-medium text-[#1959AC] hover:underline leading-6 tracking-[0.5px]"
                  >
                    Check tools <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative border rounded-sm w-full h-80 md:h-[400px] lg:h-[400px] overflow-hidden">
                <Image
                  src="/handshake.webp"
                  alt="Handshake"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
