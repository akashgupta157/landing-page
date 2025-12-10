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
          className="items-start gap-8 grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-7 px-6 md:px-16 py-12 md:py-20 md:pb-50">
            <h2 className="mb-6 md:max-w-xl font-roboto-condensed font-bold text-[#1959AC] text-[28px] sm:text-[32px] md:text-[42px] uppercase leading-tight tracking-[-0.02em]">
              Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
            </h2>

            <p className="mb-8 max-w-2xl text-base md:text-lg leading-[25px]">
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
              blandit laoreet urna sapien quam pulvinar. Dolor aliquet est
              tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis
              porta nisl felis. Massa in facilisis semper libero eget eu quisque
              bibendum platea. Tortor fames.
            </p>

            <div className="mb-12">
              <Button
                size="lg"
                className="bg-[#1959AC] hover:bg-[#154A8C] shadow-md px-6 py-3 rounded text-white"
              >
                Loerum Ipsum &nbsp;→
              </Button>
            </div>
          </div>

          <div className="hidden relative md:flex justify-end lg:col-span-5">
            <div className="-top-20 right-0 absolute rounded-sm w-full max-w-md md:max-w-lg h-[360px] md:h-[520px] overflow-hidden">
              <Image
                src="/feature_right.png"
                alt="Feature image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={item}
        className="-bottom-82 md:-bottom-38 left-5 md:left-12 lg:left-16 z-20 absolute shadow-[0px_4px_25px_0px_#00000026]"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative bg-white shadow-2xl p-6 md:p-8 rounded-md w-[320px] md:w-[520px] text-[#222222]">
          <div className="top-3 right-3 absolute w-8 h-8">
            <Image src="/pin.png" alt="pin" width={32} height={32} />
          </div>

          <h3 className="mb-3 font-semibold text-lg tracking-[-0.02em]">
            Lorem ipsum dolor sit
          </h3>

          <p className="mb-4 md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae
            amet habitasse semper.
          </p>

          <p className="mb-4 md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
            placerat vitae amet suspendisse fermentum velit.
          </p>

          <p className="md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet
            quisque scelerisque facilisi. Ultrices lectus viverra pharetra
            commodo.
          </p>
        </div>
      </motion.div>

      <div className="right-0 bottom-0 left-0 absolute md:w-[90%]">
        <div className="bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] w-full h-4" />
      </div>
    </motion.section>
  );
}
