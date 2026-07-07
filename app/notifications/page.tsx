import { Bell, Sparkles } from "lucide-react";

const alerts = [
  { title: "New offer received", detail: "One of your saved listings received a fresh offer." },
  { title: "Viewing scheduled", detail: "Your Lexus RX inspection is confirmed for tomorrow." },
  { title: "Payment reminder", detail: "Your financing pre-approval is still valid for 7 days." },
];

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Notifications</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Your activity feed</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">Stay updated with listings, offers, and messages from your trusted marketplace network.</p>
          <div className="mt-8 space-y-4">
            {alerts.map((alert) => (
              <div key={alert.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3"><Bell size={20} className="text-emerald-700" /> <span className="text-lg font-semibold text-slate-900">{alert.title}</span></div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{alert.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
