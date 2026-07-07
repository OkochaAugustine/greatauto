import Link from "next/link";
import { ArrowLeft, BadgeCheck, Gauge, MapPin, ShieldCheck, Sparkles } from "lucide-react";

export default function VehicleDetailPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link href="/inventory" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
            <ArrowLeft size={16} /> Back to inventory
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.15),_transparent_35%),linear-gradient(135deg,#f8fafc_0%,#e2e8f0_100%)] p-10 shadow-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <Sparkles size={15} /> Premium listing
              </span>
              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Lexus RX 350</h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">A beautifully maintained luxury SUV with advanced safety, panoramic comfort, and premium finish.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Mileage", value: "21,000 km" },
                  { label: "Fuel", value: "Petrol" },
                  { label: "Transmission", value: "Automatic" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-2 font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700"><ShieldCheck size={18} /> Verified by GreatAutos</div>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-500">Asking price</p>
              <p className="mt-2 text-4xl font-black text-slate-900">₦58.5M</p>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="flex items-center gap-2"><MapPin size={16} /> Lagos, Nigeria</div>
                <div className="flex items-center gap-2"><Gauge size={16} /> 21,000 km</div>
                <div className="flex items-center gap-2"><BadgeCheck size={16} /> Certified condition</div>
              </div>
              <Link href="/contact" className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">Schedule viewing</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
