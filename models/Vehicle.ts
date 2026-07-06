import mongoose, { Document, Schema } from "mongoose";

export interface IVehicle extends Document {
  title: string;
  make: string;
  model: string;
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
  driveType?: string;
  engine?: string;
  horsepower?: number;
  exteriorColor?: string;
  interiorColor?: string;
  vin?: string;
  condition: string;
  price: number;
  financePrice?: number;
  description: string;
  features: string[];
  specifications?: Record<string, string>;
  dealer: mongoose.Types.ObjectId;
  location: string;
  phone: string;
  whatsapp?: string;
  email: string;
  videoUrl?: string;
  gallery: string[];
  images360?: string[];
  featured: boolean;
  verified: boolean;
  hotDeal: boolean;
  newArrival: boolean;
  sold: boolean;
  archived: boolean;
  views: number;
  rating: number;
  postedDate: Date;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

const VehicleSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    mileage: { type: String, required: true },
    fuel: { type: String, required: true },
    transmission: { type: String, required: true },
    driveType: String,
    engine: String,
    horsepower: Number,
    exteriorColor: String,
    interiorColor: String,
    vin: String,
    condition: { type: String, required: true },
    price: { type: Number, required: true },
    financePrice: Number,
    description: { type: String, required: true },
    features: [String],
    specifications: Schema.Types.Mixed,
    dealer: { type: Schema.Types.ObjectId, ref: "Dealer", required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    whatsapp: String,
    email: { type: String, required: true },
    videoUrl: String,
    gallery: [String],
    images360: [String],
    featured: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
    hotDeal: { type: Boolean, default: false },
    newArrival: { type: Boolean, default: false },
    sold: { type: Boolean, default: false },
    archived: { type: Boolean, default: false },
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 4.5 },
    postedDate: { type: Date, default: Date.now },
    seo: {
      title: String,
      description: String,
      keywords: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Vehicle ||
  mongoose.model<IVehicle>("Vehicle", VehicleSchema);
