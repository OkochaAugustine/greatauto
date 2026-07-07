import Link from "next/link";
import { ArrowRight, CarFront, Sparkles, Upload } from "lucide-react";

export default function SellPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Sell your car</span>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">List with confidence and reach serious buyers.</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">Create a premium listing, showcase your vehicle beautifully, and connect with verified buyers across Nigeria.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">Get started <ArrowRight size={16} /></Link>
              <Link href="/inventory" className="rounded-2xl border border-slate-200 px-5 py-3 font-semibold text-slate-700">Browse buyer demand</Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#e2e8f0_100%)] p-8 shadow-sm">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><CarFront size={20} /></div>
              <div>
                <p className="font-semibold text-slate-900">Vehicle submission</p>
                <p className="text-sm text-slate-600">Upload photos, details and pricing in minutes.</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white/80 p-8 text-center">
              <Upload size={24} className="mx-auto text-slate-500" />
              <p className="mt-3 font-semibold text-slate-700">Drop your images here</p>
              <p className="mt-2 text-sm text-slate-500">High-res photos and videos will be supported in the next phase.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
