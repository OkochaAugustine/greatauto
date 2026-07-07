import Link from "next/link";
import { ArrowRight, CreditCard, Sparkles } from "lucide-react";

const options = [
  { title: "Flexible tenors", description: "Choose a repayment plan that fits your income and lifestyle." },
  { title: "Competitive rates", description: "Access a range of preferred lending options with transparent pricing." },
  { title: "Fast approvals", description: "Move from enquiry to pre-approval with a smoother experience." },
];

export default function FinancePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Vehicle financing</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Flexible financing for your next vehicle.</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">Secure the right plan with clear guidance, fast approvals, and local financing partners.</p>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#e2e8f0_100%)] p-8 shadow-sm">
            <div className="flex items-center gap-3"><CreditCard size={20} className="text-emerald-700" /><span className="font-semibold text-slate-900">Financing options</span></div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {options.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">Talk to a finance advisor <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
