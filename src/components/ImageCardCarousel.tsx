"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Slide = {
  image: string;
  title: string;
  excerpt: string;
  linkText?: string;
};

const SLIDES: Slide[] = [
  {
    image: "/adventure_travel.webp",
    title: "Artist & Investor",
    excerpt:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
    linkText: "Read Full Story",
  },
  {
    image: "/adventure_travel.webp",
    title: "Explorer & Creator",
    excerpt:
      "Nullam posuere, nibh vitae laoreet commodo, sem urna cursus lorem, a facilisis lectus nunc vitae ligula. Integer cursus lorem at facilisis rhoncus ...",
    linkText: "Read Full Story",
  },
  {
    image: "/adventure_travel.webp",
    title: "Rider Collective",
    excerpt:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada. Integer at arcu sed metus facilisis dictum. Vivamus id urna sed ...",
    linkText: "Read Full Story",
  },
  {
    image: "/adventure_travel.webp",
    title: "Designer Spotlight",
    excerpt:
      "Curabitur aliquet, ligula at ultricies dictum, lorem nibh feugiat nibh, eget tincidunt nisl nunc et eros. Vestibulum mattis ...",
    linkText: "Read Full Story",
  },
];

export default function ImageCardCarousel() {
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    autoplayRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % SLIDES.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleMouseEnter = () => {
    if (autoplayRef.current) window.clearInterval(autoplayRef.current);
  };
  const handleMouseLeave = () => {
    autoplayRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
  };

  const slideVariants = {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -10, transition: { duration: 0.45 } },
  };

  return (
    <section className="relative bg-white mt-80 xs:mt-82 sm:mt-84 md:mt-40 lg:mt-42 2xl:mt-46 xl:mt-44 w-full overflow-visible">
      <div className="mx-auto px-4 xs:px-6 sm:px-6 md:px-14 lg:px-16 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-18 xl:py-20 container">
        <div className="mb-8 xs:mb-10 sm:mb-12 text-center">
          <h2 className="font-roboto-condensed font-bold text-[#0F172A] text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] uppercase leading-tight tracking-[-0.02em]">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p className="mx-auto mt-3 xs:mt-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl text-[#0F172A] text-sm xs:text-base sm:text-lg md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]">
            Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis
            dictumst. Ornare faucibus quis velit fringilla aliquam ultricies.
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed
            ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut
            facilisi.
          </p>
        </div>

        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          {/* Desktop  */}
          <div className="hidden items-start gap-6 xs:gap-8 md:grid grid-cols-12">
            <div className="col-span-7">
              <div className="relative border rounded-sm w-full h-[340px] xs:h-[360px] sm:h-[380px] md:h-[400px] lg:h-[420px] xl:h-[440px] overflow-hidden">
                <Image
                  src={SLIDES[index].image}
                  alt={SLIDES[index].title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 60vw, (min-width: 1024px) 55vw, (min-width: 1280px) 50vw, 100vw"
                  priority
                />
              </div>
            </div>

            <div className="relative col-span-5">
              <motion.article
                key={index}
                variants={slideVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="bg-white shadow-2xl -ml-24 md:-ml-26 lg:-ml-28 xl:-ml-30 p-6 xs:p-7 sm:p-8 rounded-md min-w-[500px] xs:min-w-[520px] sm:min-w-[540px] md:min-w-[560px] lg:min-w-[580px] xl:min-w-[600px]"
                style={{ marginTop: "60px" }}
              >
                <h3 className="mb-3 xs:mb-4 font-semibold text-[#475569] text-xl xs:text-2xl tracking-[0.06em]">
                  {SLIDES[index].title}
                </h3>
                <p className="mb-4 xs:mb-5 sm:mb-6 text-[#0F172A] text-sm xs:text-base sm:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]">
                  {SLIDES[index].excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-medium text-[#1959AC] text-sm xs:text-base hover:underline"
                >
                  {SLIDES[index].linkText ?? "Read Full Story"}
                  <span aria-hidden>→</span>
                </a>
              </motion.article>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-4 xs:gap-5 sm:gap-6">
            <div className="relative border rounded-sm w-full h-[260px] xs:h-[280px] sm:h-[300px] overflow-hidden">
              <Image
                src={SLIDES[index].image}
                alt={SLIDES[index].title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            <motion.article
              key={`mobile-${index}`}
              variants={slideVariants}
              initial="hidden"
              animate="show"
              className="bg-white shadow-lg p-4 xs:p-5 sm:p-6 rounded-md"
            >
              <h3 className="mb-2 xs:mb-3 font-semibold text-base xs:text-lg">
                {SLIDES[index].title}
              </h3>
              <p className="mb-3 xs:mb-4 text-[#374151] text-xs xs:text-sm leading-relaxed">
                {SLIDES[index].excerpt}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-medium text-[#1959AC] text-xs xs:text-sm hover:underline"
              >
                {SLIDES[index].linkText ?? "Read Full Story"}{" "}
                <span aria-hidden>→</span>
              </a>
            </motion.article>
          </div>

          {/* Dots navigation centered below */}
          {/* <div className="flex justify-center items-center mt-8">
            <nav aria-label="Slides" className="flex items-center gap-3">
              {SLIDES.map((_, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-12 h-4 rounded-full transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "bg-[#1959AC] scale-100 shadow-[0_6px_16px_rgba(25,89,172,0.24)]"
                        : "bg-[#BEE0FF]/60"
                    }`}
                  />
                );
              })}
            </nav>
          </div> */}
        </div>
      </div>
    </section>
  );
}
