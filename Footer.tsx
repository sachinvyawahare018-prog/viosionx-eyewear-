"use client";

import React from "react";
import Link from "next/link";
import { Glasses, Phone, Mail, MapPin, ShieldCheck, Truck, CreditCard, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300 pt-12 pb-8 border-t border-gray-800">
      {/* Value Proposition Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-gray-800 text-brand-light rounded-lg">
              <Truck className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Pan India Express Delivery</h4>
              <p className="text-xs text-gray-400 mt-0.5">Direct to your doorstep in 3-5 business days</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-gray-800 text-brand-light rounded-lg">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">100% Optical Precision</h4>
              <p className="text-xs text-gray-400 mt-0.5">Rigorous multi-point prescription quality check</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-gray-800 text-brand-light rounded-lg">
              <CreditCard className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">100% Secure Payments</h4>
              <p className="text-xs text-gray-400 mt-0.5">UPI, NetBanking, Credit & Debit Cards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-brand-blue text-white rounded">
                <Glasses className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Vision<span className="text-blue-400">X</span> Eyewear
              </span>
            </div>
            <p className="text-xs text-blue-400 font-semibold tracking-wide uppercase">
              Precision in Every Lens
            </p>
            <p className="text-xs leading-relaxed text-gray-400">
              VisionX Eyewear is India’s premium optical destination delivering high-precision prescription eyewear, blue-light blocking glasses, and luxury sunglasses.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Optical Products */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">Categories</h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/shop?category=Zero+Power+Glasses" className="hover:text-white transition-colors">Zero Power Glasses</Link>
              </li>
              <li>
                <Link href="/shop?category=Single+Vision" className="hover:text-white transition-colors">Single Vision Glasses</Link>
              </li>
              <li>
                <Link href="/shop?category=Bifocal" className="hover:text-white transition-colors">Bifocal Eyeglasses</Link>
              </li>
              <li>
                <Link href="/shop?category=Progressive" className="hover:text-white transition-colors">Progressive Lenses</Link>
              </li>
              <li>
                <Link href="/shop?category=Sunglasses" className="hover:text-white transition-colors">Polarized Sunglasses</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">Explore All Products</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About VisionX</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">Shopping Cart</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                <span>VisionX Optical Towers, Outer Ring Road, Bengaluru, Karnataka 560103</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <span>+91 (080) 4900 8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <span>support@visionxeyewear.in</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-800 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} VisionX Eyewear. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Pan India Shipping Policy</a>
        </div>
      </div>
    </footer>
  );
}
