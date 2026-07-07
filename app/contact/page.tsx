import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Contact us</span>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Let’s make your next move feel effortless.</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">From launch to delivery, our team is on hand to help you navigate every step.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3"><Mail size={18} className="text-emerald-700" /> hello@greatautos.com</div>
              <div className="flex items-center gap-3"><Phone size={18} className="text-emerald-700" /> +234 800 000 0000</div>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-emerald-700" /> Victoria Island, Lagos</div>
            </div>
            <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">Return home <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
