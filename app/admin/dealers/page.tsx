import { Building2, Sparkles } from "lucide-react";

const dealerItems = [
  { name: "Luxe Motors", status: "Verified" },
  { name: "Prestige Auto", status: "Pending review" },
  { name: "Elite Wheels", status: "Active" },
];

export default function AdminDealersPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Admin / Dealers</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Dealer oversight</h1>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="flex items-center gap-3"><Building2 size={20} className="text-emerald-700" /> <span className="text-lg font-semibold text-slate-900">Review dealer applications, verification and listings</span></div>
            <div className="mt-6 space-y-3">
              {dealerItems.map((dealer) => (
                <div key={dealer.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4">
                  <p className="font-semibold text-slate-900">{dealer.name}</p>
                  <span className="text-sm font-semibold text-emerald-700">{dealer.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
