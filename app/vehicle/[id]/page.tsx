
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  GitCompare,
  Phone,
  MessageSquare,
  MapPin,
  Gauge,
  Fuel,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Check,
  ShieldCheck,
  Star,
  Car,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { formatPrice } from "@/utils/format";
import VehicleCard from "@/components/vehicles/VehicleCard";

const galleryImages = [
  "/images/lexus.jpg",
  "/images/lexus-rx-350.svg",
  "/images/avalon.jpg",
  "/images/prado.jpg"
];

const features = [
  "Panoramic sunroof",
  "Leather seats",
  "Heated and cooled seats",
  "Navigation system",
  "Apple CarPlay/Android Auto",
  "360° camera",
  "Adaptive cruise control",
  "Blind spot monitoring",
  "Keyless entry",
  "Push-button start"
];

const specs = [
  { label: "Make", value: "Lexus" },
  { label: "Model", value: "RX 350" },
  { label: "Year", value: "2023" },
  { label: "Mileage", value: "18,000 km" },
  { label: "Fuel Type", value: "Petrol" },
  { label: "Transmission", value: "Automatic" },
  { label: "Engine", value: "3.5L V6" },
  { label: "Horsepower", value: "295 hp" },
  { label: "Exterior Color", value: "Black" },
  { label: "Interior Color", value: "Red Leather" },
  { label: "Condition", value: "Certified" },
  { label: "VIN", value: "JTJZKCEA9N2021234" }
];

const similarVehicles = [
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
  }
];

export default function VehicleDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link href="/inventory" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900">
            <ArrowLeft size={16} /> Back to inventory
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left - Gallery */}
            <div>
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-50 aspect-[4/3] shadow-lg">
                <img
                  src={galleryImages[currentImageIndex]}
                  alt="Lexus RX 350"
                  className="h-full w-full object-cover"
                />

                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md hover:bg-white"
                >
                  <ChevronLeft size={20} className="text-slate-700" />
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md hover:bg-white"
                >
                  <ChevronRight size={20} className="text-slate-700" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "w-8 bg-emerald-600" : "w-2 bg-white/60 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-3">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative overflow-hidden rounded-xl border-2 ${
                      index === currentImageIndex ? "border-emerald-600" : "border-transparent hover:border-slate-300"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="h-24 w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Details & Actions */}
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                      Featured
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
                      New Arrival
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`rounded-full p-3 border transition ${
                        isFavorite ? "border-red-500 bg-red-50 text-red-600" : "border-slate-200 text-slate-700 hover:border-emerald-400"
                      }`}
                    >
                      <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
                    </button>
                    <button className="rounded-full p-3 border border-slate-200 text-slate-700 hover:border-emerald-400 transition">
                      <GitCompare size={20} />
                    </button>
                  </div>
                </div>

                <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
                  2023 Lexus RX 350 F Sport
                </h1>

                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-amber-600">
                    <Star size={18} fill="currentColor" />
                    <span className="font-semibold">4.9</span>
                    <span className="text-sm text-slate-500">(328 views)</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Asking price</p>
                  <p className="mt-2 text-4xl font-black text-slate-900">{formatPrice(58500000)}</p>
                  <p className="mt-2 text-sm text-slate-600">Finance from {formatPrice(865000)}/mo</p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                    <MapPin size={18} className="text-emerald-600" />
                    <span className="text-slate-700">Lagos, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                    <Gauge size={18} className="text-emerald-600" />
                    <span className="text-slate-700">18,000 km</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                    <Fuel size={18} className="text-emerald-600" />
                    <span className="text-slate-700">Petrol</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                    <Calendar size={18} className="text-emerald-600" />
                    <span className="text-slate-700">2023</span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <button className="w-full rounded-2xl bg-emerald-600 px-6 py-4 font-semibold text-white hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                    <Phone size={18} /> Call dealer
                  </button>
                  <button className="w-full rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white hover:bg-slate-800 transition flex items-center justify-center gap-2">
                    <MessageSquare size={18} /> Send message
                  </button>
                  <button className="w-full rounded-2xl border border-slate-200 px-6 py-4 font-semibold text-slate-700 hover:border-emerald-400 transition flex items-center justify-center gap-2">
                    <Car size={18} /> Schedule test drive
                  </button>
                </div>

                <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <ShieldCheck size={18} />
                    <span className="font-semibold">Verified by GreatAutos</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    This vehicle and dealer have been verified. Inspection report available upon request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Specs & Features */}
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">Vehicle specifications</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {specs.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                    <p className="text-sm font-medium text-slate-600">{spec.label}</p>
                    <p className="text-sm font-semibold text-slate-900">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">Features</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                    <Check size={16} className="text-emerald-600" />
                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">Description</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Beautifully maintained 2023 Lexus RX 350 F Sport with only 18,000 km. This luxury SUV comes fully loaded with all premium features, including panoramic sunroof, leather seats, navigation, and advanced safety systems. The vehicle has been certified by our team and is ready for a new owner.
              </p>
            </div>
          </div>

          {/* Dealer & Finance */}
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center">
                  <Car size={32} className="text-slate-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">Auto Luxury Motors</h3>
                  <div className="flex items-center gap-2 text-amber-600 mt-1">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-semibold">4.9</span>
                    <span className="text-sm text-slate-500">(128 reviews)</span>
                  </div>
                </div>
                <ShieldCheck size={24} className="text-emerald-600" />
              </div>
              <Link
                href="/dealers/1"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 hover:border-emerald-400"
              >
                View dealer profile
              </Link>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
              <h3 className="text-xl font-black">Financing calculator</h3>
              <p className="mt-2 text-sm text-slate-300">
                Get an estimate for monthly payments
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Estimate</p>
                  <p className="mt-2 text-3xl font-black">{formatPrice(865000)}/mo</p>
                </div>
                <button className="w-full rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700">
                  Get pre-approved
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black text-slate-900">Similar vehicles you might like</h2>
            <Link
              href="/inventory"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {similarVehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle._id} vehicle={vehicle} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
