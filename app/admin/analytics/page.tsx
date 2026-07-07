import { BarChart3, Sparkles } from "lucide-react";

const reports = [
  { title: "Growth", detail: "Inventory views are up 14% week over week." },
  { title: "Engagement", detail: "Dealer conversations increased across premium listings." },
  { title: "Dealer activity", detail: "Three new dealers were onboarded this month." },
];

export default function AdminAnalyticsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Admin / Analytics</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Performance analytics</h1>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="flex items-center gap-3"><BarChart3 size={20} className="text-emerald-700" /> <span className="text-lg font-semibold text-slate-900">Monitor growth, engagement and dealer activity</span></div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {reports.map((report) => (
                <div key={report.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-semibold text-slate-900">{report.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{report.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
