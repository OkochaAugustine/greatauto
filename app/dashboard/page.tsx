import Link from "next/link";
import { Bell, CalendarDays, Heart, MessageSquare, Sparkles, Star } from "lucide-react";

const quickLinks = [
  { title: "Saved cars", description: "Keep your shortlist ready for the next viewing.", href: "/favourites", icon: Heart },
  { title: "Messages", description: "Stay in touch with dealers and buyers.", href: "/messages", icon: MessageSquare },
  { title: "Upcoming visits", description: "Track viewing appointments and confirmations.", href: "/notifications", icon: CalendarDays },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Dashboard</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Welcome back to your premium dashboard</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">A polished hub for your saved cars, activity, appointments, and account preferences.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} href={item.href} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400">
                  <div className="flex items-center gap-2 text-emerald-700"><Icon size={16} /> {item.title}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Activity</p>
                <h2 className="mt-2 text-2xl font-black text-slate-900">Your recent interactions</h2>
              </div>
              <div className="rounded-full bg-emerald-50 p-2 text-emerald-700"><Bell size={18} /></div>
            </div>
            <div className="mt-6 space-y-4">
              {[
                "A new inspection slot opened for your Lexus RX shortlist.",
                "A dealer shared a fresh offer for your saved Prado listing.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
            <div className="flex items-center gap-2 text-emerald-400"><Star size={18} /> Concierge note</div>
            <p className="mt-4 text-sm leading-7 text-slate-300">Your dedicated advisor is preparing a shortlist of premium options that mirror your preferred budget and style.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
