"use client";

import Link from "next/link";
import Image from "next/image";
import { easeOut, motion } from "framer-motion";

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
      transition: { staggerChildren: 0.12, ease: easeOut },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
  };

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/Bg-Graphic (1).png"
        alt="Background"
        fill
        className="-z-10"
        priority
      />
      <div className="md:space-y-2 mx-auto px-6 md:px-16 container">
        <p className="font-semibold text-[#0546D2] text-xl sm:text-2xl tracking-[-0.04em]">
          Lorem ipsum dolor sit amet
        </p>

        <h1 className="font-roboto-condensed font-bold text-[#222222] text-[28px] sm:text-[32px] md:text-[42px] uppercase leading-tight tracking-[-0.02em]">
          LOREM IPSUM DOLOR SIT
        </h1>

        <p className="max-w-2xl text-base md:text-lg leading-[25px]">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
          nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus
          lectus.
        </p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="gap-8 md:gap-14 grid grid-cols-1 md:grid-cols-2 mx-auto mt-10 md:mt-16 md:w-[75%]"
        >
          {cards.map((c, idx) => (
            <motion.article
              variants={item}
              key={idx}
              className="bg-white border border-[#F1F0F0] rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-42 md:h-52">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx < 2}
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 font-semibold text-[#222222] text-lg md:text-xl tracking-[-0.02em]">
                  {c.title}
                </h3>
                <p className="mb-5 text-base md:text-lg leading-[25px]">
                  {c.body}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 md:mt-3 md:mb-12 font-semibold text-[#0546D2] underline-offset-8 tracking-[-0.04em]"
                >
                  <span className="underline">Learn More</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
