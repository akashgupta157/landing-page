"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import { Button } from "./ui/button";

export default function CollageHero() {
  const container = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, ease: easeOut, duration: 0.6 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
  };
  return (
    <div className="relative space-y-16 md:space-y-36">
      <Image
        src="/Bg-Graphic (2).png"
        alt="Background"
        fill
        className=""
        priority
      />
      <section className="relative bg-white w-full overflow-hidden">
        <div className="md:hidden relative w-full min-h-[520px]">
          <Image
            src="/grouped_bike.webp"
            alt="Collage background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-blue-100/70" aria-hidden />
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-[720px] font-roboto-condensed font-bold text-[#222222] text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] uppercase leading-tight md:leading-[1.02] lg:leading-[1.05] tracking-[-0.02em]"
            >
              LOREM IPSUM DOLOR SIT AMET
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="mt-4 max-w-[760px] text-sm xs:text-base sm:text-lg md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]"
            >
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
              porttitor pharetra tempor quis arcu. Ipsum nullam.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-8"
            >
              <Button className="bg-[#1959AC] hover:bg-[#154A8C] px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 rounded text-white text-sm xs:text-base">
                Loerum Ipsum &nbsp;→
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="hidden md:block relative bg-[#F1F5F9] min-w-screen h-[700px] overflow-hidden">
          <Image
            src="/grouped_bike.webp"
            alt="Collage background"
            fill
            priority
            className="p-16 pb-0 object-cover"
          />
          <div className="top-16 left-16 absolute space-y-5 max-w-md">
            <h3 className="font-semibold text-[#475569] text-xl uppercase leading-[100%] tracking-[0.08em]">
              no limits
            </h3>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-roboto-condensed font-bold text-[#222222] text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] uppercase leading-tight md:leading-[1.02] lg:leading-[1.05] tracking-[-0.02em]"
            >
              LOREM IPSUM DOLOR SIT AMET
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="text-sm xs:text-base sm:text-lg md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]"
            >
              Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae
              porttitor pharetra tempor quis arcu. Ipsum nullam.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
            >
              <Button
                size="lg"
                className="bg-[#1959AC] hover:bg-[#154A8C] px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 rounded text-white text-sm xs:text-base"
              >
                Loerum Ipsum &nbsp;→
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F8F8F8] w-full lg:w-[95%]">
        <div className="mx-auto px-6 md:px-12 py-12 md:py-20 md:pl-0 container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="items-start gap-8 md:gap-16 grid grid-cols-1 lg:grid-cols-12"
          >
            <motion.div variants={item} className="lg:col-span-5">
              <div className="relative md:-mt-38 border w-full h-[420px] md:h-[520px]">
                <Image
                  src="/on_bike_together.webp"
                  alt="Riders on road"
                  fill
                  className="top-0 absolute object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                  priority
                />
              </div>
            </motion.div>

            <motion.div variants={item} className="lg:col-span-7">
              <p className="mb-2 xs:mb-3 font-semibold text-[#0546D2] text-lg xs:text-xl sm:text-2xl tracking-[-0.04em]">
                Lorem ipsum
              </p>

              <h2 className="mb-4 xs:mb-5 font-roboto-condensed font-bold text-[#22222] text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] uppercase leading-tight md:leading-[1.02] lg:leading-[1.05] tracking-[-0.02em]">
                <span className="text-[#1959AC]">LOREM</span> IPSUM DOLOR SIT
                AMET CONSECTETUR. ENIM DONEC.
              </h2>

              <p className="mb-6 xs:mb-8 max-w-xl text-sm xs:text-base sm:text-lg md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]">
                Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio
                enim amet non.
              </p>

              <div className="gap-6 grid grid-cols-2 mb-8 max-w-2xl font-semibold text-[#222222] sm:text-lg md:text-xl uppercase leading-tight tracking-[-0.02em]">
                <ul className="space-y-6 list-none">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>

                <ul className="space-y-6 list-none">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>

              <div className="mt-3 xs:mt-4">
                <Button
                  size="lg"
                  className="bg-[#1959AC] hover:bg-[#154A8C] shadow-md px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 rounded text-white text-sm xs:text-base"
                  aria-label="Learn more"
                >
                  Loerum Ipsum &nbsp;→
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="right-0 bottom-0 left-0 absolute w-[95%]">
          <div className="bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] w-full h-4" />
        </div>
      </section>
    </div>
  );
}
