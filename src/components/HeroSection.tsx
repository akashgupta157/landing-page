"use client";

import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { easeOut, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: easeOut },
    },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center bg-white min-h-screen overflow-hidden"
    >
      <div className="mx-auto px-4 sm:px-6 md:px-16 container">
        <div className="items-center gap-6 sm:gap-8 grid grid-cols-1 md:grid-cols-12">
          <motion.div
            variants={stagger}
            className="md:col-span-6 mt-24 xs:mt-28 sm:mt-36 w-full"
          >
            <motion.h1
              variants={item}
              className="font-roboto-condensed font-bold text-[#222222] text-[28px] xs:text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[64px] leading-[1.2] sm:leading-[1.3] md:leading-[1.25] lg:leading-[1.2] xl:leading-[70px] tracking-[-0.02em]"
            >
              Lorem ipsum dolor sit amet
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-sm xs:text-base sm:text-lg leading-[1.5] sm:leading-[25px]"
            >
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue
              quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi
              platea morbi libero imperdiet neque. Justo suspendisse tristique
              posuere quis eget viverra. Nunc euismod ultrices etiam nulla
              habitasse.
            </motion.p>

            <motion.form
              variants={containerVariants}
              className="flex sm:flex-row flex-col items-start sm:items-center gap-3 mt-8 sm:mt-10 md:mt-12"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter form"
            >
              <motion.div variants={item} className="w-full sm:w-auto">
                <Input
                  aria-label="Email address"
                  placeholder="Enter your email"
                  className="px-4 py-4 sm:py-5 border border-[#C3C3C3] rounded w-full sm:min-w-[280px] md:min-w-xs"
                />
              </motion.div>

              <motion.div variants={item} className="w-full sm:w-auto">
                <Button
                  type="submit"
                  size="lg"
                  className="flex justify-center items-center gap-2.5 bg-[#1959AC] hover:bg-[#154A8C] shadow-[0_4px_20px_0_rgba(0,0,0,0.15)] px-5 sm:px-6 py-2.5 rounded w-full sm:w-auto font-bold text-white text-sm sm:text-base transition-colors"
                >
                  Submit <ArrowRight className="size-4 sm:size-5" />
                </Button>
              </motion.div>
            </motion.form>

            <motion.div
              variants={item}
              className="flex justify-center sm:justify-start items-center gap-3 mt-4 sm:mt-5"
            >
              <div className="flex justify-center items-center bg-[#155ADA] rounded-full size-6 sm:size-6.5 md:size-7.5">
                <Check size={14} className="text-white" strokeWidth={2.5} />
              </div>
              <p className="font-medium text-xs sm:text-sm md:text-base">
                No credit card required!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="hidden md:block relative col-span-6 h-screen"
          >
            <div className="absolute inset-0 flex justify-end items-stretch">
              <div className="relative -mr-16 lg:-mr-20 w-full max-w-[520px] lg:max-w-[620px] xl:max-w-[720px] overflow-hidden clip-diagonal">
                <Image
                  src="/hero_img.webp"
                  alt="Hero Image"
                  fill
                  priority
                  className="object-center object-cover scale-115"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="right-0 bottom-0 left-0 absolute bg-linear-to-t from-white to-transparent w-screen h-8 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
