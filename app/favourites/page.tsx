import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";

const favourites = [
  { name: "Lexus RX 350", price: "₦58.5M", location: "Lagos" },
  { name: "Toyota Prado", price: "₦84M", location: "Abuja" },
];

export default function FavouritesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Favourites</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Your saved vehicles</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">A quick access point for the models you want to revisit before booking a viewing.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {favourites.map((vehicle) => (
              <div key={vehicle.name} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="flex items-center gap-3"><Heart size={20} className="text-emerald-700" /> <span className="text-lg font-semibold text-slate-900">{vehicle.name}</span></div>
                <p className="mt-4 text-sm text-slate-600">{vehicle.location} • {vehicle.price}</p>
                <Link href="/inventory" className="mt-6 inline-flex items-center rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">View details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
