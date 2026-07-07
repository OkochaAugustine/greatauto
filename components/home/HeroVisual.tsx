"use client";

import { motion } from "framer-motion";
import {
  CarFront,
  ShieldCheck,
  TrendingUp,
  Users,
  MapPin,
  Star,
} from "lucide-react";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center py-12"
    >
      {/* Background Glow */}

      <div className="absolute h-[520px] w-[520px] rounded-full bg-yellow-500/20 blur-[120px]" />

      {/* Main Showcase */}

      <div className="relative w-full max-w-2xl">

        {/* Main Card */}

        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">

          {/* Top */}

          <div className="mb-6 flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-400">
                Featured Vehicle
              </p>

              <h2 className="mt-1 text-2xl font-black text-white">
                Mercedes-Benz G-Class
              </h2>
            </div>

            <div className="rounded-full bg-yellow-500 px-4 py-2 font-bold text-slate-900">
              Featured
            </div>

          </div>

          {/* Placeholder Vehicle */}

          <div className="relative flex h-[320px] items-center justify-center rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">

            <div className="absolute inset-0 rounded-3xl border border-white/10" />

            <CarFront
              size={170}
              className="text-yellow-400"
            />

            <div className="absolute bottom-6 text-center">

              <p className="text-lg font-semibold text-white">
                Premium Vehicle Preview
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Real vehicle images will be loaded here
              </p>

            </div>

          </div>

          {/* Bottom Stats */}

          <div className="mt-6 grid grid-cols-3 gap-4">

            <div className="rounded-2xl bg-white/5 p-4 text-center">
              <h3 className="text-xl font-black text-white">
                ₦48M
              </h3>

              <p className="text-sm text-slate-400">
                Starting Price
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-4 text-center">
              <h3 className="text-xl font-black text-white">
                2025
              </h3>

              <p className="text-sm text-slate-400">
                Model
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-4 text-center">
              <h3 className="text-xl font-black text-white">
                4.9★
              </h3>

              <p className="text-sm text-slate-400">
                Rating
              </p>
            </div>

          </div>

        </div>

        {/* Floating Card - Dealers */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute -left-10 top-10 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-xl backdrop-blur-xl lg:block"
        >
          <div className="flex items-center gap-3">

            <Users className="text-yellow-400" />

            <div>

              <h4 className="font-bold text-white">
                3,200+
              </h4>

              <p className="text-xs text-slate-400">
                Verified Dealers
              </p>

            </div>

          </div>
        </motion.div>

        {/* Floating Card - Security */}

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute -right-10 top-24 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-xl backdrop-blur-xl lg:block"
        >
          <div className="flex items-center gap-3">

            <ShieldCheck className="text-green-400" />

            <div>

              <h4 className="font-bold text-white">
                Secure
              </h4>

              <p className="text-xs text-slate-400">
                Verified Listings
              </p>

            </div>

          </div>
        </motion.div>

        {/* Floating Card - Growth */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
          }}
          className="absolute bottom-8 -left-12 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-xl backdrop-blur-xl lg:block"
        >
          <div className="flex items-center gap-3">

            <TrendingUp className="text-blue-400" />

            <div>

              <h4 className="font-bold text-white">
                AI Powered
              </h4>

              <p className="text-xs text-slate-400">
                Smart Promotion
              </p>

            </div>

          </div>
        </motion.div>

        {/* Floating Card - Location */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
          }}
          className="absolute -right-12 bottom-6 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-xl backdrop-blur-xl lg:block"
        >
          <div className="flex items-center gap-3">

            <MapPin className="text-red-400" />

            <div>

              <h4 className="font-bold text-white">
                Nationwide
              </h4>

              <p className="text-xs text-slate-400">
                Find Cars Anywhere
              </p>

            </div>

          </div>
        </motion.div>

        {/* Floating Rating */}

        <motion.div
          animate={{
            rotate: [0, 4, 0, -4, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-[-30px] hidden -translate-x-1/2 rounded-full bg-yellow-500 px-6 py-3 font-bold text-slate-900 shadow-2xl lg:flex lg:items-center lg:gap-2"
        >
          <Star size={18} fill="currentColor" />

          4.9 Customer Rating
        </motion.div>

      </div>
    </motion.div>
  );
}