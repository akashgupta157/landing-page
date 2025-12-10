"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";

const features = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    copy: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum.",
    iconAlt: "feature icon 1",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    copy: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum.",
    iconAlt: "feature icon 2",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    copy: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum.",
    iconAlt: "feature icon 3",
  },
];

const container = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, ease: easeOut, duration: 0.5 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { ease: easeOut, duration: 0.45 } },
};

export default function FeatureList() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="bg-transparent py-8 xs:py-10 sm:py-12 w-full"
    >
      <div className="bg-white mx-auto px-4 xs:px-6 sm:px-6 md:py-16 lg:py-18 xl:py-20 md:pr-0 md:pl-14 lg:pl-16 xl:pl-18 container">
        <div className="items-start gap-6 xs:gap-8 grid grid-cols-1 md:grid-cols-12">
          <motion.div
            variants={item}
            className="space-y-4 sm:space-y-5 md:col-span-7"
          >
            <h2 className="font-semibold text-[#0546D2] text-lg xs:text-xl sm:text-2xl tracking-[-0.04em]">
              Lorem ipsum dolor sit
            </h2>

            <h2 className="font-roboto-condensed font-bold text-[#222222] text-[28px] xs:text-[32px] sm:text-[36px] md:text-[38px] lg:text-[42px] leading-tight tracking-[-0.02em]">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
            </h2>

            <p className="max-w-2xl text-sm xs:text-base sm:text-lg md:text-lg leading-[1.5] xs:leading-[1.6] sm:leading-[25px]">
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
              leo eleifend condimentum in vitae faucibus. Amet massa malesuada
              sit pretium. Donec pharetra erat lacus suspendisse ornare.
            </p>

            <div className="space-y-4 xs:space-y-6 md:space-y-8">
              {features.map((f, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  className="flex items-start gap-3 xs:gap-4"
                  aria-labelledby={`feature-title-${idx}`}
                >
                  <div className="mt-0.5 xs:mt-1 shrink-0">
                    <div className="flex justify-center items-center bg-white rounded-full w-7 xs:w-8 sm:w-8 md:w-9 h-7 xs:h-8 sm:h-8 md:h-9">
                      <Image
                        src={`/section2_logo.webp`}
                        alt={f.iconAlt}
                        width={20}
                        height={20}
                        className="w-7 xs:w-8 sm:w-8 md:w-9 h-7 xs:h-8 sm:h-8 md:h-9"
                      />
                    </div>
                  </div>
                  <div>
                    <h3
                      id={`feature-title-${idx}`}
                      className="font-semibold text-[#222222] text-base xs:text-lg sm:text-xl tracking-[-0.02em]"
                    >
                      {f.title}
                    </h3>
                    <p className="mt-1 xs:mt-1.5 sm:mt-2 max-w-xl text-xs xs:text-sm sm:text-base md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]">
                      {f.copy}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="hidden md:flex justify-center md:col-span-5 mt-8 xs:mt-10"
          >
            <div className="relative w-full md:w-[380px] lg:w-[450px] xl:w-[520px] h-[380px] md:h-[480px] lg:h-[520px] xl:h-[560px] overflow-hidden">
              <Image
                src="/section_2.webp"
                alt="Two colleagues talking"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 380px, (max-width: 1280px) 450px, 520px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-white md:pl-20 lg:pl-22 xl:pl-24">
        <div className="bg-linear-to-r from-[#043898] via-[#079902] to-[#170041] w-full h-4 xs:h-5" />
      </div>
    </motion.section>
  );
}