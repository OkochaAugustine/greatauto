import { Users, Sparkles } from "lucide-react";

const userGroups = [
  { label: "Buyers", value: "876" },
  { label: "Sellers", value: "241" },
  { label: "Dealers", value: "167" },
];

export default function AdminUsersPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Admin / Users</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">User management</h1>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="flex items-center gap-3"><Users size={20} className="text-emerald-700" /> <span className="text-lg font-semibold text-slate-900">Manage buyer, seller and dealer accounts</span></div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {userGroups.map((group) => (
                <div key={group.label} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-semibold text-slate-600">{group.label}</p>
                  <p className="mt-3 text-2xl font-black text-slate-900">{group.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
