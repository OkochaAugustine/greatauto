import { CreditCard, Sparkles } from "lucide-react";

const payments = [
  { title: "Dealer commissions", value: "₦4.2M" },
  { title: "Listing fees", value: "₦1.8M" },
  { title: "Pending payouts", value: "₦860K" },
];

export default function AdminPaymentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Admin / Payments</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Payment management</h1>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="flex items-center gap-3"><CreditCard size={20} className="text-emerald-700" /> <span className="text-lg font-semibold text-slate-900">Track transactions and revenue activity</span></div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {payments.map((payment) => (
                <div key={payment.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-semibold text-slate-600">{payment.title}</p>
                  <p className="mt-3 text-2xl font-black text-slate-900">{payment.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
