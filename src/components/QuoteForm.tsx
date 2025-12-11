"use client";

import { z } from "zod";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { easeOut, motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name (min 2 characters)"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(6, "Please enter a valid phone number")
    .max(20)
    .regex(/^[0-9+()\-\s]*$/, "Phone number contains invalid characters"),
  timeframe: z.string().min(1, "Select a time frame"),
  size: z.string().min(1, "Select a size"),
  quantity: z.string().min(1, "Select a quantity"),
  description: z
    .string()
    .min(10, "Please describe your project (min 10 characters)"),
});

type FormSchema = z.infer<typeof formSchema>;

export default function QuoteForm() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
  };

  const content = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut, delay: 0.12 },
    },
  };

  const container1 = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, ease: easeOut, duration: 0.6 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: easeOut } },
  };

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      timeframe: "",
      size: "",
      quantity: "",
      description: "",
    },
    mode: "onTouched",
  });

  function onSubmit(values: FormSchema) {
    toast.success("Your quote request is in! We’ll get back to you shortly");
    form.reset();
  }

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="relative flex justify-center items-center my-8 xs:my-10 sm:my-12 md:my-24 lg:my-32 xl:my-36 w-full min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] overflow-hidden"
        aria-label="Hero section"
      >
        <div className="-z-10 absolute inset-0">
          <Image
            src="/section_5.webp"
            alt="Two motorbikes riding in rain"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.45)] to-[rgba(0,0,0,0.55)]" />
        </div>

        <div className="top-3 xs:top-4 sm:top-6 md:top-8 lg:top-10 xl:top-12 left-3 xs:left-4 sm:left-6 md:left-10 lg:left-12 xl:left-16 z-20 absolute">
          <div
            className="bg-[#DBDBDB] px-3 xs:px-4 sm:px-6 py-1.5 sm:py-2 font-extrabold xs:text-xl sm:text-2xl md:text-3xl tracking-[-0.02em]"
            aria-hidden
            role="img"
          >
            <span className="">LOGO</span>
          </div>
        </div>

        <motion.div
          variants={content}
          className="mx-auto px-3 xs:px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 max-w-3xl lg:max-w-4xl text-center container"
        >
          <h1 className="px-2 xs:px-3 font-roboto-condensed font-bold text-[24px] text-white xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] uppercase leading-tight md:leading-[1.02] lg:leading-[1.05] tracking-[-0.02em]">
            dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
            viverra mi. dolor sit amet consectetur. Quis adipiscing
          </h1>
        </motion.div>
      </motion.section>

      <section className="bg-white py-8 xs:py-10 sm:py-12">
        <div className="space-y-8 xs:space-y-10 sm:space-y-12 mx-auto px-4 xs:px-6 sm:px-6 md:px-10 lg:px-12 xl:px-16 container">
          <h1 className="font-roboto-condensed font-bold text-[#222222] text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] text-center uppercase leading-tight tracking-[-0.02em]">
            REQUEST A QUOTE
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 xs:space-y-6 mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
            >
              <div className="gap-4 xs:gap-6 grid grid-cols-1 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-1 xs:mb-2 font-normal text-xs xs:text-sm">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-1 xs:mb-2 font-normal text-xs xs:text-sm">
                        E-mail
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-1 xs:mb-2 font-normal text-xs xs:text-sm">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeframe"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-0 mb-1 xs:mb-2 font-normal text-xs xs:text-sm">
                        Time Frame<p className="text-red-600">*</p>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(v) => field.onChange(v)}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose Time Frame" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1_week">
                              Within 1 week
                            </SelectItem>
                            <SelectItem value="2_4_weeks">
                              2 - 4 weeks
                            </SelectItem>
                            <SelectItem value="1_3_months">
                              1 - 3 months
                            </SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="size"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-0 mb-1 xs:mb-2 font-normal text-xs xs:text-sm">
                        Size<p className="text-red-600">*</p>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(v) => field.onChange(v)}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose Size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-0 mb-1 xs:mb-2 font-normal text-xs xs:text-sm">
                        Quantity<p className="text-red-600">*</p>
                      </FormLabel>

                      <FormControl>
                        <Select
                          onValueChange={(v) => field.onChange(v)}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose Quantity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2-10">2 - 10</SelectItem>
                            <SelectItem value="10-50">10 - 50</SelectItem>
                            <SelectItem value="50+">50+</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-0 mb-1 xs:mb-2 font-normal text-xs xs:text-sm">
                      Please Describe Your Project
                      <p className="text-red-600">*</p>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Choose a project type"
                        className="min-h-[140px] xs:min-h-[160px] sm:min-h-[180px] resize-vertical"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className="md:pt-4 lg:pt-6 text-[#666] text-xs xs:text-sm text-center">
                By submitting this form you agree to our{" "}
                <a
                  className="underline"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="underline"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </p>

              <div className="flex justify-center pt-2 xs:pt-4">
                <Button
                  type="submit"
                  className="bg-[#1959AC] hover:bg-[#154A8C] px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 rounded text-white text-sm xs:text-base"
                >
                  Loerum Ipsum &nbsp;→
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={container1}
        className="bg-[#F3F3F3] my-8 xs:my-10 sm:my-12 md:my-24 lg:my-32 xl:my-36 w-full"
      >
        <div className="mx-auto px-4 xs:px-6 sm:px-6 md:px-14 lg:px-16 xl:px-20 container">
          <div className="items-center gap-6 xs:gap-8 grid grid-cols-1 lg:grid-cols-12">
            <motion.div
              variants={item}
              className="lg:col-span-6 py-6 xs:py-8 sm:py-10 md:py-16 lg:py-18 xl:py-20"
            >
              <p className="mb-2 xs:mb-3 font-semibold text-[#0546D2] text-lg xs:text-xl sm:text-2xl tracking-[-0.04em]">
                Lorem Ipsum
              </p>

              <h2 className="mb-3 xs:mb-4 font-roboto-condensed font-bold text-[#222222] text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-tight tracking-[-0.02em]">
                Lorem Ipsum Dolor
                <br />
                Sit Amet
              </h2>

              <p className="mb-4 xs:mb-6 max-w-2xl text-sm xs:text-base sm:text-lg md:text-lg leading-[1.4] xs:leading-[1.5] sm:leading-[25px]">
                Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet
                morbi suspendisse convallis. Urna a urna lectus donec felis
                risus duis pellentesque. Pellentesque ultricies ipsum.
              </p>

              <motion.div
                variants={item}
                className="flex items-center gap-3 xs:gap-4 mt-8 xs:mt-10 sm:mt-12"
              >
                <div className="w-[120px] xs:w-[130px] sm:w-[140px] md:w-[140px] h-auto">
                  <Image
                    src="/google.png"
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[110px] xs:w-[120px] sm:w-[130px] md:w-[140px] h-auto">
                  <Image
                    src="/apple.png"
                    alt="Download on the App Store"
                    width={110}
                    height={40}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={item}
              className="hidden relative md:flex justify-center col-span-6 h-full"
            >
              <Image
                src="/section6_img.png"
                alt="Phone in hand"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 50vw, 40vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
