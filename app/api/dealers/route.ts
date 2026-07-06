import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Dealer from "@/models/Dealer";

export async function GET(request: Request) {
  try {
    await connectDB();
    const dealers = await Dealer.find().populate("vehicles");
    return NextResponse.json({ success: true, data: dealers });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to fetch dealers" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const dealer = await Dealer.create(body);
    return NextResponse.json({ success: true, data: dealer }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to create dealer" }, { status: 500 });
  }
}
