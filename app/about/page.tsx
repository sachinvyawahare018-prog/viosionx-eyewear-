"use client";

import React from "react";
import Link from "next/link";
import { Glasses, ShieldCheck, Award, Eye, Target, Sparkles, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="bg-brand-dark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-blue/30 border border-brand-blue/50 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
            <Glasses className="w-4 h-4 text-blue-400" />
            Our Brand Story
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Crafting Optical Precision For All Of India
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            At VisionX Eyewear, we combine state-of-the-art optical surfacing with Italian acetate and aerospace-grade titanium frame engineering to deliver absolute clarity.
          </p>
        </div>
      </section>

      {/* Brand Mission & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">
              Precision in Every Lens
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Reinventing Eyewear Standards Across Nation
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Founded on the principle that prescription glasses should never compromise between visual acuity and refined aesthetics, VisionX Eyewear serves customers across India with micron-accurate optical customization.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Every single pair undergoes a rigorous 7-point lens quality inspection before being sealed in protective hard cases and dispatched directly to your address.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-bold text-brand-dark">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-blue" />
                <span>100% Optical Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-blue" />
                <span>Premium Grade Frame Alloys</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-brand-gray">
            <img
              src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800"
              alt="VisionX Eyewear Craftsmanship"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pillars of VisionX */}
      <section className="bg-brand-gray/50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">Our Core Pillars</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Driven by uncompromising engineering and customer satisfaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-dark text-base">Unmatched Accuracy</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Automated optical surfacing ensures your SPH, CYL, and AXIS specifications are manufactured precisely to specification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-dark text-base">Advanced Coatings</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Every lens incorporates standard anti-scratch, anti-reflective, and hydrophobic protection for long-lasting visual clarity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-dark text-base">Ergonomic Comfort</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Sculpted nose pads and lightweight spring hinges ensure comfortable, strain-free wearing throughout your workday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-brand-dark text-white rounded-2xl p-8 sm:p-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Experience VisionX Clarity?</h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Browse our full range of Zero Power, Single Vision, Bifocal, Progressive, and Polarized Sunglasses.
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-bold text-xs px-8 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              Shop Eyewear Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
