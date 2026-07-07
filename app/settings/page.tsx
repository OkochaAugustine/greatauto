import { Sparkles, Settings2 } from "lucide-react";

const settingsGroups = [
  { title: "Notifications", description: "Choose updates for offers, messages, and financing milestones." },
  { title: "Privacy", description: "Control who can view your saved listings and profile information." },
  { title: "Security", description: "Review login activity and maintain account safety." },
];

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Settings</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Manage your account settings</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">Fine-tune your account experience with clarity and confidence.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {settingsGroups.map((group) => (
              <div key={group.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3"><Settings2 size={20} className="text-emerald-700" /> <span className="text-lg font-semibold text-slate-900">{group.title}</span></div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
