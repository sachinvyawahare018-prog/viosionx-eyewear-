"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag, Heart, Search, Menu, X, Glasses } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, wishlist } = useCart();
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Banner - Pan India Delivery */}
      <div className="bg-brand-dark text-white text-xs py-2 px-4 text-center font-medium">
        ✨ Free Shipping Across Pan India | 100% Precision Guaranteed Optical Lenses
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Tagline */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-brand-blue text-white rounded-lg group-hover:bg-blue-900 transition-colors">
              <Glasses className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-brand-dark group-hover:text-brand-blue transition-colors">
                Vision<span className="text-brand-blue">X</span> Eyewear
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold -mt-1">
                Precision in Every Lens
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-medium text-sm text-gray-700">
            <Link href="/" className="hover:text-brand-blue transition-colors">
              Home
            </Link>
            <Link href="/shop" className="hover:text-brand-blue transition-colors">
              Shop All
            </Link>
            <Link href="/shop?category=Single+Vision" className="hover:text-brand-blue transition-colors">
              Prescription Lenses
            </Link>
            <Link href="/about" className="hover:text-brand-blue transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-brand-blue transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search & Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search frames, lenses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-52 pl-9 pr-4 py-1.5 text-xs bg-brand-gray border border-gray-300 rounded-full focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </form>

            <Link href="/wishlist" className="relative p-2 text-gray-700 hover:text-brand-blue transition-colors" title="Wishlist">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-brand-blue transition-colors" title="Cart">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-brand-blue text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center space-x-4">
            <Link href="/cart" className="relative p-2 text-gray-700">
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-brand-blue text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-brand-blue focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pt-4 pb-6 space-y-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search frames, lenses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-brand-gray border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          </form>

          <nav className="flex flex-col space-y-3 font-medium text-gray-800">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue">
              Home
            </Link>
            <Link href="/shop" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue">
              Shop All Eyewear
            </Link>
            <Link href="/shop?category=Single+Vision" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue">
              Prescription Lenses
            </Link>
            <Link href="/wishlist" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue flex justify-between">
              Wishlist <span>({wishlist.length})</span>
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
