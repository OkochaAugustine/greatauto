import mongoose, { Document, Schema } from "mongoose";

export interface IDealer extends Document {
  name: string;
  logo?: string;
  description: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  whatsapp?: string;
  email: string;
  website?: string;
  verified: boolean;
  rating: number;
  reviewCount: number;
  vehicles: mongoose.Types.ObjectId[];
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  businessHours?: Record<string, string>;
}

const DealerSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    logo: String,
    description: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    phone: { type: String, required: true },
    whatsapp: String,
    email: { type: String, required: true },
    website: String,
    verified: { type: Boolean, default: false },
    rating: { type: Number, default: 4.5 },
    reviewCount: { type: Number, default: 0 },
    vehicles: [{ type: Schema.Types.ObjectId, ref: "Vehicle" }],
    socialMedia: {
      facebook: String,
      instagram: String,
      twitter: String,
    },
    businessHours: Schema.Types.Mixed,
  },
  { timestamps: true }
);

export default mongoose.models.Dealer ||
  mongoose.model<IDealer>("Dealer", DealerSchema);
