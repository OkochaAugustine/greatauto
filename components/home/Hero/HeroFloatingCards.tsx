"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  TrendingUp,
  Star,
} from "lucide-react";

export default function HeroFloatingCards() {
  return (
    <>
      {/* Verified Dealers */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -left-8 top-16 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl xl:block"
      >
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-emerald-400" />
          <div>
            <h3 className="font-bold text-white">Verified Dealers</h3>
            <p className="text-xs text-slate-400">
              Buy with confidence
            </p>
          </div>
        </div>
      </motion.div>

      {/* Nationwide */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -right-8 top-28 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl xl:block"
      >
        <div className="flex items-center gap-3">
          <MapPin className="text-blue-400" />
          <div>
            <h3 className="font-bold text-white">Nationwide</h3>
            <p className="text-xs text-slate-400">
              Dealers across Nigeria
            </p>
          </div>
        </div>
      </motion.div>

      {/* Sales */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute -left-10 bottom-24 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl xl:block"
      >
        <div className="flex items-center gap-3">
          <TrendingUp className="text-cyan-400" />
          <div>
            <h3 className="font-bold text-white">More Sales</h3>
            <p className="text-xs text-slate-400">
              Reach more buyers
            </p>
          </div>
        </div>
      </motion.div>

      {/* Rating */}
      <motion.div
        animate={{ rotate: [0, 4, 0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-8 -top-6 hidden rounded-full bg-white px-5 py-3 font-semibold text-slate-900 shadow-xl xl:flex items-center gap-2"
      >
        <Star
          size={18}
          fill="currentColor"
        />
        4.9 Rating
      </motion.div>
    </>
  );
}