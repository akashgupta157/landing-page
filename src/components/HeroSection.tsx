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
      <div className="mx-auto px-6 md:px-16 container">
        <div className="items-center gap-8 grid grid-cols-1 md:grid-cols-12">
          <motion.div
            variants={stagger}
            className="md:col-span-6 sm:mt-36 w-full"
          >
            <motion.h1
              variants={item}
              className="font-roboto-condensed font-bold text-[#222222] text-[32px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Lorem ipsum dolor sit amet
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-base sm:text-lg leading-[25px]"
            >
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue
              quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi
              platea morbi libero imperdiet neque. Justo suspendisse tristique
              posuere quis eget viverra. Nunc euismod ultrices etiam nulla
              habitasse.
            </motion.p>

            <motion.form
              variants={containerVariants}
              className="flex sm:flex-row flex-col items-start sm:items-center gap-3 mt-12"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter form"
            >
              <motion.div variants={item} className="w-full sm:w-auto">
                <Input
                  aria-label="Email address"
                  placeholder="Enter your email"
                  className="px-4 py-5 border border-[#C3C3C3] rounded w-full sm:min-w-xs"
                />
              </motion.div>

              <motion.div variants={item} className="w-full sm:w-auto">
                <Button
                  type="submit"
                  size="lg"
                  className="flex justify-center items-center gap-2.5 bg-[#1959AC] hover:bg-[#154A8C] shadow-[0_4px_20px_0_rgba(0,0,0,0.15)] px-6 py-2.5 rounded w-full sm:w-auto font-bold text-white transition-colors"
                >
                  Submit <ArrowRight className="size-5" />
                </Button>
              </motion.div>
            </motion.form>

            <motion.div
              variants={item}
              className="flex justify-center sm:justify-start items-center gap-3 mt-4 sm:mt-5"
            >
              <div className="flex justify-center items-center bg-[#155ADA] rounded-full size-6.5 sm:size-7.5">
                <Check size={16} color="white" strokeWidth={2.5} />
              </div>
              <p className="font-medium text-sm sm:text-base">
                No credit card required!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="hidden md:block relative col-span-6 h-screen"
          >
            <div className="absolute inset-0 flex justify-end items-stretch">
              <div className="relative -mr-20 w-[620px] overflow-hidden clip-diagonal">
                <Image
                  src="/hero_img.webp"
                  alt="Hero Image"
                  fill
                  priority
                  className="object-center object-cover scale-115"
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
