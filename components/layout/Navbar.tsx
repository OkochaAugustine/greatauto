"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, CarFront, Heart, Menu, Search, X } from "lucide-react";

const links = [
  { name: "Inventory", href: "/inventory" },
  { name: "Dealers", href: "/dealers" },
  { name: "Finance", href: "/finance" },
  { name: "Trade-in", href: "/trade-in" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-slate-200 bg-white/95 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
              <CarFront size={20} />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight text-slate-900">GreatAutos</p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Premium Marketplace</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 transition hover:text-emerald-700"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link href="/inventory" className="rounded-2xl border border-slate-200 bg-white/80 p-3 text-slate-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700">
              <Search size={18} />
            </Link>
            <Link href="/favourites" className="rounded-2xl border border-slate-200 bg-white/80 p-3 text-slate-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700">
              <Heart size={18} />
            </Link>
            <Link href="/notifications" className="rounded-2xl border border-slate-200 bg-white/80 p-3 text-slate-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700">
              <Bell size={18} />
            </Link>
            <Link href="/login" className="rounded-2xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:text-emerald-700">
              Login
            </Link>
            <Link href="/register" className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700">
              Register
            </Link>
            <Link href="/sell" className="rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600">
              Dealer portal
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="rounded-2xl border border-slate-200 bg-white/80 p-3 text-slate-700 shadow-sm lg:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 z-50 h-full w-80 border-l border-slate-200 bg-white p-8 shadow-2xl"
          >
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-black text-slate-900">GreatAutos</h2>
              <button onClick={() => setOpen(false)} className="rounded-2xl bg-slate-100 p-2">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-2">
              {links.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-lg font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700">
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              <Link href="/login" onClick={() => setOpen(false)} className="block rounded-2xl border border-slate-200 px-4 py-3 text-center font-semibold text-slate-700">Login</Link>
              <Link href="/sell" onClick={() => setOpen(false)} className="block rounded-2xl bg-slate-900 px-4 py-3 text-center font-semibold text-white">Dealer portal</Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}