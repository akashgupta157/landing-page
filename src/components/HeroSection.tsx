"use client";

import { z } from "zod";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { easeOut, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type FormSchema = z.infer<typeof formSchema>;

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

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
    mode: "onTouched",
  });

  async function onSubmit(values: FormSchema) {
    toast.success("You're all set! Check your inbox for a confirmation.");
    form.reset();
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center bg-white min-h-screen overflow-hidden"
    >
      <div className="mx-auto px-4 sm:px-6 md:px-0 lg:px-16 container">
        <div className="items-center gap-6 sm:gap-8 grid grid-cols-1 md:grid-cols-12">
          <motion.div
            variants={stagger}
            className="md:col-span-6 mt-12 xs:mt-14 sm:mt-18 md:mt-24 w-full"
          >
            <motion.div
              variants={item}
              className="md:hidden block mb-6 sm:mb-8"
              aria-hidden="true"
            >
              <div className="relative mx-auto rounded-lg w-full max-w-[720px] h-44 sm:h-56 overflow-hidden">
                <Image
                  src="/hero_img.webp"
                  alt="Decorative hero"
                  fill
                  priority
                  className="object-center object-cover"
                  sizes="100vw"
                />
              </div>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-roboto-condensed font-bold text-[#222222] text-[26px] xs:text-[30px] sm:text-[34px] md:text-[42px] lg:text-[48px] xl:text-[64px] leading-[1.18] sm:leading-[1.25] md:leading-[1.25] tracking-[-0.02em]"
            >
              Lorem ipsum dolor sit amet
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-sm xs:text-base sm:text-lg leading-[1.45] sm:leading-[1.6]"
            >
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue
              quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi
              platea morbi libero imperdiet neque. Justo suspendisse tristique
              posuere quis eget viverra. Nunc euismod ultrices etiam nulla
              habitasse.
            </motion.p>

            <motion.form
              variants={containerVariants}
              className="flex sm:flex-row flex-col items-start sm:items-center gap-3 mt-6 sm:mt-8 md:mt-10"
              onSubmit={form.handleSubmit(onSubmit)}
              aria-label="Newsletter form"
              noValidate
            >
              <motion.div variants={item} className="w-full sm:w-auto">
                <Input
                  type="email"
                  aria-label="Email address"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="px-4 py-4 sm:py-5 border border-[#C3C3C3] rounded w-full sm:min-w-[280px] md:min-w-xs text-sm sm:text-base"
                  {...form.register("email")}
                  aria-invalid={form.formState.errors.email ? "true" : "false"}
                />
                {form.formState.errors.email?.message && (
                  <p
                    role="alert"
                    className="mt-2 text-red-600 text-xs"
                    aria-live="polite"
                  >
                    {form.formState.errors.email.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={item} className="w-full sm:w-auto">
                <Button
                  type="submit"
                  size="lg"
                  className="flex justify-center items-center gap-2.5 bg-[#1959AC] hover:bg-[#154A8C] shadow-[0_4px_20px_0_rgba(0,0,0,0.15)] px-5 sm:px-6 py-3 rounded w-full sm:w-auto font-bold text-white text-sm sm:text-base transition-colors"
                  aria-disabled={form.formState.isSubmitting}
                  disabled={form.formState.isSubmitting}
                >
                  <span className="sr-only">Subscribe</span>
                  Submit <ArrowRight className="size-4 sm:size-5" />
                </Button>
              </motion.div>
            </motion.form>

            <motion.div
              variants={item}
              className="flex justify-center sm:justify-start items-center gap-3 mt-4 sm:mt-5"
            >
              <div className="flex justify-center items-center bg-[#155ADA] p-1 rounded-full size-7 sm:size-6.5 md:size-7.5">
                <Check size={14} className="text-white" strokeWidth={2.5} />
              </div>
              <p className="font-medium text-xs sm:text-sm md:text-base">
                No credit card required!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="hidden md:block relative col-span-6 h-screen"
          >
            <div className="absolute inset-0 flex justify-end items-stretch">
              <div className="relative -mr-16 lg:-mr-20 w-full max-w-[520px] lg:max-w-[620px] xl:max-w-[720px] overflow-hidden clip-diagonal">
                <Image
                  src="/hero_img.webp"
                  alt="Hero Image"
                  fill
                  priority
                  className="object-center object-cover scale-115"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
