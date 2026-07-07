import Link from "next/link";
import { ArrowRight, Sparkles, RefreshCw } from "lucide-react";

const steps = [
  { title: "Instant estimate", description: "Share your current vehicle details for a quick valuation." },
  { title: "Flexible upgrade paths", description: "Compare options that match your planned next purchase." },
  { title: "Hassle-free paperwork", description: "Let our team guide the transition and documentation." },
];

export default function TradeInPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Trade-in</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Upgrade your current vehicle with confidence.</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">Value your current car, explore upgrade options, and transition smoothly to your next ride.</p>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#e2e8f0_100%)] p-8 shadow-sm">
            <div className="flex items-center gap-3"><RefreshCw size={20} className="text-emerald-700" /><span className="font-semibold text-slate-900">Fast trade-in evaluation</span></div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">Start valuation <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
