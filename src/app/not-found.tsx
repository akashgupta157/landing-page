"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFoundApp() {
  return (
    <main className="flex justify-center items-center bg-gradient-to-b from-white to-slate-50 p-6 min-h-screen">
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="items-center gap-8 grid md:grid-cols-2 bg-white shadow-lg p-10 md:p-14 rounded-2xl w-full max-w-4xl"
        aria-labelledby="notfound-heading"
      >
        <div>
          <h1
            id="notfound-heading"
            className="font-extrabold text-4xl sm:text-5xl tracking-tight"
          >
            Page not found
          </h1>
          <p className="mt-3 text-slate-600">
            We can’t find the page you’re looking for. Try searching or head
            back home.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/"
              className="bg-transparent hover:bg-slate-50 px-4 py-2 border border-slate-200 rounded-md text-sm"
            >
              ← Go home
            </Link>
          </div>

          <p className="mt-6 text-slate-400 text-xs">
            If you think this is a bug, please let us know so we can fix it.
          </p>
        </div>

        <aside className="flex justify-center items-center">
          <svg
            viewBox="0 0 520 360"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-sm"
            role="img"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#e6eefc" />
                <stop offset="100%" stopColor="#f6f9ff" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="520" height="360" rx="20" fill="url(#g)" />
            <g transform="translate(40,40)">
              <text
                x="70"
                y="140"
                fontSize="120"
                fontWeight="700"
                fill="#0f172a"
              >
                404
              </text>
              <circle cx="360" cy="120" r="44" fill="#fff" stroke="#e6eefc" />
              <path
                d="M260 220c20-40 70-40 90 0"
                stroke="#0f172a"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </svg>
        </aside>
      </motion.section>
    </main>
  );
}
