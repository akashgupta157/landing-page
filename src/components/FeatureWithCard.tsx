"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import { Button } from "./ui/button";

export default function FeatureWithCard() {
  const section = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, ease: easeOut, duration: 0.6 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={section}
      className="relative bg-[#F3F4F6] w-full overflow-visible"
    >
      <div className="mx-auto container">
        <motion.div
          variants={item}
          className="items-start gap-6 xs:gap-8 grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-7 px-4 xs:px-6 sm:px-8 md:px-14 lg:px-16 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-18 xl:py-20 md:pb-40 lg:pb-45 xl:pb-50">
            <h2 className="mb-4 xs:mb-5 sm:mb-6 md:max-w-xl lg:max-w-2xl font-roboto-condensed font-bold text-[#1959AC] text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] uppercase leading-tight tracking-[-0.02em]">
              Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
            </h2>

            <p className="mb-6 xs:mb-8 max-w-2xl text-sm xs:text-base sm:text-lg md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]">
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
              blandit laoreet urna sapien quam pulvinar. Dolor aliquet est
              tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis
              porta nisl felis. Massa in facilisis semper libero eget eu quisque
              bibendum platea. Tortor fames.
            </p>

            <div className="mb-8 xs:mb-10 sm:mb-12">
              <Button
                size="lg"
                className="bg-[#1959AC] hover:bg-[#154A8C] shadow-md px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 rounded text-white text-sm xs:text-base"
              >
                Loerum Ipsum &nbsp;→
              </Button>
            </div>
          </div>

          <div className="hidden relative md:flex justify-end lg:col-span-5">
            <div className="-top-16 md:-top-20 lg:-top-24 xl:-top-28 right-0 absolute rounded-sm w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-[320px] md:h-[480px] lg:h-[520px] xl:h-[560px] overflow-hidden">
              <Image
                src="/feature_right.png"
                alt="Feature image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 45vw, 40vw"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={item}
        className="-bottom-72 xs:-bottom-76 sm:-bottom-80 md:-bottom-36 left-3 xs:left-4 sm:left-5 md:left-10 lg:left-14 xl:left-16 z-20 absolute shadow-[0px_4px_25px_0px_#00000026]"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative bg-white shadow-2xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 rounded-md w-[280px] xs:w-[300px] sm:w-[320px] md:w-[480px] lg:w-[520px] xl:w-[540px] text-[#222222]">
          <div className="top-2 xs:top-3 right-2 xs:right-3 absolute w-7 xs:w-8 h-7 xs:h-8">
            <Image
              src="/pin.png"
              alt="pin"
              width={28}
              height={28}
              className="w-full h-full"
            />
          </div>

          <h3 className="mb-2 xs:mb-3 font-semibold text-base xs:text-lg tracking-[-0.02em]">
            Lorem ipsum dolor sit
          </h3>

          <p className="mb-3 xs:mb-4 text-sm xs:text-base md:text-lg leading-[1.4] xs:leading-[1.5]">
            Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae
            amet habitasse semper.
          </p>

          <p className="mb-3 xs:mb-4 text-sm xs:text-base md:text-lg leading-[1.4] xs:leading-[1.5]">
            Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
            placerat vitae amet suspendisse fermentum velit.
          </p>

          <p className="text-sm xs:text-base md:text-lg leading-[1.4] xs:leading-[1.5]">
            Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet
            quisque scelerisque facilisi. Ultrices lectus viverra pharetra
            commodo.
          </p>
        </div>
      </motion.div>

      <div className="right-0 bottom-0 left-0 absolute md:w-[90%] lg:w-[92%] xl:w-[94%]">
        <div className="bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] w-full h-3 xs:h-4" />
      </div>
    </motion.section>
  );
}
