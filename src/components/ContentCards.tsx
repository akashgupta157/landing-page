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
    <section className="relative py-8 xs:py-10 sm:py-12 overflow-hidden">
      <Image
        src="/Bg-Graphic (1).png"
        alt="Background"
        fill
        className="-z-10"
        priority
      />
      <div className="md:space-y-2 mx-auto px-4 xs:px-6 sm:px-6 md:px-10 lg:px-16 container">
        <p className="font-semibold text-[#0546D2] text-lg xs:text-xl sm:text-2xl tracking-[-0.04em]">
          Lorem ipsum dolor sit amet
        </p>

        <h1 className="font-roboto-condensed font-bold text-[#222222] text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] uppercase leading-tight tracking-[-0.02em]">
          LOREM IPSUM DOLOR SIT
        </h1>

        <p className="max-w-2xl text-sm xs:text-base sm:text-lg md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]">
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
          className="gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-14 grid grid-cols-1 md:grid-cols-2 mx-auto mt-8 xs:mt-10 sm:mt-12 md:mt-16 lg:mt-18 xl:mt-20 lg:w-[75%] xl:w-[80%]"
        >
          {cards.map((c, idx) => (
            <motion.article
              variants={item}
              key={idx}
              className="bg-white border border-[#F1F0F0] rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-36 xs:h-40 sm:h-42 md:h-48 lg:h-52 xl:h-56">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 40vw, 45vw"
                  priority={idx < 2}
                />
              </div>

              <div className="p-4 xs:p-5 sm:p-6 md:p-6 lg:p-7 xl:p-8">
                <h3 className="mb-2 xs:mb-3 font-semibold text-[#222222] lg:text-[22px] text-base xs:text-lg sm:text-lg md:text-xl tracking-[-0.02em]">
                  {c.title}
                </h3>
                <p className="mb-4 xs:mb-5 text-sm xs:text-base sm:text-base md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]">
                  {c.body}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 md:mt-3 md:mb-12 font-semibold text-[#0546D2] text-sm xs:text-base underline-offset-8 tracking-[-0.04em]"
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
