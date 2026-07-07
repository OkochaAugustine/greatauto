import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-24 text-slate-900">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Join GreatAutos</span>
        <h1 className="mt-5 text-3xl font-black tracking-tight">Create your account</h1>
        <p className="mt-3 text-slate-600">Start exploring premium inventory, saving vehicles and managing your profile.</p>
        <div className="mt-8 space-y-3">
          <button className="w-full rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-700">Create account</button>
          <Link href="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">Already have an account? <ArrowRight size={16} /></Link>
        </div>
      </div>
    </main>
  );
}
