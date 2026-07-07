"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CarFront,
  TrendingUp,
} from "lucide-react";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center">

      {/* Premium Badge */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-400">

          <BadgeCheck size={18} />

          Nigeria's Premium Automotive Marketplace

        </div>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.6,
        }}
        className="max-w-3xl text-5xl font-black leading-tight text-white md:text-6xl xl:text-7xl"
      >
        Buy.
        <br />

        Sell.
        <br />

        <span className="text-yellow-400">
          Drive Your Dream.
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
      >
        Discover quality vehicles from trusted dealers and private sellers
        across Nigeria. Whether you're buying your next car or growing your
        dealership, GreatAutos gives you the tools to reach more customers,
        showcase your inventory, and close more sales from one powerful
        marketplace.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.6,
        }}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <Link
          href="/inventory"
          className="group inline-flex items-center justify-center rounded-full bg-yellow-500 px-8 py-4 text-lg font-bold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
        >
          Browse Vehicles

          <ArrowRight
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            size={20}
          />
        </Link>

        <Link
          href="/sell"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-yellow-400 hover:bg-white/10"
        >
          Become a Dealer
        </Link>
      </motion.div>

      {/* Quick Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.7,
        }}
        className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-yellow-400/40 hover:bg-white/10">
          <CarFront className="mb-3 text-yellow-400" />

          <h3 className="text-3xl font-black text-white">
            45K+
          </h3>

          <p className="mt-1 text-sm text-slate-300">
            Vehicles Listed
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-yellow-400/40 hover:bg-white/10">
          <BadgeCheck className="mb-3 text-yellow-400" />

          <h3 className="text-3xl font-black text-white">
            3,200+
          </h3>

          <p className="mt-1 text-sm text-slate-300">
            Verified Dealers
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-yellow-400/40 hover:bg-white/10">
          <TrendingUp className="mb-3 text-yellow-400" />

          <h3 className="text-3xl font-black text-white">
            120K+
          </h3>

          <p className="mt-1 text-sm text-slate-300">
            Happy Buyers
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-yellow-400/40 hover:bg-white/10">
          <BadgeCheck className="mb-3 text-yellow-400" />

          <h3 className="text-3xl font-black text-white">
            99%
          </h3>

          <p className="mt-1 text-sm text-slate-300">
            Customer Satisfaction
          </p>
        </div>
      </motion.div>

    </div>
  );
}