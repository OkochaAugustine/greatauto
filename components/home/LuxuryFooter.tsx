import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function LuxuryFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              GreatAutos
            </p>
            <h3 className="mt-4 text-3xl font-black text-white">
              Luxury buying, simplified.
            </h3>
            <p className="mt-4 max-w-xl text-slate-400">
              Discover premium vehicles, connect with trusted dealers, and move from browsing to ownership with confidence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Explore</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li><Link href="/inventory" className="transition hover:text-emerald-400">Browse cars</Link></li>
              <li><Link href="/sell" className="transition hover:text-emerald-400">Sell your car</Link></li>
              <li><Link href="/about" className="transition hover:text-emerald-400">About us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li className="flex items-center gap-2"><Phone size={16} /> +234 800 000 0000</li>
              <li className="flex items-center gap-2"><Mail size={16} /> hello@greatautos.com</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Lagos, Abuja, Port Harcourt</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GreatAutos. All rights reserved.</p>
          <Link href="/inventory" className="inline-flex items-center gap-2 font-semibold text-slate-300 transition hover:text-emerald-400">
            Start your search
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
