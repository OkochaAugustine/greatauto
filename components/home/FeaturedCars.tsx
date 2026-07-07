"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Fuel,
  Gauge,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Calendar,
  GitCompare,
  Eye,
  BadgeCheck,
  Phone,
  Star,
} from "lucide-react";

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
    image: "/images/categories/suv.jpg",
  },
  {
    title: "Luxury Sedans",
    description: "Executive vehicles with unmatched elegance.",
    image: "/images/categories/sedan.jpg",
  },
  {
    title: "Pickup Trucks",
    description: "Powerful commercial and lifestyle trucks.",
    image: "/images/categories/truck.jpg",
  },
];

const cars = [
  {
    id: 1,
    slug: "lexus-rx350-2023",
    featured: true,
    verified: true,
    dealer: "Auto Luxury Motors",
    dealerLogo: "/images/dealers/dealer1.png",
    image: "/images/cars/lexus-rx350.jpg",
    gallery: [
      "/images/cars/lexus-rx350.jpg",
      "/images/cars/lexus-rx350-2.jpg",
    ],
    title: "2023 Lexus RX350 F Sport",
    price: "₦58,500,000",
    finance: "₦865,000/mo",
    year: 2023,
    mileage: "18,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Lagos",
    viewed: 328,
    posted: "2 hours ago",
    rating: 4.9,
  },

  {
    id: 2,
    slug: "toyota-prado-2022",
    featured: true,
    verified: true,
    dealer: "GreatAutos Dealer",
    dealerLogo: "/images/dealers/dealer2.png",
    image: "/images/cars/prado.jpg",
    gallery: [],
    title: "2022 Toyota Prado VX",
    price: "₦84,900,000",
    finance: "₦1.12M/mo",
    year: 2022,
    mileage: "13,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    location: "Abuja",
    viewed: 520,
    posted: "Today",
    rating: 5,
  },

  {
    id: 3,
    slug: "bmw-x5-2021",
    featured: false,
    verified: true,
    dealer: "Prime Cars",
    dealerLogo: "/images/dealers/dealer3.png",
    image: "/images/cars/bmw-x5.jpg",
    gallery: [],
    title: "2021 BMW X5 M Sport",
    price: "₦49,900,000",
    finance: "₦740,000/mo",
    year: 2021,
    mileage: "26,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Port Harcourt",
    viewed: 192,
    posted: "Yesterday",
    rating: 4.8,
  },

  {
    id: 4,
    slug: "mercedes-glc-2022",
    featured: true,
    verified: true,
    dealer: "Mercedes Hub",
    dealerLogo: "/images/dealers/dealer4.png",
    image: "/images/cars/glc.jpg",
    gallery: [],
    title: "2022 Mercedes-Benz GLC300",
    price: "₦54,800,000",
    finance: "₦812,000/mo",
    year: 2022,
    mileage: "16,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Lagos",
    viewed: 430,
    posted: "5 hours ago",
    rating: 4.9,
  },

  {
    id: 5,
    slug: "toyota-camry-2024",
    featured: false,
    verified: true,
    dealer: "Auto World",
    dealerLogo: "/images/dealers/dealer5.png",
    image: "/images/cars/camry.jpg",
    gallery: [],
    title: "2024 Toyota Camry XSE",
    price: "₦31,500,000",
    finance: "₦470,000/mo",
    year: 2024,
    mileage: "8,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Benin",
    viewed: 90,
    posted: "Today",
    rating: 4.7,
  },

  {
    id: 6,
    slug: "range-rover-sport",
    featured: true,
    verified: true,
    dealer: "Elite Autos",
    dealerLogo: "/images/dealers/dealer6.png",
    image: "/images/cars/range.jpg",
    gallery: [],
    title: "2023 Range Rover Sport",
    price: "₦136,000,000",
    finance: "₦2.1M/mo",
    year: 2023,
    mileage: "9,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Abuja",
    viewed: 610,
    posted: "1 hour ago",
    rating: 5,
  },
];

