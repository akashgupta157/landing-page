"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import React, { useState } from "react";
import { easeOut, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const NAV_ITEMS = [
  {
    label: "Lorem Ipsum",
    href: "#",
    submenu: ["Option A", "Option B", "Option C"],
  },
  {
    label: "Lorem Ipsum",
    href: "#",
    submenu: ["Option D", "Option E"],
  },
  {
    label: "Lorem Ipsum",
    href: "#",
    submenu: ["Option F", "Option G", "Option H"],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.06 * i, duration: 0.32, ease: easeOut },
    }),
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,0)",
        boxShadow: scrolled
          ? "0px 4px 20px rgba(0,0,0,0.15)"
          : "0px 0px 0px rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="top-0 right-0 left-0 z-40 fixed"
    >
      <div className="mx-auto px-6 lg:px-16 max-w-screen">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex items-center"
          >
            <div
              className="bg-[#DBDBDB] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 w-fit font-extrabold text-lg sm:text-xl md:text-2xl tracking-[-0.02em]"
              aria-hidden
              role="img"
            >
              <span className="">LOGO</span>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <motion.ul
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6 lg:gap-8"
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={linkVariants}
                  className="relative flex items-center gap-1 font-medium text-[#1959AC] hover:text-[#154A8C] md:text-base lg:text-lg cursor-pointer"
                >
                  <NavItemWithHover item={item} index={i} />
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* Desktop sign-in */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-white hover:bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.12)] px-6 sm:px-8 py-2 rounded font-bold text-black text-sm transition-colors">
              Sign In
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="inline-flex justify-center items-center bg-white/90 shadow-sm p-2 rounded-md"
                >
                  <Menu className="w-6 h-6 text-[#1959AC]" />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full max-w-xs">
                <SheetHeader className="flex justify-between items-center">
                  <SheetTitle>
                    <div
                      className="bg-[#DBDBDB] px-4 sm:px-6 py-2 sm:py-2.5 w-fit font-extrabold text-xl sm:text-2xl md:text-3xl tracking-[-0.02em]"
                      aria-hidden
                      role="img"
                    >
                      <span className="">LOGO</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <motion.nav
                  initial="hidden"
                  animate="visible"
                  variants={staggerChildren(0.06)}
                  className="mt-6 px-4"
                >
                  <ul className="flex flex-col gap-4">
                    {NAV_ITEMS.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: i * 0.06, duration: 0.32 },
                        }}
                      >
                        <Link
                          href={item.href}
                          className="block hover:bg-[#F3F7FF] px-3 py-3 rounded-md w-full font-medium text-[#1959AC]"
                        >
                          {item.label}
                        </Link>
                        {item.submenu && item.submenu.length > 0 && (
                          <div className="mt-2 pl-3">
                            {item.submenu.map((s, si) => (
                              <Link
                                key={si}
                                href="#"
                                className="block hover:bg-[#f7faff] px-2 py-1 rounded text-[#154A8C] text-sm"
                              >
                                {s}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button className="bg-[#1959AC] hover:bg-[#154A8C] px-4 py-3 rounded w-full font-bold text-white">
                      Sign In
                    </Button>
                  </div>
                </motion.nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

interface NavItem {
  label: string;
  href: string;
  submenu?: string[];
}

function NavItemWithHover({ item, index }: { item: NavItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      className="relative"
    >
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 focus:outline-none"
        aria-haspopup={item.submenu ? "menu" : undefined}
        aria-expanded={open ? "true" : "false"}
      >
        <span>{item.label}</span>
        <ChevronDown className="w-4 h-4" aria-hidden />
      </Link>

      {item.submenu && item.submenu.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 6, pointerEvents: "none" }}
          animate={
            open
              ? { opacity: 1, y: 0, pointerEvents: "auto" }
              : { opacity: 0, y: 6, pointerEvents: "none" }
          }
          transition={{ duration: 0.18, ease: easeOut }}
          className="top-full left-0 absolute bg-white shadow-lg mt-3 rounded-lg ring-1 ring-black/5 w-48"
          role="menu"
        >
          <ul className="py-2">
            {item.submenu.map((sub: string, si: number) => (
              <li key={si} role="none">
                <Link
                  href="#"
                  role="menuitem"
                  className="block hover:bg-[#F3F7FF] px-3 py-2 font-medium text-[#154A8C] text-sm"
                >
                  {sub}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}

function staggerChildren(delay = 0.06) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: delay } },
  };
}
