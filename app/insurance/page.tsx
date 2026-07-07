import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

const coveragePlans = [
  { title: "Third party", description: "Affordable cover for essential legal compliance." },
  { title: "Comprehensive", description: "Broader protection for accidents, theft, and damage." },
  { title: "Custom add-ons", description: "Special protection for luxury features and high-value vehicles." },
];

export default function InsurancePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Insurance</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Reliable protection for every vehicle.</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">Get comprehensive coverage, fast claims support, and trusted advice for your next purchase.</p>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700"><ShieldCheck size={18} /> Coverage tailored to your needs</div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {coveragePlans.map((plan) => (
                <div key={plan.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">{plan.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{plan.description}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">Get a quote <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
