"use client";

import { easeOut, motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { Button } from "./ui/button";

export default function FaqAccordion() {
  const contentVariants = {
    hidden: { opacity: 0, y: -6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: easeOut } },
  };

  const container = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.06, duration: 0.6, ease: easeOut },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
  };

  return (
    <div>
      <section className="bg-[#FBFBFB] py-8 xs:py-10 sm:py-12 md:py-16 lg:py-18 xl:py-20 w-full">
        <div className="mx-auto px-4 xs:px-6 sm:px-6 md:px-14 lg:px-16 xl:px-18 container">
          <h2 className="mb-6 xs:mb-7 sm:mb-8 font-roboto-condensed font-bold text-[#222222] text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] uppercase leading-tight tracking-[-0.02em]">
            FREQUENTLY ASKED QUESTIONS (FAQS)
          </h2>

          <div className="mx-auto max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full"
            >
              <AccordionItem
                value="item-1"
                className="border-[#E6E6E6] border-b"
              >
                <AccordionTrigger
                  className="flex justify-between items-start gap-4 xs:gap-6 px-0 py-4 xs:py-5 sm:py-6 w-full text-left"
                  aria-label="Question 1"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm xs:text-base sm:text-lg md:text-lg">
                      Lorem ipsum dolor sit amet consectetur?
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-0 pt-0 pb-4 xs:pb-5 sm:pb-6">
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={contentVariants}
                    className="max-w-3xl text-sm xs:text-base sm:text-lg md:text-lg leading-relaxed"
                  >
                    Lorem ipsum dolor sit amet consectetur. Vulputate amet
                    aliquet morbi suspendisse convallis. Urna a urna lectus
                    donec felis risus duis pellentesque. Pellentesque ultricies
                    ipsum.
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-[#E6E6E6] border-b"
              >
                <AccordionTrigger
                  className="flex justify-between items-start gap-4 xs:gap-6 px-0 py-4 xs:py-5 sm:py-6 w-full text-left"
                  aria-label="Question 1"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm xs:text-base sm:text-lg md:text-lg">
                      Lorem ipsum dolor sit amet consectetur?
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-0 pt-0 pb-4 xs:pb-5 sm:pb-6">
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={contentVariants}
                    className="max-w-3xl text-sm xs:text-base sm:text-lg md:text-lg leading-relaxed"
                  >
                    Lorem ipsum dolor sit amet consectetur. Vulputate amet
                    aliquet morbi suspendisse convallis. Urna a urna lectus
                    donec felis risus duis pellentesque. Pellentesque ultricies
                    ipsum.
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-[#E6E6E6] border-b"
              >
                <AccordionTrigger
                  className="flex justify-between items-start gap-4 xs:gap-6 px-0 py-4 xs:py-5 sm:py-6 w-full text-left"
                  aria-label="Question 1"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm xs:text-base sm:text-lg md:text-lg">
                      Lorem ipsum dolor sit amet consectetur?
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-0 pt-0 pb-4 xs:pb-5 sm:pb-6">
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={contentVariants}
                    className="max-w-3xl text-sm xs:text-base sm:text-lg md:text-lg leading-relaxed"
                  >
                    Lorem ipsum dolor sit amet consectetur. Vulputate amet
                    aliquet morbi suspendisse convallis. Urna a urna lectus
                    donec felis risus duis pellentesque. Pellentesque ultricies
                    ipsum.
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-[#E6E6E6] border-b"
              >
                <AccordionTrigger
                  className="flex justify-between items-start gap-4 xs:gap-6 px-0 py-4 xs:py-5 sm:py-6 w-full text-left"
                  aria-label="Question 1"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm xs:text-base sm:text-lg md:text-lg">
                      Lorem ipsum dolor sit amet consectetur?
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-0 pt-0 pb-4 xs:pb-5 sm:pb-6">
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={contentVariants}
                    className="max-w-3xl text-sm xs:text-base sm:text-lg md:text-lg leading-relaxed"
                  >
                    Lorem ipsum dolor sit amet consectetur. Vulputate amet
                    aliquet morbi suspendisse convallis. Urna a urna lectus
                    donec felis risus duis pellentesque. Pellentesque ultricies
                    ipsum.
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-[#E6E6E6] border-b"
              >
                <AccordionTrigger
                  className="flex justify-between items-start gap-4 xs:gap-6 px-0 py-4 xs:py-5 sm:py-6 w-full text-left"
                  aria-label="Question 1"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm xs:text-base sm:text-lg md:text-lg">
                      Lorem ipsum dolor sit amet consectetur?
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-0 pt-0 pb-4 xs:pb-5 sm:pb-6">
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={contentVariants}
                    className="max-w-3xl text-sm xs:text-base sm:text-lg md:text-lg leading-relaxed"
                  >
                    Lorem ipsum dolor sit amet consectetur. Vulputate amet
                    aliquet morbi suspendisse convallis. Urna a urna lectus
                    donec felis risus duis pellentesque. Pellentesque ultricies
                    ipsum.
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <motion.section
        className="bg-white py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        aria-label="Centered hero"
      >
        <div className="mx-auto px-4 xs:px-6 max-w-2xl lg:max-w-3xl text-center">
          <motion.div
            variants={item}
            className="mx-auto mb-4 xs:mb-5 sm:mb-6 w-fit"
          >
            <div
            className="bg-[#DBDBDB] px-3 xs:px-4 sm:px-6 py-1.5 sm:py-2 font-extrabold xs:text-xl sm:text-2xl md:text-3xl tracking-[-0.02em]"
            aria-hidden
            role="img"
          >
            <span className="">LOGO</span>
          </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-4 xs:mb-5 sm:mb-6 font-roboto-condensed font-bold text-[#222222] text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] uppercase leading-tight md:leading-[1.02] lg:leading-[1.05] tracking-[-0.02em]"
            style={{ lineHeight: 1.02 }}
          >
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mb-6 xs:mb-7 sm:mb-8 max-w-xl text-sm xs:text-base sm:text-lg md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]"
          >
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
            porttitor pharetra tempor quis arcu. Ipsum nullam.
          </motion.p>

          <motion.div variants={item}>
            <Button
              size="lg"
              className="bg-[#1959AC] hover:bg-[#154A8C] shadow-md px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 rounded text-white text-sm xs:text-base"
              aria-label="Learn more"
            >
              Loerum Ipsum &nbsp; →
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
