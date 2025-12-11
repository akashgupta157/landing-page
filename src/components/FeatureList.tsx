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
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
      className="relative bg-transparent py-8 xs:py-10 sm:py-12 w-full overflow-hidden"
    >
      <motion.div
        className="top-20 left-10 absolute bg-blue-100 opacity-20 blur-3xl rounded-full w-20 h-20"
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="right-10 bottom-20 absolute bg-green-100 opacity-20 blur-3xl rounded-full w-24 h-24"
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <div className="z-10 relative bg-white mx-auto px-4 xs:px-6 sm:px-6 md:py-16 lg:py-18 xl:py-20 md:pr-0 md:pl-14 lg:pl-16 xl:pl-18 container">
        <div className="items-start gap-6 xs:gap-8 grid grid-cols-1 md:grid-cols-12">
          <motion.div
            variants={item}
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 md:col-span-7"
          >
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-semibold text-[#0546D2] text-lg xs:text-xl sm:text-2xl tracking-[-0.04em]"
            >
              Lorem ipsum dolor sit
            </motion.h2>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.02 },
                },
              }}
              className="font-roboto-condensed font-bold text-[#222222] text-[28px] xs:text-[32px] sm:text-[36px] md:text-[38px] lg:text-[42px] leading-tight tracking-[-0.02em]"
            >
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl text-sm xs:text-base sm:text-lg md:text-lg leading-[1.5] xs:leading-[1.6] sm:leading-[25px]"
            >
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
              leo eleifend condimentum in vitae faucibus. Amet massa malesuada
              sit pretium. Donec pharetra erat lacus suspendisse ornare.
            </motion.p>

            <div className="space-y-4 xs:space-y-6 md:space-y-8">
              {features.map((f, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        delay: idx * 0.1 + 0.3,
                        ease: "backOut",
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{
                    x: 5,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="group relative flex items-start gap-3 xs:gap-4"
                  aria-labelledby={`feature-title-${idx}`}
                >
                  <motion.div
                    className="top-8 bottom-0 left-3.5 absolute bg-gradient-to-b from-blue-300 to-transparent opacity-0 group-hover:opacity-100 w-[2px]"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="relative mt-0.5 xs:mt-1 shrink-0"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      scale: { duration: 0.2 },
                      rotate: { duration: 0.5 },
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                    <div className="z-10 relative flex justify-center items-center bg-white shadow-sm group-hover:shadow-md rounded-full w-7 xs:w-8 sm:w-8 md:w-9 h-7 xs:h-8 sm:h-8 md:h-9 transition-shadow">
                      <Image
                        src={`/section2_logo.webp`}
                        alt={f.iconAlt}
                        width={20}
                        height={20}
                        className="w-7 xs:w-8 sm:w-8 md:w-9 h-7 xs:h-8 sm:h-8 md:h-9"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.4 }}
                  >
                    <h3
                      id={`feature-title-${idx}`}
                      className="font-semibold text-[#222222] group-hover:text-[#0546D2] text-base xs:text-lg sm:text-xl tracking-[-0.02em] transition-colors duration-300"
                    >
                      {f.title}
                    </h3>
                    <motion.p
                      className="mt-1 xs:mt-1.5 sm:mt-2 max-w-xl text-xs xs:text-sm sm:text-base md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 0.5 }}
                    >
                      {f.copy}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.9,
                rotateY: -10,
              },
              show: {
                opacity: 1,
                scale: 1,
                rotateY: 0,
                transition: {
                  duration: 0.7,
                  ease: "backOut",
                  delay: 0.5,
                },
              },
            }}
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="hidden md:flex justify-center md:col-span-5 mt-8 xs:mt-10"
          >
            <div className="relative shadow-lg w-full md:w-[380px] lg:w-[450px] xl:w-[520px] h-[380px] md:h-[480px] lg:h-[520px] xl:h-[560px] overflow-hidden">
              <motion.div
                className="z-10 absolute inset-0"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <Image
                src="/section_2.webp"
                alt="Two colleagues talking"
                fill
                className="z-0 relative object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 380px, (max-width: 1280px) 450px, 520px"
                priority
              />
              <motion.div
                className="z-20 absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-white mt-5 sm:mt-0 md:pl-20 lg:pl-22 xl:pl-24">
        <div className="bg-linear-to-r from-[#043898] via-[#079902] to-[#170041] w-full h-4 xs:h-5" />
      </div>
    </motion.section>
  );
}
