import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });

import Vehicle from "../models/Vehicle";
import Dealer from "../models/Dealer";

const sampleDealers = [
  {
    name: "Auto Luxury Motors",
    description: "Premium dealership specializing in luxury vehicles.",
    address: "123 Victoria Island, Lagos",
    city: "Lagos",
    state: "Lagos",
    phone: "+2348012345678",
    email: "info@autoluxurymotors.com",
    verified: true,
    rating: 4.9,
    reviewCount: 128,
  },
  {
    name: "GreatAutos Dealer",
    description: "Trusted dealer with a wide range of vehicles.",
    address: "456 Central Area, Abuja",
    city: "Abuja",
    state: "Abuja",
    phone: "+2348023456789",
    email: "sales@greatautosdealer.com",
    verified: true,
    rating: 5.0,
    reviewCount: 89,
  },
  {
    name: "Prime Cars",
    description: "Quality pre-owned vehicles you can trust.",
    address: "789 Trans Amadi, Port Harcourt",
    city: "Port Harcourt",
    state: "Rivers",
    phone: "+2348034567890",
    email: "contact@primecars.com",
    verified: true,
    rating: 4.8,
    reviewCount: 65,
  },
  {
    name: "Mercedes Hub",
    description: "Exclusive Mercedes-Benz dealership.",
    address: "321 Ikeja GRA, Lagos",
    city: "Lagos",
    state: "Lagos",
    phone: "+2348045678901",
    email: "support@mercedeshub.com",
    verified: true,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    name: "Elite Autos",
    description: "Luxury vehicles for the discerning buyer.",
    address: "654 Maitama, Abuja",
    city: "Abuja",
    state: "Abuja",
    phone: "+2348056789012",
    email: "sales@eliteautos.com",
    verified: true,
    rating: 5.0,
    reviewCount: 47,
  },
];

