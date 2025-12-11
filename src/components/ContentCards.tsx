"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { easeOut, motion, Variants } from "framer-motion";

export default function ContentCards() {
  const cards = [
    {
      image: "/blog_post_img1.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      body: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
      image: "/blog_post_img2.webp",
      title: "Lorem ipsum dolor sit amet consectetur.",
      body: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
      image: "/blog_post_img3.webp",
      title: "Lorem ipsum dolor sit amet consectetur.",
      body: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
      image: "/blog_post_img4.webp",
      title: "Lorem ipsum dolor sit amet consectetur.",
      body: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        ease: easeOut,
        duration: 0.6,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-8 xs:py-10 sm:py-12 overflow-hidden">
      <motion.div
        className="-z-10 absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/Bg-Graphic (1).png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <motion.div
          className="top-1/4 left-10 absolute bg-blue-100 opacity-20 blur-3xl rounded-full w-40 h-40"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="right-10 bottom-1/4 absolute bg-purple-100 opacity-20 blur-3xl rounded-full w-48 h-48"
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      <div className="md:space-y-2 mx-auto px-4 xs:px-6 sm:px-6 md:px-10 lg:px-16 container">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-semibold text-[#0546D2] text-lg xs:text-xl sm:text-2xl tracking-[-0.04em]"
        >
          Lorem ipsum dolor sit amet
        </motion.p>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.015 },
            },
          }}
          className="font-roboto-condensed font-bold text-[#222222] text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] uppercase leading-tight tracking-[-0.02em]"
        >
          LOREM IPSUM DOLOR SIT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-sm xs:text-base sm:text-lg md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]"
        >
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
          nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus
          lectus.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-18 grid grid-cols-1 md:grid-cols-2 mx-auto mt-8 xs:mt-10 sm:mt-12 md:mt-16 lg:mt-18 xl:mt-20 lg:w-[80%] xl:w-[85%]"
        >
          {cards.map((c, idx) => (
            <motion.article
              variants={item}
              key={idx}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              onHoverStart={() => setHoveredCard(idx)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative bg-white shadow-sm hover:shadow-xl border border-[#F1F0F0] rounded-lg overflow-hidden transition-shadow duration-300"
              style={{
                zIndex: hoveredCard === idx ? 10 : 1,
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  background:
                    "linear-gradient(90deg, #0546D2, #079902, #170041)",
                }}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{
                  opacity: hoveredCard === idx ? 0.3 : 0,
                  scale: hoveredCard === idx ? 1 : 0.98,
                }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative bg-white m-[1px] rounded-lg overflow-hidden">
                <motion.div
                  className="relative w-full h-36 xs:h-40 sm:h-42 md:h-48 lg:h-52 xl:h-56 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 40vw, 45vw"
                    priority={idx < 2}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <div className="p-4 xs:p-5 sm:p-6 md:p-6 lg:p-7 xl:p-8">
                  <motion.h3
                    initial={false}
                    animate={{
                      color: hoveredCard === idx ? "#0546D2" : "#222222",
                    }}
                    transition={{ duration: 0.2 }}
                    className="mb-2 xs:mb-3 font-semibold lg:text-[22px] text-base xs:text-lg sm:text-lg md:text-xl tracking-[-0.02em]"
                  >
                    {c.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.5 }}
                    className="mb-4 xs:mb-5 text-sm xs:text-base sm:text-base md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]"
                  >
                    {c.body}
                  </motion.p>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 md:mt-3 md:mb-12 font-semibold text-[#0546D2] text-sm xs:text-base underline-offset-8 tracking-[-0.04em]"
                  >
                    <span className="underline">Learn More</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
