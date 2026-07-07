import Link from "next/link";
import { BarChart3, ShieldCheck, Sparkles } from "lucide-react";

const summaryCards = [
  { title: "Users", value: "1,284", detail: "Active buyers, sellers, and dealers" },
  { title: "Listings", value: "346", detail: "Approved and pending reviews" },
  { title: "Revenue", value: "₦12.4M", detail: "Monthly marketplace contributions" },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Admin portal</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Oversee inventory, dealers and growth</h1>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {summaryCards.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-2 text-emerald-700"><BarChart3 size={16} /> {item.title}</div>
                <p className="mt-4 text-3xl font-black text-slate-900">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700"><ShieldCheck size={18} /> Review approvals and operations</div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/admin/users" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700">Manage users</Link>
              <Link href="/admin/listings" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700">Approve listings</Link>
              <Link href="/admin/analytics" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700">View analytics</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
