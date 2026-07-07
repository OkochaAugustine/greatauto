"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto flex w-full max-w-[760px] items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[140px]" />
      </div>

      {/* Main Showcase Card */}
      <div className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Featured Vehicle
            </p>

            <h2 className="mt-2 text-2xl font-black text-white lg:text-3xl">
              Mercedes-AMG G63
            </h2>
          </div>

          <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900">
            Featured
          </div>
        </div>

        {/* Image Area */}
        <div className="relative h-[300px] sm:h-[380px] lg:h-[500px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

          {/* Decorative Light */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-full w-full"
          >
            <Image
              src="/images/hero/hero-car.png"
              alt="Mercedes AMG G63"
              fill
              priority
              className="object-contain p-6 lg:p-10"
            />
          </motion.div>

        </div>

        {/* Specifications */}
        <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">

          <div className="p-5 text-center">
            <h3 className="text-2xl font-black text-white lg:text-3xl">
              ₦48M
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Starting Price
            </p>
          </div>

          <div className="p-5 text-center">
            <h3 className="text-2xl font-black text-white lg:text-3xl">
              2025
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Model Year
            </p>
          </div>

          <div className="p-5 text-center">
            <h3 className="text-2xl font-black text-white lg:text-3xl">
              4.9★
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Customer Rating
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Glow */}
      <div className="absolute -bottom-8 left-1/2 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
    </motion.div>
  );
}