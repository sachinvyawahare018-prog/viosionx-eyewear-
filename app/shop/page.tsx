"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Filter, SlidersHorizontal, RotateCcw } from "lucide-react";
import { PRODUCTS, LensCategory, Gender, FrameShape, Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as LensCategory | null;
  const initialSearch = searchParams.get("search") || "";

  // State Filters
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || "All");
  const [selectedGender, setSelectedGender] = useState<string>("All");
  const [selectedShape, setSelectedShape] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(7000);
  const [sortBy, setSortBy] = useState<string>("popular");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = ["All", "Zero Power Glasses", "Single Vision", "Bifocal", "Progressive", "Sunglasses"];
  const genders = ["All", "Men", "Women", "Unisex"];
  const shapes = ["All", "Rectangle", "Square", "Round", "Aviator", "Wayfarer", "Cat Eye"];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Category
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;

      // Gender
      const matchesGender = selectedGender === "All" || product.gender === selectedGender || product.gender === "Unisex";

      // Shape
      const matchesShape = selectedShape === "All" || product.frameShape === selectedShape;

      // Price
      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesGender && matchesShape && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.reviewCount - a.reviewCount; // Popularity default
    });
  }, [searchQuery, selectedCategory, selectedGender, selectedShape, maxPrice, sortBy]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedGender("All");
    setSelectedShape("All");
    setMaxPrice(7000);
    setSortBy("popular");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">Optical Collection</h1>
          <p className="text-xs text-gray-500 mt-1">Explore precision-engineered optical frames and sunglasses</p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:w-72">
            <input
              type="text"
              placeholder="Search by name, frame shape..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-brand-gray border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          </div>

          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="md:hidden flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-xs font-semibold"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters - Desktop & Mobile */}
        <div
          className={`lg:block ${
            isMobileFilterOpen ? "block fixed inset-0 z-50 bg-white p-6 overflow-y-auto" : "hidden"
          }`}
        >
          {isMobileFilterOpen && (
            <div className="flex justify-between items-center mb-6 lg:hidden">
              <h2 className="font-bold text-lg">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="text-gray-500 font-bold text-sm"
              >
                Close
              </button>
            </div>
          )}

          <div className="space-y-6 bg-white p-5 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <span className="font-bold text-sm text-brand-dark flex items-center gap-2">
                <Filter className="w-4 h-4 text-brand-blue" />
                Filter Products
              </span>
              <button
                onClick={resetFilters}
                className="text-xs text-brand-blue hover:underline flex items-center gap-1 font-semibold"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {/* Category Filter */}
            <div>
              <label className="font-semibold text-xs text-brand-dark uppercase tracking-wider block mb-2.5">
                Category
              </label>
              <div className="space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                      selectedCategory === cat
                        ? "bg-brand-blue text-white font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-semibold text-xs text-brand-dark uppercase tracking-wider">
                  Max Price
                </label>
                <span className="text-xs font-bold text-brand-blue">₹{maxPrice.toLocaleString("en-IN")}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="7000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-brand-blue"
              />
            </div>

            {/* Gender Filter */}
            <div>
              <label className="font-semibold text-xs text-brand-dark uppercase tracking-wider block mb-2.5">
                Gender
              </label>
              <div className="grid grid-cols-2 gap-2">
                {genders.map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGender(g)}
                    className={`px-3 py-1.5 border rounded-lg text-xs font-medium transition-colors ${
                      selectedGender === g
                        ? "border-brand-blue bg-blue-50 text-brand-blue font-bold"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Shape Filter */}
            <div>
              <label className="font-semibold text-xs text-brand-dark uppercase tracking-wider block mb-2.5">
                Frame Shape
              </label>
              <div className="space-y-1.5">
                {shapes.map((shape) => (
                  <button
                    key={shape}
                    onClick={() => setSelectedShape(shape)}
                    className={`w-full text-left px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                      selectedShape === shape
                        ? "bg-brand-blue text-white font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {shape}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid & Sorting */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex justify-between items-center bg-brand-gray/50 px-4 py-3 rounded-xl border border-gray-200 text-xs text-gray-600">
            <span>
              Showing <strong className="text-brand-dark">{filteredProducts.length}</strong> products
            </span>

            <div className="flex items-center gap-2">
              <span className="font-semibold">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-300 rounded-md py-1 px-2 text-xs font-medium focus:outline-none focus:border-brand-blue"
              >
                <option value="popular">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200 p-8">
              <p className="text-base font-bold text-brand-dark mb-1">No optical frames found</p>
              <p className="text-xs text-gray-500 mb-4">Try clearing some of your active filter criteria.</p>
              <button
                onClick={resetFilters}
                className="bg-brand-blue text-white text-xs font-semibold px-4 py-2 rounded-lg"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs">Loading Shop Catalog...</div>}>
      <ShopContent />
    </Suspense>
  );
}
