"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Glasses, 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  Star,
  Award,
  Eye
} from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured);
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);

  const categories = [
    {
      title: "Zero Power Glasses",
      description: "Blue light protection for digital screen users",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600",
      link: "/shop?category=Zero+Power+Glasses",
    },
    {
      title: "Single Vision",
      description: "High-definition prescription lenses for near or distance",
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=600",
      link: "/shop?category=Single+Vision",
    },
    {
      title: "Bifocal",
      description: "Dual-vision clarity for seamless reading and distance",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600",
      link: "/shop?category=Bifocal",
    },
    {
      title: "Progressive",
      description: "Advanced no-line multi-focal optical transition",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=600",
      link: "/shop?category=Progressive",
    },
    {
      title: "Sunglasses",
      description: "100% UV400 protection with premium polarized lenses",
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=600",
      link: "/shop?category=Sunglasses",
    },
  ];

  const reviews = [
    {
      name: "Rohan Sharma",
      city: "Mumbai",
      rating: 5,
      comment: "The optical clarity on my progressive lenses is exceptional. Order delivered to Mumbai in just 3 days!",
    },
    {
      name: "Priya Nair",
      city: "Bengaluru",
      rating: 5,
      comment: "I bought the Zero Power Blue Cut glasses for work. Eye fatigue is completely gone. Superb quality frame.",
    },
    {
      name: "Ananya Mehta",
      city: "Delhi",
      rating: 5,
      comment: "Entering my prescription was seamless. The fit of the titanium frame is lightweight and perfectly balanced.",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-brand-dark to-slate-900 text-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-brand-blue/30 border border-brand-blue/50 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-blue-400" />
                Premium Optical Excellence
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Precision in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-200">
                  Every Lens.
                </span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Discover engineered perfection with custom optical lenses, Italian acetate frames, and lightweight titanium designs delivered across India.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/shop"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-900/30"
                >
                  Shop Eyewear
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/shop?category=Single+Vision"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all backdrop-blur-sm"
                >
                  Configure Lenses
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=1000"
                  alt="VisionX Premium Eyewear"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Featured Craftsmanship</p>
                    <p className="text-lg font-bold">Italian Handcrafted Acetate Collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">Explore Our Optical Range</h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">Tailored optical engineering for every visual requirement</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.link}
              className="group relative rounded-xl border border-gray-200 overflow-hidden bg-white hover:border-brand-blue hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="h-40 bg-brand-gray overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-brand-dark text-sm group-hover:text-brand-blue transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">{cat.description}</p>
                <div className="mt-3 pt-2 text-xs font-semibold text-brand-blue flex items-center gap-1">
                  Browse <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Handpicked Collection</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-1">Featured Frames</h2>
          </div>
          <Link href="/shop" className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why Choose VisionX Eyewear */}
      <section className="bg-brand-gray/50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">Why Choose VisionX Eyewear</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Uncompromising quality standards engineered for optical clarity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center space-y-3">
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mx-auto">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-dark text-base">Micron-Precision Optics</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Automated optical surfacing ensures your exact cylinder, sphere, and axis parameters are accurate down to the fraction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center space-y-3">
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-dark text-base">Aerospace Titanium & Acetate</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Hypoallergenic, ultra-lightweight materials designed for long hours of comfortable wear without ear fatigue.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center space-y-3">
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-dark text-base">7-Layer Anti-Glare Coating</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Hydrophobic, anti-reflective, and scratch-resistant multi-coatings included standard on prescription lenses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center space-y-3">
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mx-auto">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-dark text-base">Express Pan-India Shipping</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Securely packaged in protective hard cases and dispatched rapidly across all major Indian pincodes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Customer Favorites</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-1">Best Selling Glasses</h2>
          </div>
          <Link href="/shop" className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1">
            Shop All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">What Our Customers Say</h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">Trusted by over 50,000 satisfied wearers across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400 gap-1">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed italic">"{rev.comment}"</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-dark">{rev.name}</span>
                <span className="text-gray-400">{rev.city}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pan India Express Delivery Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
              Pan India Delivery
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Delivering Precision Eyewear To Your Doorstep</h3>
            <p className="text-xs sm:text-sm text-gray-300">
              We ship to over 19,000+ pincodes across India with insured packaging and full tracking transparency.
            </p>
          </div>
          <Link
            href="/shop"
            className="shrink-0 bg-brand-blue hover:bg-blue-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-colors shadow-lg z-10"
          >
            Order Your Pair Today
          </Link>
        </div>
      </section>
    </div>
  );
}
