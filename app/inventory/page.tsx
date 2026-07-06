
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Search,
  Filter,
  MapPin,
  ChevronDown,
  ArrowRight
} from "lucide-react";
import VehicleCard from "@/components/vehicles/VehicleCard";

const allVehicles = [
  {
    _id: "1",
    title: "2023 Lexus RX 350 F Sport",
    make: "Lexus",
    model: "RX 350",
    year: 2023,
    mileage: "18,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Lagos",
    price: 58500000,
    financePrice: 865000,
    gallery: ["/images/lexus.jpg", "/images/lexus-rx-350.svg"],
    featured: true,
    verified: true,
    hotDeal: false,
    newArrival: true,
    views: 328,
    rating: 4.9,
    postedDate: new Date(),
    dealer: { name: "Auto Luxury Motors" }
  },
  {
    _id: "2",
    title: "2022 Toyota Prado VX",
    make: "Toyota",
    model: "Prado",
    year: 2022,
    mileage: "13,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    location: "Abuja",
    price: 84900000,
    financePrice: 1120000,
    gallery: ["/images/prado.jpg", "/images/toyota-prado.svg"],
    featured: true,
    verified: true,
    hotDeal: true,
    newArrival: true,
    views: 520,
    rating: 5.0,
    postedDate: new Date(),
    dealer: { name: "GreatAutos Dealer" }
  },
  {
    _id: "3",
    title: "2023 Toyota Venza",
    make: "Toyota",
    model: "Venza",
    year: 2023,
    mileage: "5,000 km",
    fuel: "Hybrid",
    transmission: "Automatic",
    location: "Lagos",
    price: 45000000,
    financePrice: 680000,
    gallery: ["/images/venza.jpg", "/images/toyota-venza.svg"],
    featured: true,
    verified: true,
    hotDeal: false,
    newArrival: true,
    views: 245,
    rating: 4.8,
    postedDate: new Date(),
    dealer: { name: "Auto Luxury Motors" }
  },
  {
    _id: "4",
    title: "2021 BMW X5 M Sport",
    make: "BMW",
    model: "X5",
    year: 2021,
    mileage: "26,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Port Harcourt",
    price: 49900000,
    financePrice: 740000,
    gallery: ["/images/lexus.jpg"],
    featured: false,
    verified: true,
    hotDeal: false,
    newArrival: false,
    views: 192,
    rating: 4.8,
    postedDate: new Date(),
    dealer: { name: "Prime Cars" }
  },
  {
    _id: "5",
    title: "2022 Toyota Avalon",
    make: "Toyota",
    model: "Avalon",
    year: 2022,
    mileage: "12,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Lagos",
    price: 38500000,
    financePrice: 580000,
    gallery: ["/images/avalon.jpg", "/images/toyota-avalon.svg"],
    featured: false,
    verified: true,
    hotDeal: true,
    newArrival: false,
    views: 178,
    rating: 4.7,
    postedDate: new Date(),
    dealer: { name: "Auto Luxury Motors" }
  },
  {
    _id: "6",
    title: "2023 Range Rover Sport",
    make: "Range Rover",
    model: "Sport",
    year: 2023,
    mileage: "9,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Abuja",
    price: 136000000,
    financePrice: 2100000,
    gallery: ["/images/lexus-gs.jpg"],
    featured: true,
    verified: true,
    hotDeal: false,
    newArrival: true,
    views: 610,
    rating: 5.0,
    postedDate: new Date(),
    dealer: { name: "Elite Autos" }
  }
];

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <Sparkles size={15} /> Curated inventory
              </span>
              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Find your perfect car
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Explore premium vehicles from verified dealers across Nigeria.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_200px_200px_120px]">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4">
              <Search size={18} className="text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by make, model or city..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            <div className="relative">
              <select className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500">
                <option value="">Make</option>
                <option value="toyota">Toyota</option>
                <option value="lexus">Lexus</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="range-rover">Range Rover</option>
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" />
            </div>

            <div className="relative">
              <select className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500">
                <option value="">Location</option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="port-harcourt">Port Harcourt</option>
                <option value="kano">Kano</option>
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" />
            </div>

            <button className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-4 font-semibold text-white transition hover:bg-emerald-700">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-slate-600">
              {allVehicles.length} vehicles found
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-slate-600">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allVehicles.map((vehicle, index) => (
            <VehicleCard
              key={vehicle._id}
              vehicle={vehicle}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 hover:border-emerald-400">
            Load more vehicles
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}
