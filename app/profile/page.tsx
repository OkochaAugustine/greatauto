import Link from "next/link";
import { BadgeCheck, Sparkles, UserCircle2 } from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Profile</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Your profile center</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">Manage your contact details, saved preferences, and account security in one place.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex items-center gap-3"><UserCircle2 size={24} className="text-emerald-700" /> <span className="text-lg font-semibold text-slate-900">Personal details and preferences</span></div>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Name: Amina Okafor</div>
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Email: amina@example.com</div>
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Preferred categories: SUVs, Executive sedans</div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700"><BadgeCheck size={18} /> Verified account</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">Your profile is verified and ready for concierge support, document sharing, and secure bookings.</p>
              <Link href="/settings" className="mt-6 inline-flex items-center rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">Open account settings</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