const sampleVehicles = [
  {
    title: "2023 Lexus RX350 F Sport",
    make: "Lexus",
    model: "RX 350",
    year: 2023,
    mileage: "18,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    driveType: "AWD",
    engine: "3.5L V6",
    horsepower: 295,
    exteriorColor: "Black",
    interiorColor: "Red Leather",
    condition: "Certified",
    price: 58500000,
    financePrice: 865000,
    description: "Excellent condition, fully loaded with all premium features.",
    features: [
      "Sunroof",
      "Leather Seats",
      "Navigation",
      "Bluetooth",
      "Backup Camera",
      "Heated Seats",
      "Cooled Seats",
    ],
    location: "Lagos",
    phone: "+2348012345678",
    email: "info@autoluxurymotors.com",
    gallery: ["/images/lexus.jpg", "/images/lexus-rx-350.svg"],
    featured: true,
    verified: true,
    hotDeal: false,
    newArrival: true,
    views: 328,
    rating: 4.9,
  },
  {
    title: "2022 Toyota Prado VX",
    make: "Toyota",
    model: "Prado",
    year: 2022,
    mileage: "13,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    driveType: "4WD",
    engine: "2.8L Turbo Diesel",
    horsepower: 204,
    exteriorColor: "White",
    interiorColor: "Beige",
    condition: "Excellent",
    price: 84900000,
    financePrice: 1120000,
    description: "Low mileage, perfect for family adventures.",
    features: [
      "Sunroof",
      "Leather Seats",
      "Navigation",
      "4WD",
      "Backup Camera",
      "Heated Seats",
    ],
    location: "Abuja",
    phone: "+2348023456789",
    email: "sales@greatautosdealer.com",
    gallery: ["/images/prado.jpg", "/images/toyota-prado.svg"],
    featured: true,
    verified: true,
    hotDeal: true,
    newArrival: true,
    views: 520,
    rating: 5.0,
  },
  {
    title: "2023 Toyota Venza",
    make: "Toyota",
    model: "Venza",
    year: 2023,
    mileage: "5,000 km",
    fuel: "Hybrid",
    transmission: "Automatic",
    driveType: "AWD",
    engine: "2.5L Hybrid",
    horsepower: 219,
    exteriorColor: "Silver",
    interiorColor: "Black",
    condition: "Certified",
    price: 45000000,
    financePrice: 680000,
    description: "Brand new condition, hybrid efficiency.",
    features: [
      "Sunroof",
      "Leather Seats",
      "Navigation",
      "Hybrid",
      "Backup Camera",
      "Wireless Charging",
    ],
    location: "Lagos",
    phone: "+2348012345678",
    email: "info@autoluxurymotors.com",
    gallery: ["/images/venza.jpg", "/images/toyota-venza.svg"],
    featured: true,
    verified: true,
    hotDeal: false,
    newArrival: true,
    views: 245,
    rating: 4.8,
  },
  {
    title: "2021 BMW X5 M Sport",
    make: "BMW",
    model: "X5",
    year: 2021,
    mileage: "26,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    driveType: "AWD",
    engine: "3.0L Turbo",
    horsepower: 335,
    exteriorColor: "Blue",
    interiorColor: "Black",
    condition: "Excellent",
    price: 49900000,
    financePrice: 740000,
    description: "Sport package, great performance.",
    features: [
      "Sunroof",
      "M Sport Package",
      "Navigation",
      "AWD",
      "Backup Camera",
      "Heated Seats",
    ],
    location: "Port Harcourt",
    phone: "+2348034567890",
    email: "contact@primecars.com",
    gallery: ["/images/lexus.jpg"],
    featured: false,
    verified: true,
    hotDeal: false,
    newArrival: false,
    views: 192,
    rating: 4.8,
  },
  {
    title: "2022 Toyota Avalon",
    make: "Toyota",
    model: "Avalon",
    year: 2022,
    mileage: "12,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    driveType: "FWD",
    engine: "3.5L V6",
    horsepower: 301,
    exteriorColor: "Gray",
    interiorColor: "Brown",
    condition: "Certified",
    price: 38500000,
    financePrice: 580000,
    description: "Luxury sedan, comfortable ride.",
    features: [
      "Sunroof",
      "Leather Seats",
      "Navigation",
      "Backup Camera",
      "Heated Seats",
    ],
    location: "Lagos",
    phone: "+2348012345678",
    email: "info@autoluxurymotors.com",
    gallery: ["/images/avalon.jpg", "/images/toyota-avalon.svg"],
    featured: false,
    verified: true,
    hotDeal: true,
    newArrival: false,
    views: 178,
    rating: 4.7,
  },
  {
    title: "2023 Range Rover Sport",
    make: "Range Rover",
    model: "Sport",
    year: 2023,
    mileage: "9,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    driveType: "4WD",
    engine: "3.0L Turbo",
    horsepower: 395,
    exteriorColor: "Black",
    interiorColor: "Tan",
    condition: "Certified",
    price: 136000000,
    financePrice: 2100000,
    description: "Top of the line luxury SUV.",
    features: [
      "Sunroof",
      "Premium Leather",
      "Navigation",
      "4WD",
      "Backup Camera",
      "Heated & Cooled Seats",
    ],
    location: "Abuja",
    phone: "+2348056789012",
    email: "sales@eliteautos.com",
    gallery: ["/images/lexus-gs.jpg"],
    featured: true,
    verified: true,
    hotDeal: false,
    newArrival: true,
    views: 610,
    rating: 5.0,
  },
];

async function seed() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("Please add your MONGODB_URI to .env.local");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    await Dealer.deleteMany({});
    await Vehicle.deleteMany({});
    console.log("Cleared existing data");

    const dealers = await Dealer.create(sampleDealers);
    console.log("Created dealers:", dealers.length);

    const vehiclesWithDealers = sampleVehicles.map((vehicle, index) => ({
      ...vehicle,
      dealer: dealers[index % dealers.length]._id,
    }));

    const vehicles = await Vehicle.create(vehiclesWithDealers);
    console.log("Created vehicles:", vehicles.length);

    for (const vehicle of vehicles) {
      await Dealer.findByIdAndUpdate(vehicle.dealer, {
        $push: { vehicles: vehicle._id },
      });
    }

    console.log("Seed completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seed();
