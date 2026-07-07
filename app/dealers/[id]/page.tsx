import Link from "next/link";
import { ArrowLeft, Building2, ShieldCheck, Sparkles } from "lucide-react";

export default function DealerDetailPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link href="/dealers" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft size={16} /> Back to dealers</Link>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_100%)] p-10 shadow-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Luxe Motors</span>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">A trusted name in luxury mobility</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">We curate premium inventory, handle every detail with care, and provide a seamless purchasing experience.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"><Building2 size={16} className="mr-2 inline" /> 120+ listings</div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"><ShieldCheck size={16} className="mr-2 inline" /> 4.9 average rating</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
