"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import VehicleCard from "@/components/vehicles/VehicleCard";

interface Vehicle {
  _id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
  location: string;
  price: number;
  financePrice?: number;
  gallery: string[];
  featured: boolean;
  verified: boolean;
  hotDeal: boolean;
  newArrival: boolean;
  views: number;
  rating: number;
  postedDate: Date;
  dealer: {
    name: string;
    logo?: string;
  };
}

interface FeaturedCarsProps {
  vehicles: Vehicle[];
  featuredVehicles: Vehicle[];
  latestVehicles: Vehicle[];
}

const brands = [
  "Toyota",
  "Lexus",
  "Mercedes-Benz",
  "BMW",
  "Honda",
  "Ford",
  "Audi",
  "Porsche",
];

const categories = [
  {
    title: "SUVs",
    description: "Premium family SUVs built for comfort and adventure.",
    image: "/images/lexus.jpg",
  },
  {
    title: "Luxury Sedans",
    description: "Executive vehicles with unmatched elegance.",
    image: "/images/avalon.jpg",
  },
  {
    title: "Pickup Trucks",
    description: "Powerful commercial and lifestyle trucks.",
    image: "/images/prado.jpg",
  },
];

export default function FeaturedCars({
  vehicles,
  featuredVehicles,
  latestVehicles,
}: FeaturedCarsProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
              <Sparkles size={16} />
              Featured Vehicles
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Discover Your Next Vehicle
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Browse premium vehicles uploaded by verified dealers across
              Nigeria. Every listing is professionally presented with
              financing options, verified dealer information and complete
              vehicle history.
            </p>
          </div>

          <Link
            href="/inventory"
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-700"
          >
            Browse Inventory
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-2xl font-black text-white">
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="leading-7 text-slate-600">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-16 rounded-[30px] border border-slate-200 bg-slate-50 p-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-black text-slate-900">
              Popular Brands
            </h3>
            <Link href="/inventory" className="font-semibold text-emerald-600">
              View All
            </Link>
          </div>

          <div className="flex flex-wrap gap-4">
            {brands.map((brand) => (
              <button
                key={brand}
                className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:border-emerald-500 hover:text-emerald-600"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.3fr_.7fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {vehicles.map((vehicle, index) => (
              <VehicleCard
                key={vehicle._id}
                vehicle={vehicle}
                index={index}
              />
            ))}
          </div>

          <div className="space-y-8">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
                    Latest Listings
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-slate-900">
                    Fresh Arrivals
                  </h3>
                </div>
                <ShieldCheck className="text-emerald-600" size={28} />
              </div>

              <div className="mt-8 space-y-4">
                {latestVehicles.map((vehicle) => (
                  <Link
                    key={vehicle._id}
                    href={`/vehicle/${vehicle._id}`}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-3 transition hover:border-emerald-400 hover:bg-emerald-50"
                  >
                    <img
                      src={
                        vehicle.gallery.length > 0
                          ? vehicle.gallery[0]
                          : "/images/lexus.jpg"
                      }
                      alt={vehicle.title}
                      className="h-20 w-28 rounded-xl object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900">
                        {vehicle.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-500">
                        {vehicle.location}
                      </p>
                      <p className="mt-2 font-bold text-emerald-600">
                        ₦{vehicle.price.toLocaleString()}
                      </p>
                    </div>
                    <ChevronRight size={18} className="text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] bg-slate-900 text-white shadow-xl">
              <img
                src="/images/lexus.jpg"
                alt="Dealer"
                className="h-60 w-full object-cover"
              />
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
                  Verified Dealers
                </p>
                <h3 className="mt-3 text-3xl font-black">
                  Buy with confidence.
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Every dealership on GreatAutos is verified before vehicles
                  become visible on the marketplace. Shop safely from trusted
                  sellers nationwide.
                </p>
                <Link
                  href="/dealers"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
                >
                  Explore Dealers
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
