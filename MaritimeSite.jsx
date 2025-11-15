import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function MaritimeSite() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-800">
      {/* HEADER */}
      <header className="w-full p-6 flex items-center justify-between bg-white shadow-md fixed top-0 z-50">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Seafrigo Logo" className="h-12 w-auto" />
          <span className="text-2xl font-bold text-[#0b7b6a] tracking-wider">SEAFRIGO</span>
        </div>
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <a href="#services" className="hover:text-[#0b7b6a]">Services</a>
          <a href="#booking" className="hover:text-[#0b7b6a]">Booking</a>
          <a href="#contact" className="hover:text-[#0b7b6a]">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="h-screen bg-[url('https://images.unsplash.com/photo-1505852679233-d9fd70aff56d')] bg-cover bg-center flex items-center justify-center mt-20">
        <div className="bg-black/50 p-10 rounded-2xl text-center text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Professional Maritime & Shipping Solutions</h1>
          <p className="text-lg mb-6">Trusted global logistics, reliable sea freight, and seamless port operations.</p>
          <Button className="px-6 py-3 text-lg rounded-2xl bg-[#0b7b6a]">Get a Quote</Button>
        </div>
      </section>
    </div>
  );
}