import { MessageSquare, Sparkles } from "lucide-react";

const threads = [
  { sender: "Luxe Motors", preview: "The inspection slot for your Lexus RX is available this afternoon.", time: "2m ago" },
  { sender: "Prestige Auto", preview: "A certified Prado matching your budget just arrived.", time: "1h ago" },
];

export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Messages</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Message center</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">Continue conversations with trusted dealers and receive timely updates on shortlisted vehicles.</p>
          <div className="mt-8 space-y-4">
            {threads.map((thread) => (
              <div key={thread.sender} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3"><MessageSquare size={20} className="text-emerald-700" /> <span className="text-lg font-semibold text-slate-900">{thread.sender}</span></div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{thread.preview}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{thread.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
