import Link from "next/link";
import { ArrowRight, Filter, MapPin, Search, Sparkles } from "lucide-react";

const vehicles = [
  { name: "Lexus RX 350", price: "₦58.5M", location: "Lagos", badge: "Premium" },
  { name: "Toyota Prado", price: "₦84M", location: "Abuja", badge: "Verified" },
  { name: "Mercedes-Benz C300", price: "₦47.9M", location: "Port Harcourt", badge: "New Arrival" },
  { name: "BMW X5", price: "₦72M", location: "Lagos", badge: "Luxury" },
];

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              <Sparkles size={15} /> Curated inventory
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Discover refined vehicles</h1>
            <p className="mt-4 text-lg text-slate-600">Search premium used and certified vehicles with a reliable, design-forward experience.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <Search size={18} className="text-slate-500" />
              <input className="w-full bg-transparent text-sm outline-none" placeholder="Search by make, model or city" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {['Make','Model','Year','Price','Location'].map((filter) => (
              <button key={filter} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600">{filter}</button>
            ))}
          </div>
          <button className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
            <Filter size={16} /> Advanced filters
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {vehicles.map((vehicle) => (
            <article key={vehicle.name} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <div className="h-40 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_40%),linear-gradient(135deg,#f8fafc_0%,#e2e8f0_100%)]" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-xl font-black text-slate-900">{vehicle.name}</h2>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">{vehicle.badge}</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin size={16} className="text-emerald-600" /> {vehicle.location}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-900">{vehicle.price}</span>
                  <Link href="/vehicle/1" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">View <ArrowRight size={16} /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
