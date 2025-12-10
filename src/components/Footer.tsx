"use client";

import Link from "next/link";

export default function Footer() {
  const columns = [
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum"],
    },
  ];

  return (
    <footer className="bg-[#0F1724] w-full text-white">
      <div className="mx-auto px-6 md:px-12 py-12 md:py-16 max-w-screen-2xl">
        <div className="flex md:flex-row flex-col md:items-start gap-8 md:gap-0">
          <div className="md:w-1/4 shrink-0">
            <div className="inline-block bg-[#DBDBDB] px-4 sm:px-6 py-2 sm:py-2.5 font-extrabold text-black text-xl sm:text-2xl md:text-3xl tracking-[-0.02em]">
              LOGO
            </div>
          </div>

          <div className="md:flex-1">
            <nav aria-label="Footer navigation" className="w-full">
              <div className="justify-items-start gap-6 md:gap-8 grid grid-cols-2 lg:grid-cols-4">
                {columns.map((col, idx) => (
                  <div key={idx} className="min-w-40">
                    <h3 className="mb-4 font-semibold text-base md:text-lg">
                      {col.title}
                    </h3>
                    <ul className="space-y-4 text-sm md:text-base">
                      {col.links.map((l, i) => (
                        <li key={i}>
                          <Link
                            href="#"
                            className="text-white/90 hover:text-white transition-colors"
                          >
                            {l}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
