import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  phone?: string;
  role: "user" | "admin" | "dealer";
  favorites: mongoose.Types.ObjectId[];
  compare: mongoose.Types.ObjectId[];
  dealerProfile?: mongoose.Types.ObjectId;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: String,
    phone: String,
    role: {
      type: String,
      enum: ["user", "admin", "dealer"],
      default: "user",
    },
    favorites: [{ type: Schema.Types.ObjectId, ref: "Vehicle" }],
    compare: [{ type: Schema.Types.ObjectId, ref: "Vehicle" }],
    dealerProfile: { type: Schema.Types.ObjectId, ref: "Dealer" },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
