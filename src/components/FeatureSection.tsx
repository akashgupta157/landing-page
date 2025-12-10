"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function FeatureSection() {
  const item = [
    {
      image: "/blog_img1.webp",
      desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
    },
    {
      image: "/blog_img2.webp",
      desc: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
    },
    {
      image: "/blog_img3.webp",
      desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex justify-center lg:justify-end items-center sm:pt-36 pb-10 xs:pb-12 sm:pb-14"
    >
      <div className="relative gap-8 sm:gap-10 grid grid-cols-1 md:grid-cols-12 shadow-[0px_4px_25px_0px_#00000026] p-5 xs:p-6 sm:p-8 sm:py-12 sm:pr-8 lg:pr-10 xl:pr-12 border border-[#D4D4D4] w-full lg:w-[95%] container">
        <motion.div
          variants={fadeUp}
          className="space-y-4 sm:space-y-5 md:col-span-6"
        >
          <h2 className="font-semibold text-[#0546D2] text-lg xs:text-xl sm:text-2xl tracking-[-0.04em]">
            Lorem ipsum dolor sit
          </h2>

          <h1 className="font-roboto-condensed font-bold text-[#222222] text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] uppercase leading-tight tracking-[-0.02em]">
            Lorem ipsum dolor sit amet
          </h1>

          <p className="text-sm xs:text-base sm:text-lg md:text-lg leading-[1.5] sm:leading-[25px]">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
            facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
            integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus
            at purus lectus.
          </p>

          <div className="space-y-4 xs:space-y-6 mt-4 xs:mt-6">
            {item.map((it, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-center xs:items-center gap-4 xs:gap-6"
              >
                <div className="relative mt-1 xs:mt-0 size-16 xs:size-18 sm:size-20 md:size-24 lg:size-30 overflow-hidden shrink-0">
                  <Image
                    src={it.image}
                    alt="blog"
                    fill
                    className="object-cover"
                    sizes="(max-width: 480px) 64px, (max-width: 640px) 72px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 120px"
                  />
                </div>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]">
                  {it.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="flex sm:flex-row flex-col items-center xs:items-center gap-4 xs:gap-6 mt-8 xs:mt-10 sm:mt-16 mb-4 xs:mb-6 sm:mb-0"
          >
            <Button
              type="button"
              className="flex items-center gap-2.5 bg-[#1959AC] hover:bg-[#154A8C] shadow-[0_4px_20px_rgba(0,0,0,0.15)] px-4 xs:px-6 py-2.5 rounded w-full xs:w-40 sm:w-42 font-bold text-white text-sm xs:text-base transition-colors"
            >
              Lorem Ipsum <ArrowRight className="w-4 xs:w-5 h-4 xs:h-5" />
            </Button>
            <div className="flex items-center gap-2 text-[#043898] text-sm xs:text-base">
              <Phone className="w-4 xs:w-5 h-4 xs:h-5" />
              <p className="font-semibold">123456789</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="hidden md:flex justify-end col-span-6"
        >
          <div className="relative w-full max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] h-[600px] lg:h-[650px] xl:h-[680px] overflow-hidden">
            <Image
              src="/motorcycle_1.webp"
              alt="Main image"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 450px, (max-width: 1280px) 500px, 550px"
            />
          </div>
        </motion.div>
        <div className="bottom-0 absolute bg-[linear-gradient(90deg,#043898_0%,#079902_45.96%,#170041_91.18%)] w-full xs:w-[95%] sm:w-[96%] h-4 xs:h-5" />
      </div>
    </motion.section>
  );
}