export default function FeaturedCars() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [compare, setCompare] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const toggleCompare = (id: number) => {
    setCompare((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

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
      Browse premium vehicles uploaded by verified dealers across Nigeria.
      Every listing is professionally presented with financing options,
      verified dealer information and complete vehicle history.
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

{/* Categories */}

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

{/* Popular Brands */}

<div className="mb-16 rounded-[30px] border border-slate-200 bg-slate-50 p-8">

  <div className="mb-6 flex items-center justify-between">

    <h3 className="text-2xl font-black text-slate-900">
      Popular Brands
    </h3>

    <Link
      href="/brands"
      className="font-semibold text-emerald-600"
    >
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

{/* Featured Cars */}

<div className="grid gap-8 xl:grid-cols-[1.3fr_.7fr]">

  <div className="grid gap-8 md:grid-cols-2">

    {cars.map((car, index) => (
  
      <motion.article

        key={car.id}

        initial={{ opacity: 0, y: 40 }}

        whileInView={{ opacity: 1, y: 0 }}

        whileHover={{ y: -8 }}

        viewport={{ once: true }}

        transition={{ delay: index * 0.08 }}

        className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-xl"
      >
        <div className="relative">

  <Link href={`/vehicle/${car.id}`}>

    <img
      src={car.image}
      alt={car.title}
      className="h-64 w-full object-cover transition duration-700 hover:scale-105"
    />

  </Link>

  {car.featured && (
    <span className="absolute left-5 top-5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
      Featured
    </span>
  )}

  <button
    onClick={() => toggleFavorite(car.id)}
    className={`absolute right-5 top-5 rounded-full p-3 shadow-lg transition ${
      favorites.includes(car.id)
        ? "bg-red-500 text-white"
        : "bg-white text-slate-700 hover:bg-red-500 hover:text-white"
    }`}
  >
    <Heart
      size={18}
      fill={favorites.includes(car.id) ? "currentColor" : "none"}
    />
  </button>

</div>

<div className="p-6">

  <div className="mb-4 flex items-center justify-between">

    <div className="flex items-center gap-3">

      <img
        src={car.dealerLogo}
        alt={car.dealer}
        className="h-11 w-11 rounded-full border object-cover"
      />

      <div>

        <p className="font-bold text-slate-900">
          {car.dealer}
        </p>

        <div className="mt-1 flex items-center gap-1 text-xs text-emerald-600">

          <BadgeCheck size={14} />

          Verified Dealer

        </div>

      </div>

    </div>

    <div className="flex items-center gap-1 text-amber-500">

      <Star size={16} fill="currentColor" />

      <span className="font-semibold">
        {car.rating}
      </span>

    </div>

  </div>

  <Link
    href={`/vehicle/${car.id}`}
    className="text-2xl font-black text-slate-900 transition hover:text-emerald-600"
  >
    {car.title}
  </Link>

  <div className="mt-4 flex flex-wrap gap-2">

    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium">
      <Calendar className="mr-1 inline" size={14} />
      {car.year}
    </span>

    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium">
      <Eye className="mr-1 inline" size={14} />
      {car.viewed}
    </span>

    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium">
      {car.posted}
    </span>

  </div>

  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">

    <div className="flex items-center gap-2 text-slate-600">
      <MapPin size={16} />
      {car.location}
    </div>

    <div className="flex items-center gap-2 text-slate-600">
      <Gauge size={16} />
      {car.mileage}
    </div>

    <div className="flex items-center gap-2 text-slate-600">
      <Fuel size={16} />
      {car.fuel}
    </div>

    <div className="rounded-full bg-slate-100 px-3 py-2 text-center font-medium">
      {car.transmission}
    </div>

  </div>

  <div className="mt-7">

    <p className="text-xs uppercase tracking-widest text-slate-400">
      Price
    </p>

    <h3 className="mt-1 text-3xl font-black text-emerald-600">
      {car.price}
    </h3>

    <p className="mt-1 text-sm text-slate-500">
      Finance from {car.finance}
    </p>

  </div>

  <div className="mt-8 flex gap-3">

    <button
      onClick={() => toggleCompare(car.id)}
      className={`flex-1 rounded-xl border py-3 font-semibold transition ${
        compare.includes(car.id)
          ? "border-emerald-600 bg-emerald-50 text-emerald-700"
          : "border-slate-300 hover:border-emerald-600"
      }`}
    >
      <GitCompare className="mr-2 inline" size={16} />
      Compare
    </button>

    <button className="rounded-xl border border-slate-300 px-4 transition hover:border-emerald-600 hover:text-emerald-600">
      <Phone size={18} />
    </button>

  </div>

  <Link
    href={`/vehicle/${car.id}`}
    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-4 font-bold text-white transition hover:bg-emerald-600"
  >
    View Details
    <ArrowRight size={18} />
  </Link>

</div>

</motion.article>

    ))}

  </div>

  {/* Right Sidebar */}
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

      {cars.slice(0, 4).map((car) => (

        <Link
          key={car.id}
          href={`/vehicle/${car.id}`}
          className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-3 transition hover:border-emerald-400 hover:bg-emerald-50"
        >

          <img
            src={car.image}
            alt={car.title}
            className="h-20 w-28 rounded-xl object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="flex-1">

            <h4 className="font-bold text-slate-900">
              {car.title}
            </h4>

            <p className="mt-1 text-sm text-slate-500">
              {car.location}
            </p>

            <p className="mt-2 font-bold text-emerald-600">
              {car.price}
            </p>

          </div>

          <ChevronRight size={18} className="text-slate-400" />

        </Link>

      ))}

    </div>

  </div>

  <div className="overflow-hidden rounded-[30px] bg-slate-900 text-white shadow-xl">

    <img
      src="/images/dealer-banner.jpg"
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
        Every dealership on GreatAutos is verified before vehicles become visible
        on the marketplace. Shop safely from trusted sellers nationwide.
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