import mongoose, { Document, Schema } from "mongoose";

export interface INews extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  categories: string[];
  tags: string[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  views: number;
  comments: mongoose.Types.ObjectId[];
}

const NewsSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    featuredImage: { type: String, required: true },
    author: { type: String, required: true },
    categories: [String],
    tags: [String],
    seo: {
      title: String,
      description: String,
      keywords: [String],
    },
    views: { type: Number, default: 0 },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

export default mongoose.models.News || mongoose.model<INews>("News", NewsSchema);
