
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Car,
  Building2,
  Users,
  Newspaper,
  MessageSquare,
  BarChart3,
  Settings,
  Send,
  Upload,
  Plus,
  Sparkles,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Edit,
  Eye,
  Trash2,
  CheckCircle2,
  XCircle
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin", active: true },
  { icon: Car, label: "Vehicles", href: "/admin/vehicles" },
  { icon: Building2, label: "Dealers", href: "/admin/dealers" },
  { icon: Users, label: "Customers", href: "/admin/customers" },
  { icon: Newspaper, label: "News", href: "/admin/news" },
  { icon: MessageSquare, label: "Messages", href: "/admin/messages" },
  { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
  { icon: Upload, label: "Media Library", href: "/admin/media" },
  { icon: Send, label: "Social Publishing", href: "/admin/social" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

const stats = [
  { label: "Total Vehicles", value: "346", change: "+12%", up: true, icon: Car },
  { label: "Active Dealers", value: "48", change: "+5%", up: true, icon: Building2 },
  { label: "Total Users", value: "1,284", change: "+18%", up: true, icon: Users },
  { label: "Revenue", value: "₦12.4M", change: "+22%", up: true, icon: TrendingUp },
];

const recentVehicles = [
  { id: 1, name: "2023 Lexus RX 350", dealer: "Auto Luxury Motors", status: "published", price: "₦58.5M" },
  { id: 2, name: "2022 Toyota Prado", dealer: "GreatAutos Dealer", status: "pending", price: "₦84.9M" },
  { id: 3, name: "2021 BMW X5", dealer: "Prime Cars", status: "published", price: "₦49.9M" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-xl font-black text-slate-900">GreatAutos</h2>
          <p className="text-sm text-slate-500 mt-1">Admin Panel</p>
        </div>
        
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  item.active ? "bg-emerald-100 text-emerald-700" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-24">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-black text-slate-900">Dashboard</h1>
              <p className="text-slate-600 mt-2">Welcome back! Here's what's happening today.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/admin/vehicles/new"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition"
              >
                <Plus size={18} />
                Add Vehicle
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-full bg-emerald-100 p-3">
                      <Icon size={20} className="text-emerald-700" />
                    </div>
                    <div className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                      stat.up ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                    }`}>
                      {stat.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      {stat.change}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-slate-600 mt-4">{stat.label}</p>
                  <p className="text-3xl font-black text-slate-900 mt-1">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* Recent Vehicles */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-slate-900">Recent Vehicles</h3>
                <Link
                  href="/admin/vehicles"
                  className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  View all
                </Link>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-sm font-semibold text-slate-600">Vehicle</th>
                      <th className="px-6 py-4 text-sm font-semibold text-slate-600">Dealer</th>
                      <th className="px-6 py-4 text-sm font-semibold text-slate-600">Status</th>
                      <th className="px-6 py-4 text-sm font-semibold text-slate-600">Price</th>
                      <th className="px-6 py-4 text-sm font-semibold text-slate-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentVehicles.map((vehicle) => (
                      <tr key={vehicle.id} className="border-b border-slate-100 last:border-0">
                        <td className="px-6 py-4">
                          <p className="text-sm font-semibold text-slate-900">{vehicle.name}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-slate-600">{vehicle.dealer}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                            vehicle.status === "published"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-amber-100 text-amber-700"
                          }`}>
                            {vehicle.status === "published" ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                            {vehicle.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-semibold text-slate-900">{vehicle.price}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-slate-200">
                              <Eye size={16} />
                            </button>
                            <button className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-slate-200">
                              <Edit size={16} />
                            </button>
                            <button className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-red-100 hover:text-red-600">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions & Activity */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link
                    href="/admin/vehicles/new"
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    <span>Add New Vehicle</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/admin/dealers/new"
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    <span>Add New Dealer</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/admin/news/new"
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    <span>Write News Article</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Activity */}
              <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
                <h3 className="text-xl font-black mb-4">Recent Activity</h3>
                <div className="space-y-4 text-sm">
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <p className="font-semibold">New vehicle listed</p>
                    <p className="text-slate-400">2023 Lexus RX 350 added by Auto Luxury Motors</p>
                    <p className="text-xs text-slate-500 mt-1">2 minutes ago</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4">
                    <p className="font-semibold">New user registered</p>
                    <p className="text-slate-400">Adewale Johnson created an account</p>
                    <p className="text-xs text-slate-500 mt-1">15 minutes ago</p>
                  </div>
                  <div className="border-l-2 border-amber-500 pl-4">
                    <p className="font-semibold">Vehicle sold</p>
                    <p className="text-slate-400">2022 Toyota Camry marked as sold</p>
                    <p className="text-xs text-slate-500 mt-1">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
