import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const posts = [
  { title: "The new standard for luxury motoring in Nigeria", excerpt: "A look at the latest trends in premium automotive experiences." },
  { title: "How buyers are approaching certified pre-owned vehicles", excerpt: "Understanding demand and dealer confidence in today's market." },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"><Sparkles size={15} /> Automotive news</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Fresh insights from the market.</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">Thoughtful stories, dealer perspectives, and market updates for automotive buyers and sellers.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">{post.title}</h2>
              <p className="mt-3 text-slate-600">{post.excerpt}</p>
              <Link href="/news" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">Read more <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
