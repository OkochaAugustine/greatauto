"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  FileCheck2,
  Handshake,
  Mail,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

const highlights = [
  {
    title: "Verified listings",
    description: "Every listing is verified to help buyers shop with confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible financing",
    description: "Explore tailored financing paths and dealership support options.",
    icon: Banknote,
  },
  {
    title: "Dedicated guidance",
    description: "Get white-glove concierge support before and after every purchase.",
    icon: BadgeCheck,
  },
];

const services = [
  { title: "Finance", description: "Flexible payment options with trusted partners.", icon: Banknote },
  { title: "Insurance", description: "Coverage solutions that protect your investment.", icon: FileCheck2 },
  { title: "Trade-in", description: "Upgrade with a seamless trade-in experience.", icon: Handshake },
];

const dealers = [
  { name: "Prestige Motors", rating: "4.9", city: "Lagos" },
  { name: "Elite Auto House", rating: "4.8", city: "Abuja" },
  { name: "Silverline Ventures", rating: "4.9", city: "Port Harcourt" },
];

const testimonials = [
  {
    quote: "The experience felt premium from the first click to delivery.",
    name: "Amina Yusuf",
    role: "BMW X5 Owner",
  },
  {
    quote: "I found a beautifully maintained SUV in days, not weeks.",
    name: "Daniel Okafor",
    role: "Lexus RX Buyer",
  },
];

const stats = [
  { value: "3,500+", label: "Verified listings" },
  { value: "98%", label: "Dealer satisfaction" },
  { value: "24/7", label: "Buyer assistance" },
];

const news = [
  { title: "How to buy a luxury SUV with confidence", category: "Buying guide" },
  { title: "The new standard for premium dealer listings", category: "Marketplace" },
  { title: "Why verified inspection matters more than ever", category: "Insights" },
];

export default function MarketplaceHighlights() {
  return (
    <section className="bg-[linear-gradient(135deg,#f8fafc_0%,#eef2ff_100%)] py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.25rem] border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-600/10 px-4 py-2 text-sm font-semibold text-emerald-700">
                <Sparkles size={16} />
                Built for premium buying
              </div>
              <h2 className="mt-6 text-3xl font-black md:text-4xl">
                A more refined path to ownership.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                GreatAutos combines serious inventory, trusted dealerships, and an elevated experience that feels as polished as the vehicles themselves.
              </p>

              <div className="mt-8 grid gap-4">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-start gap-3">
                        <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{item.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-2xl font-black text-emerald-400">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                      <div className="rounded-xl bg-emerald-500/15 p-2 text-emerald-400">
                        <Icon size={18} />
                      </div>
                      <h3 className="mt-4 font-semibold text-white">{service.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-emerald-600" size={20} />
                <h3 className="text-2xl font-black text-slate-900">Verified dealers</h3>
              </div>
              <div className="mt-6 space-y-3">
                {dealers.map((dealer) => (
                  <div key={dealer.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4">
                    <div>
                      <p className="font-semibold text-slate-900">{dealer.name}</p>
                      <p className="mt-1 text-sm text-slate-500">{dealer.city}</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-600">
                      <Star size={14} fill="currentColor" />
                      {dealer.rating}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-emerald-400" size={20} />
                <h3 className="text-2xl font-black">Customer testimonials</h3>
              </div>
              <div className="mt-6 space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm leading-7 text-slate-300">“{testimonial.quote}”</p>
                    <div className="mt-4">
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7">
              <div className="flex items-center gap-2">
                <Newspaper className="text-emerald-600" size={20} />
                <h3 className="text-2xl font-black text-slate-900">Latest news</h3>
              </div>
              <div className="mt-6 space-y-3">
                {news.map((item) => (
                  <div key={item.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-sm font-semibold text-emerald-600">{item.category}</p>
                    <p className="mt-2 font-semibold text-slate-900">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-7">
              <div className="flex items-center gap-2">
                <Mail className="text-emerald-700" size={20} />
                <h3 className="text-2xl font-black text-slate-900">Stay in the loop</h3>
              </div>
              <p className="mt-4 max-w-xl text-slate-600">
                Receive first access to new listings, market insights, and luxury vehicle updates curated for serious buyers.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 outline-none focus:border-emerald-500"
                />
                <button className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600">
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
