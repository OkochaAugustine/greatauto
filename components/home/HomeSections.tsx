"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Banknote, Building2, Newspaper, ShieldCheck, Sparkles, Star, Users } from "lucide-react";

const sections = [
  {
    title: "Why choose GreatAutos",
    description: "A polished experience designed for modern buyers who value trust, clarity and premium presentation.",
    items: ["Verified dealer network", "Concierge-led support", "Secure transactions"],
    href: "/about",
  },
  {
    title: "Browse by brand",
    description: "Discover top makes ranging from executive sedans to family-ready SUVs and luxury performance icons.",
    items: ["Toyota", "Lexus", "Mercedes", "BMW"],
    href: "/inventory",
  },
  {
    title: "Luxury collection",
    description: "A refined selection of vehicles that balance comfort, design and long-term value.",
    items: ["Premium SUVs", "Executive sedans", "Limited availability"],
    href: "/inventory",
  },
];

const trustPoints = [
  { title: "Dealer verification", text: "Every partner is reviewed and approved.", icon: ShieldCheck },
  { title: "Flexible financing", text: "Explore tailored payment pathways.", icon: Banknote },
  { title: "Community trust", text: "Join a network of serious buyers and sellers.", icon: Users },
];

export default function HomeSections() {
  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <Sparkles size={15} /> Premium experience
              </span>
              <h2 className="mt-5 text-3xl font-black text-slate-900 md:text-4xl">Everything you need for a seamless purchase.</h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {sections.map((section, index) => (
              <motion.article key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-2xl font-black text-slate-900">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{section.description}</p>
                <ul className="mt-5 space-y-3 text-sm font-medium text-slate-700">
                  {section.items.map((item) => <li key={item} className="rounded-full bg-white px-3 py-2">{item}</li>)}
                </ul>
                <Link href={section.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  Explore now <ArrowRight size={16} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Trusted by buyers</span>
            <h2 className="mt-5 text-3xl font-black text-slate-900">A premium platform built on trust and clarity.</h2>
            <p className="mt-4 text-slate-600">From the first search to your final handover, GreatAutos brings calm confidence and premium presentation to every interaction.</p>
            <div className="mt-8 flex items-center gap-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <div className="rounded-full bg-emerald-50 p-2 text-emerald-700"><Star size={18} /></div>
              <div>
                <p className="font-semibold text-slate-900">4.9/5 from verified buyers</p>
                <p className="text-sm text-slate-600">A reputation shaped by care and consistency.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div key={point.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><Icon size={18} /></div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{point.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{point.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_100%)] p-8 shadow-sm lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Newspaper size={15} /> Automotive insights</span>
                <h2 className="mt-5 text-3xl font-black text-slate-900">Stay updated with the latest automotive trends.</h2>
              </div>
              <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">Read the latest <ArrowRight size={16} /></Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {['New dealer launches','Financing insights','Market updates'].map((item) => <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-sm font-semibold text-slate-700">{item}</div>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
