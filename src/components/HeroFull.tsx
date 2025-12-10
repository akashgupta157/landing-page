"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { easeOut, motion } from "framer-motion";

export default function HeroFull() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
  };

  const content = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut, delay: 0.12 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: easeOut },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const brands = [
    { src: "/hero.webp", name: "Hero" },
    { src: "/honda.webp", name: "Honda" },
    { src: "/bajaj.webp", name: "Bajaj" },
    { src: "/tvs.webp", name: "TVS" },
    { src: "/royal_enfield.webp", name: "Royal Enfield" },
    { src: "/yamaha.webp", name: "Yamaha" },
    { src: "/ktm.webp", name: "KTM" },
    { src: "/ather.webp", name: "Ather" },
    { src: "/ola_electric.webp", name: "OLA Electric" },
    { src: "/revolt.webp", name: "Revolt" },
    { src: "/ultraviolette.webp", name: "Ultraviolette" },
    { src: "/tork.webp", name: "Tork Motors" },
  ];

  return (
    <div className="space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20 md:py-16 lg:py-18 xl:py-20">
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="relative flex justify-center items-center w-full min-h-[600px] xs:min-h-[650px] sm:min-h-[700px] md:min-h-[650px] lg:min-h-[680px] xl:min-h-[750px] overflow-hidden"
        aria-label="Hero section"
      >
        <div className="-z-10 absolute inset-0">
          <Image
            src="/section_3.webp"
            alt="Two motorbikes riding in rain"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.45)] to-[rgba(0,0,0,0.55)]" />
        </div>

        <div className="top-3 xs:top-4 sm:top-6 md:top-8 lg:top-10 xl:top-12 left-3 xs:left-4 sm:left-6 md:left-10 lg:left-12 z-20 absolute">
          <div
            className="bg-[#DBDBDB] px-3 xs:px-4 sm:px-6 py-1.5 sm:py-2 font-extrabold xs:text-xl sm:text-2xl md:text-3xl tracking-[-0.02em]"
            aria-hidden
            role="img"
          >
            <span className="">LOGO</span>
          </div>
        </div>

        <motion.div
          variants={content}
          className="mx-auto px-3 xs:px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 max-w-5xl lg:max-w-6xl text-center container"
        >
          <h1 className="px-2 xs:px-3 font-roboto-condensed font-bold text-[24px] text-white xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] uppercase leading-tight md:leading-[1.02] lg:leading-[1.05] tracking-[-0.02em]">
            Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus
            egestas aliquam viverra mi.
          </h1>

          <p className="mx-auto mt-3 xs:mt-4 sm:mt-6 px-2 xs:px-3 sm:px-0 max-w-2xl lg:max-w-3xl font-semibold text-white text-xs xs:text-sm sm:text-base md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]">
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
            volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
            justo pellentesque id sed. Id tellus id luctus id. At quis nunc
            libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum
            nulla quam.
          </p>

          <p className="mx-auto mt-2 xs:mt-3 sm:mt-4 px-2 xs:px-3 sm:px-0 max-w-2xl lg:max-w-3xl font-semibold text-white text-xs xs:text-sm sm:text-base md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]">
            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
            condimentum ultrices non. Ornare semper in tincidunt pellentesque
            cras mauris in vitae. At viverra quis eu malesuada vel et porttitor.
            Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a
            pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
          </p>

          <div className="flex justify-center mt-4 xs:mt-5 sm:mt-6 md:mt-8 px-2 xs:px-3 sm:px-0">
            <Button
              type="button"
              size="lg"
              className="flex justify-center items-center gap-2 sm:gap-3 bg-white hover:bg-white/90 px-3 xs:px-4 sm:px-6 py-2.5 xs:py-3 rounded w-full sm:w-auto font-bold text-[#1959AC] text-xs xs:text-sm sm:text-base"
              aria-label="Learn more"
            >
              Loerum Ipsum{" "}
              <ArrowRight className="w-4 xs:w-5 sm:w-6 md:w-7 h-4 xs:h-5 sm:h-6 md:h-7" />
            </Button>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="bg-white py-8 xs:py-10 sm:py-12 md:py-16 lg:py-18 xl:py-20 w-full"
      >
        <div className="mx-auto px-4 xs:px-6 sm:px-6 md:px-10 lg:px-12 xl:px-16 text-center container">
          <motion.h2
            variants={fadeUp}
            className="md:mx-auto mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 md:max-w-2xl lg:max-w-3xl font-roboto-condensed font-bold text-[#222222] text-[24px] xs:text-[26px] sm:text-[28px] md:text-[36px] lg:text-[42px] uppercase leading-tight tracking-[-0.02em]"
          >
            Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
          </motion.h2>

          <motion.div
            variants={stagger}
            className="place-items-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
          >
            {brands.map((b, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative flex justify-center items-center w-[80px] xs:w-[90px] sm:w-[100px] md:w-[120px] lg:w-[130px] xl:w-[140px] h-[40px] xs:h-[45px] sm:h-[50px] md:h-[60px] lg:h-[65px] xl:h-[70px]"
              >
                <Image
                  src={b.src}
                  alt={`${b.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 480px) 80px, (max-width: 640px) 90px, (max-width: 768px) 100px, (max-width: 1024px) 120px, (max-width: 1280px) 130px, 140px"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
