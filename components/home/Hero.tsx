"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BadgeDollarSign,
  Bike,
  Car,
  ChevronRight,
  Headphones,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useRouter } from "next/navigation";

const heroCars = [
  {
    name: "Toyota Venza",
    image: "/images/venza.jpg",
  },
  {
    name: "Lexus RX 350",
    image: "/images/lexus.jpg",
  },
  {
    name: "Toyota Prado",
    image: "/images/prado.jpg",
  },
  {
    name: "Toyota Avalon",
    image: "/images/avalon.jpg",
  },
  {
    name: "Lexus GX460",
    image: "/images/lexus-gs.jpg",
  },
];

const vehicleTypes = [
  { label: "Cars", icon: Car },
  { label: "Bikes", icon: Bike },
  { label: "Trucks", icon: Truck },
];

const searchTags = ["Toyota", "Lexus", "Mercedes", "BMW", "Porsche", "Range Rover"];

export default function Hero() {
  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [activeType, setActiveType] = useState("Cars");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [bodyType, setBodyType] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroCars.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const browseCars = () => router.push("/inventory");
  const sellCar = () => router.push("/sell");

  const searchCars = () => {
    const params = new URLSearchParams();

    if (make) params.append("make", make);
    if (model) params.append("model", model);
    if (year) params.append("year", year);
    if (price) params.append("price", price);
    if (location) params.append("location", location);
    if (condition) params.append("condition", condition);
    if (fuel) params.append("fuel", fuel);
    if (transmission) params.append("transmission", transmission);
    if (bodyType) params.append("bodyType", bodyType);

    const searchPath = params.toString() ? `/inventory?${params.toString()}` : "/inventory";
    router.push(searchPath);
  };

  return (
    <section className="relative overflow-hidden bg-[#060913] pt-24 lg:pt-28">
      <AnimatePresence mode="wait">
        <motion.div
          key={heroCars[current].image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroCars[current].image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.16),transparent_36%)]" />

      <div className="relative z-20 mx-auto grid min-h-[820px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 backdrop-blur-md">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm font-semibold tracking-[0.25em] text-emerald-300 uppercase">
              Luxury marketplace
            </span>
          </div>

          <h1 className="mt-7 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            Discover your
            <br />
            <span className="bg-gradient-to-r from-emerald-300 via-white to-slate-200 bg-clip-text text-transparent">
              next signature drive.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Buy and sell exceptional vehicles with premium presentation, trusted dealer verification, and a buying experience worthy of the finest machines on the road.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={browseCars}
              className="rounded-2xl bg-emerald-500 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Explore inventory
            </button>
            <button
              onClick={sellCar}
              className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Sell your car
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Verified dealers",
                text: "Every listing reviewed.",
                icon: ShieldCheck,
              },
              {
                title: "Flexible pricing",
                text: "Compare premium offers.",
                icon: BadgeDollarSign,
              },
              {
                title: "White-glove support",
                text: "Guidance from start to finish.",
                icon: Headphones,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <Icon className="text-emerald-400" size={20} />
                  <h4 className="mt-3 font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={heroCars[current].image}
              src={heroCars[current].image}
              initial={{ opacity: 0, x: 120, rotate: -2, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.9 }}
              className="relative z-20 w-full max-w-[720px] rounded-[2rem] border border-white/15 object-cover shadow-[0_35px_120px_rgba(0,0,0,0.55)]"
              alt={heroCars[current].name}
            />
          </AnimatePresence>

          <div className="absolute bottom-6 left-6 rounded-2xl border border-white/15 bg-slate-950/80 px-4 py-3 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Featured now</p>
            <p className="mt-1 text-lg font-semibold text-white">{heroCars[current].name}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8 }}
        className="relative z-30 mx-auto -mt-8 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-wrap gap-3">
            {vehicleTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.label}
                  onClick={() => setActiveType(type.label)}
                  className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    activeType === type.label
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Icon size={18} />
                  {type.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <select
              value={make}
              onChange={(event) => setMake(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500"
            >
              <option value="">Make</option>
              <option value="Toyota">Toyota</option>
              <option value="Lexus">Lexus</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="BMW">BMW</option>
            </select>

            <select
              value={model}
              onChange={(event) => setModel(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500"
            >
              <option value="">Model</option>
              <option value="RX 350">RX 350</option>
              <option value="Prado">Prado</option>
              <option value="C 300">C 300</option>
              <option value="X7">X7</option>
            </select>

            <select
              value={year}
              onChange={(event) => setYear(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500"
            >
              <option value="">Year</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>

            <select
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500"
            >
              <option value="">Price</option>
              <option value="₦10M+">₦10M+</option>
              <option value="₦20M+">₦20M+</option>
              <option value="₦40M+">₦40M+</option>
              <option value="₦70M+">₦70M+</option>
            </select>

            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500"
            >
              <option value="">Location</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Port Harcourt">Port Harcourt</option>
              <option value="Kano">Kano</option>
            </select>

            <select
              value={condition}
              onChange={(event) => setCondition(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500"
            >
              <option value="">Condition</option>
              <option value="Certified">Certified</option>
              <option value="Excellent">Excellent</option>
              <option value="Foreign Used">Foreign Used</option>
            </select>

            <select
              value={fuel}
              onChange={(event) => setFuel(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500"
            >
              <option value="">Fuel</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            <select
              value={transmission}
              onChange={(event) => setTransmission(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500"
            >
              <option value="">Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>

            <select
              value={bodyType}
              onChange={(event) => setBodyType(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500 sm:col-span-2 xl:col-span-1"
            >
              <option value="">Body Type</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Coupe">Coupe</option>
              <option value="Truck">Truck</option>
            </select>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-slate-600">Popular searches</span>
              {searchTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setMake(tag)}
                  className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-600 hover:text-white"
                >
                  {tag}
                </button>
              ))}
            </div>

            <button
              onClick={searchCars}
              className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 font-semibold text-white transition hover:bg-emerald-600"
            >
              <Search size={18} />
              Search inventory
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}