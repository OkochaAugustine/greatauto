
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Upload,
  X,
  Plus,
  Save,
  Send,
  Sparkles,
  Camera,
  Video,
  Maximize2,
  GripVertical
} from "lucide-react";

export default function NewVehiclePage() {
  const router = useRouter();
  const [isPublishing, setIsPublishing] = useState(false);
  const [images, setImages] = useState([
    { id: 1, src: "/images/lexus.jpg", name: "lexus-front.jpg" },
    { id: 2, src: "/images/avalon.jpg", name: "avalon-side.jpg" },
  ]);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-xl font-black text-slate-900">GreatAutos</h2>
          <p className="text-sm text-slate-500 mt-1">Admin Panel</p>
        </div>
        
        <nav className="flex-1 space-y-1 p-4">
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-24">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/admin"
                className="rounded-full bg-slate-100 p-2 text-slate-700 hover:bg-slate-200 lg:hidden"
              >
                <ArrowLeft size={20} />
              </Link>
              <div>
                <h1 className="text-3xl font-black text-slate-900">Add New Vehicle</h1>
                <p className="text-slate-600 mt-2">Fill in the details to publish a new vehicle listing</p>
              </div>
            </div>
          </div>

          <form className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* Left Column - Main Fields */}
            <div className="space-y-6">
              {/* Gallery Section */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-6">Vehicle Gallery</h3>
                
                <div className="grid gap-4 md:grid-cols-3 mb-6">
                  {images.map((image, index) => (
                    <div
                      key={image.id}
                      className="group relative aspect-square rounded-xl overflow-hidden border border-slate-200"
                    >
                      <img
                        src={image.src}
                        alt={image.name}
                        className="h-full w-full object-cover"
                      />
                      <button
                        onClick={() => setImages(images.filter((_, i) => i !== index))}
                        className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5 text-white opacity-0 group-hover:opacity-100 transition"
                      >
                        <X size={16} />
                      </button>
                      <div className="absolute left-2 top-2 rounded-full bg-white/90 p-1 text-slate-900">
                        <GripVertical size={16} />
                      </div>
                    </div>
                  ))}
                  
                  {/* Upload Button */}
                  <label className="flex aspect-square cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 hover:border-emerald-500 hover:bg-emerald-50 transition">
                    <div className="rounded-full bg-slate-100 p-3">
                      <Upload size={24} className="text-slate-600" />
                    </div>
                    <span className="text-sm font-semibold text-slate-600">Add Images</span>
                    <input type="file" accept="image/*" multiple className="hidden" />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 hover:border-emerald-500 hover:bg-emerald-50 cursor-pointer transition">
                    <Video size={18} />
                    Upload Video
                    <input type="file" accept="video/*" className="hidden" />
                  </label>
                  <label className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 hover:border-emerald-500 hover:bg-emerald-50 cursor-pointer transition">
                    <Maximize2 size={18} />
                    360° Images
                    <input type="file" accept="image/*" multiple className="hidden" />
                  </label>
                </div>
              </div>

              {/* Basic Info */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-6">Basic Information</h3>
                
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Title</label>
                    <input
                      type="text"
                      placeholder="e.g. 2023 Lexus RX 350 F Sport"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Price (₦)</label>
                    <input
                      type="number"
                      placeholder="58500000"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Make</label>
                    <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500">
                      <option value="">Select Make</option>
                      <option value="lexus">Lexus</option>
                      <option value="toyota">Toyota</option>
                      <option value="bmw">BMW</option>
                      <option value="mercedes">Mercedes-Benz</option>
                      <option value="range-rover">Range Rover</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Model</label>
                    <input
                      type="text"
                      placeholder="RX 350"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Year</label>
                    <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500">
                      <option value="">Select Year</option>
                      {[2024, 2023, 2022, 2021, 2020].map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Mileage (km)</label>
                    <input
                      type="text"
                      placeholder="18000"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                  <textarea
                    rows={5}
                    placeholder="Write a detailed description of the vehicle..."
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Specifications & Features */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-6">Specifications & Features</h3>
                
                <div className="grid gap-5 md:grid-cols-3">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Fuel Type</label>
                    <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500">
                      <option value="">Select Fuel</option>
                      <option value="petrol">Petrol</option>
                      <option value="diesel">Diesel</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="electric">Electric</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Transmission</label>
                    <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500">
                      <option value="">Select Transmission</option>
                      <option value="automatic">Automatic</option>
                      <option value="manual">Manual</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Condition</label>
                    <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500">
                      <option value="">Select Condition</option>
                      <option value="new">New</option>
                      <option value="certified">Certified Pre-Owned</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Settings & Publish */}
            <div className="space-y-6">
              {/* Dealer & Location */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-6">Dealer & Location</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Dealer</label>
                    <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500">
                      <option value="">Select Dealer</option>
                      <option value="auto-luxury">Auto Luxury Motors</option>
                      <option value="great-autos">GreatAutos Dealer</option>
                      <option value="prime-cars">Prime Cars</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
                    <input
                      type="text"
                      placeholder="Lagos, Nigeria"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-6">Listing Badges</h3>
                
                <div className="space-y-3">
                  {["Featured", "Verified", "Hot Deal", "New Arrival"].map((badge) => (
                    <label key={badge} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="text-sm font-semibold text-slate-700">{badge}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsPublishing(true);
                      setTimeout(() => {
                        setIsPublishing(false);
                        router.push("/admin");
                      }, 1500);
                    }}
                    disabled={isPublishing}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 font-semibold text-white hover:bg-emerald-700 transition disabled:opacity-70"
                  >
                    {isPublishing ? (
                      <>
                        <span className="animate-pulse">Publishing...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Publish Vehicle
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-700 transition"
                  >
                    <Save size={18} />
                    Save Draft
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
