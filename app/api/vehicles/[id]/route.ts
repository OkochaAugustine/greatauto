import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Vehicle from "@/models/Vehicle";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string; }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const vehicle = await Vehicle.findById(id).populate("dealer");

    if (!vehicle) {
      return NextResponse.json({ success: false, error: "Vehicle not found" }, { status: 404 });
    }

    vehicle.views += 1;
    await vehicle.save();

    return NextResponse.json({ success: true, data: vehicle });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to fetch vehicle" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string; }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const body = await request.json();
    const vehicle = await Vehicle.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!vehicle) {
      return NextResponse.json({ success: false, error: "Vehicle not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: vehicle });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to update vehicle" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string; }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const vehicle = await Vehicle.findByIdAndDelete(id);

    if (!vehicle) {
      return NextResponse.json({ success: false, error: "Vehicle not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to delete vehicle" }, { status: 500 });
  }
}
