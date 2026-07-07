import Hero from "@/components/home/Hero";
import FeaturedCars from "@/components/home/FeaturedCars";
import HomeSections from "@/components/home/HomeSections";
import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar />
      <Hero />
      <FeaturedCars />
      <HomeSections />
    </main>
  );
}