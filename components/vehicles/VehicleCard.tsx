"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  GitCompare,
  MapPin,
  Gauge,
  Fuel,
  Calendar,
  Eye,
  Star,
  ShieldCheck,
  Phone,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { formatPrice } from "@/utils/format";

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

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

export default function VehicleCard({ vehicle, index }: VehicleCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCompare, setIsCompare] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images =
    vehicle.gallery.length > 0 ? vehicle.gallery : ["/images/lexus.jpg"];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Link href={`/vehicle/${vehicle._id}`} className="block">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <Image
              src={images[currentImageIndex]}
              alt={vehicle.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={index < 3}
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="absolute bottom-3 right-3 flex gap-1.5">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === currentImageIndex
                          ? "w-4 bg-white"
                          : "w-1.5 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="absolute left-3 top-3 flex flex-col gap-2">
              {vehicle.featured && (
                <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Featured
                </span>
              )}
              {vehicle.hotDeal && (
                <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Hot Deal
                </span>
              )}
              {vehicle.newArrival && (
                <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  New Arrival
                </span>
              )}
            </div>

            <div className="absolute right-3 top-3 flex flex-col gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsFavorite(!isFavorite);
                }}
                className={`rounded-full p-2 shadow-lg transition-all ${
                  isFavorite
                    ? "bg-red-500 text-white"
                    : "bg-white/90 text-slate-700 hover:bg-red-500 hover:text-white"
                }`}
              >
                <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsCompare(!isCompare);
                }}
                className={`rounded-full p-2 shadow-lg transition-all ${
                  isCompare
                    ? "bg-emerald-600 text-white"
                    : "bg-white/90 text-slate-700 hover:bg-emerald-600 hover:text-white"
                }`}
              >
                <GitCompare size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-amber-500">
              <Star size={14} fill="currentColor" />
              <span className="text-sm font-semibold">{vehicle.rating}</span>
            </div>
            <span className="text-sm text-slate-500">•</span>
            <div className="flex items-center gap-1.5 text-slate-600">
              <Eye size={14} />
              <span className="text-sm">{vehicle.views.toLocaleString()}</span>
            </div>
            <span className="text-sm text-slate-500">•</span>
            <div className="flex items-center gap-1.5 text-slate-600">
              <Calendar size={14} />
              <span className="text-sm">
                {new Date(vehicle.postedDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <h3 className="mb-1 text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
            {vehicle.title}
          </h3>

          <div className="mb-4 flex items-center gap-2 text-sm text-slate-600">
            {vehicle.dealer?.logo && (
              <Image
                src={vehicle.dealer.logo}
                alt={vehicle.dealer.name}
                width={24}
                height={24}
                className="rounded-full object-cover"
              />
            )}
            <span className="font-medium">{vehicle.dealer?.name}</span>
            {vehicle.verified && (
              <div className="flex items-center gap-1 text-emerald-600">
                <ShieldCheck size={14} />
                <span className="text-xs font-semibold">Verified</span>
              </div>
            )}
          </div>

          <div className="mb-4 grid grid-cols-4 gap-2 text-xs">
            <div className="flex flex-col items-center gap-1 rounded-xl bg-slate-50 p-2">
              <Calendar size={14} className="text-slate-500" />
              <span className="font-semibold text-slate-700">
                {vehicle.year}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-xl bg-slate-50 p-2">
              <Gauge size={14} className="text-slate-500" />
              <span className="font-semibold text-slate-700">
                {vehicle.mileage}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-xl bg-slate-50 p-2">
              <Fuel size={14} className="text-slate-500" />
              <span className="font-semibold text-slate-700">
                {vehicle.fuel}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-xl bg-slate-50 p-2">
              <div className="h-3.5 w-3.5 rounded-full bg-slate-500" />
              <span className="font-semibold text-slate-700">
                {vehicle.transmission}
              </span>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-2 text-sm text-slate-600">
            <MapPin size={16} />
            <span>{vehicle.location}</span>
          </div>

          <div className="border-t border-slate-100 pt-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Price
                </p>
                <p className="text-2xl font-black text-emerald-600">
                  {formatPrice(vehicle.price)}
                </p>
                {vehicle.financePrice && (
                  <p className="text-sm text-slate-500">
                    {formatPrice(vehicle.financePrice)}/mo
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                  <Phone size={16} />
                </button>
                <div className="flex items-center gap-1 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white group-hover:bg-emerald-600 transition-colors">
                  <span>View</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
