import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Vehicle from "@/models/Vehicle";

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);

    const query: any = { sold: false, archived: false };

    if (searchParams.get("make")) query.make = searchParams.get("make");
    if (searchParams.get("model")) query.model = searchParams.get("model");
    if (searchParams.get("year")) query.year = searchParams.get("year");
    if (searchParams.get("condition")) query.condition = searchParams.get("condition");
    if (searchParams.get("fuel")) query.fuel = searchParams.get("fuel");
    if (searchParams.get("transmission")) query.transmission = searchParams.get("transmission");
    if (searchParams.get("location")) query.location = searchParams.get("location");

    if (searchParams.get("featured")) query.featured = searchParams.get("featured") === "true";

    const vehicles = await Vehicle.find(query)
      .populate("dealer")
      .sort({ postedDate: -1 })
      .limit(parseInt(searchParams.get("limit") || "50"));

    return NextResponse.json({ success: true, data: vehicles });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to fetch vehicles" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const vehicle = await Vehicle.create(body);
    return NextResponse.json({ success: true, data: vehicle }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to create vehicle" }, { status: 500 });
  }
}
