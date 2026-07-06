"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLoadingStore } from "@/store/loading-store";
import { Car, Sparkles } from "lucide-react";

export default function GlobalLoader() {
  const { isLoading, loadingMessage } = useLoadingStore();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-8"
            >
              <Car size={80} className="text-emerald-500" />
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <h2 className="text-2xl font-black text-white tracking-widest">
                GREATAUTOS
              </h2>
              <p className="mt-2 text-emerald-400 font-semibold">
                SYSTEM PROCESSING
              </p>

              <motion.div
                key={loadingMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                <p className="text-lg text-slate-300">{loadingMessage}</p>
              </motion.div>

              <div className="mt-8 flex space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                    className="h-3 w-3 rounded-full bg-emerald-500"
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-20 border border-emerald-500/20 rounded-full"
            />
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-32 border border-emerald-500/10 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
