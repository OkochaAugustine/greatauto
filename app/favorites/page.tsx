
import Link from "next/link";
import { Heart, Sparkles, X } from "lucide-react";
import VehicleCard from "@/components/vehicles/VehicleCard";

const staticVehicles = [
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
  }
];

export default function FavoritesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <Heart size={15} /> Saved vehicles
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Your shortlist of premium rides
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Keep track of vehicles you love, compare options, and come back when you're ready to explore further.
          </p>
        </div>
      </section>
      
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {staticVehicles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {staticVehicles.map((vehicle, index) => (
              <div key={vehicle._id} className="relative">
                <button 
                  className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow-md hover:bg-red-50"
                >
                  <X size={18} className="text-slate-700" />
                </button>
                <VehicleCard vehicle={vehicle} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Heart size={48} className="mx-auto text-slate-400 mb-6" />
            <h2 className="text-2xl font-black text-slate-900 mb-2">No saved vehicles yet</h2>
            <p className="text-slate-600 mb-6">Start exploring our inventory and save your favorites</p>
            <Link 
              href="/inventory" 
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-8 py-3 font-semibold text-white hover:bg-emerald-600"
            >
              Browse inventory
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
