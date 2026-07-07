import { Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> About GreatAutos</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">A premium marketplace for modern automotive discovery.</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">GreatAutos brings together curated listings, verified dealers, and a refined browsing experience tailored for buyers who appreciate quality and craftsmanship.</p>
        </div>
      </section>
    </main>
  );
}
