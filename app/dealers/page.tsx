import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Sparkles } from "lucide-react";

const dealers = [
  { name: "Luxe Motors", city: "Lagos", rating: "4.9", specialty: "Luxury SUVs and executive sedans" },
  { name: "Prestige Auto", city: "Abuja", rating: "4.8", specialty: "Certified pre-owned and family vehicles" },
  { name: "Elite Wheels", city: "Port Harcourt", rating: "4.7", specialty: "Premium performance and modern crossovers" },
];

export default function DealersPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <Sparkles size={15} /> Verified dealers
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Trusted dealer network</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">Professional partners delivering remarkable service, transparent listings, and premium customer care.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {dealers.map((dealer) => (
            <article key={dealer.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 text-emerald-700"><Building2 size={20} /> <span className="font-semibold">Verified dealer</span></div>
              <h2 className="mt-4 text-2xl font-black text-slate-900">{dealer.name}</h2>
              <p className="mt-2 text-slate-600">Serving {dealer.city} with premium vehicles and concierge-led support.</p>
              <p className="mt-4 text-sm text-slate-600">{dealer.specialty}</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"><ShieldCheck size={16} /> {dealer.rating} rating</div>
                <Link href="/dealers/1" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">View profile <ArrowRight size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
