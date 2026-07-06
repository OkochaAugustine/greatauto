import Hero from "@/components/home/Hero";
import FeaturedCars from "@/components/home/FeaturedCars";
import HomeSections from "@/components/home/HomeSections";
import Navbar from "@/components/layout/Navbar";

const staticVehicles = [
  {
    _id: "1",
    title: "2023 Lexus RX350 F Sport",
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
    dealer: {
      name: "Auto Luxury Motors",
    },
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
    dealer: {
      name: "GreatAutos Dealer",
    },
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
    dealer: {
      name: "Auto Luxury Motors",
    },
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
    dealer: {
      name: "Prime Cars",
    },
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
    dealer: {
      name: "Auto Luxury Motors",
    },
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
    dealer: {
      name: "Elite Autos",
    },
  },
];

export default async function HomePage() {
  let vehicles = staticVehicles;

  try {
    const connectDB = (await import("@/lib/db/mongodb")).default;
    const Vehicle = (await import("@/models/Vehicle")).default;
    await connectDB();
    const dbVehicles = await Vehicle.find({ sold: false, archived: false })
      .populate("dealer")
      .sort({ postedDate: -1 })
      .limit(8);
    if (dbVehicles.length > 0) {
      vehicles = JSON.parse(JSON.stringify(dbVehicles));
    }
  } catch (error) {
    console.log("Using static data (no DB connection)", error);
  }

  const featuredVehicles = vehicles.filter((v) => v.featured);
  const latestVehicles = vehicles.slice(0, 4);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar />
      <Hero />
      <FeaturedCars
        vehicles={vehicles}
        featuredVehicles={featuredVehicles}
        latestVehicles={latestVehicles}
      />
      <HomeSections />
    </main>
  );
}
