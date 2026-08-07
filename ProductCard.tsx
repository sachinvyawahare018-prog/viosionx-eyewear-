"use client";

import React from "react";
import Link from "next/link";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Discount Badge & Wishlist Button */}
      <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
        <span className="bg-brand-blue text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {product.discountPercentage}% OFF
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className={`p-2 rounded-full border transition-colors ${
            inWishlist
              ? "bg-red-50 text-red-500 border-red-200"
              : "bg-white/80 backdrop-blur-sm text-gray-600 border-gray-200 hover:text-red-500"
          }`}
          aria-label="Add to wishlist"
        >
          <Heart className={`w-4 h-4 ${inWishlist ? "fill-red-500" : ""}`} />
        </button>
      </div>

      {/* Product Image */}
      <Link href={`/product/${product.id}`} className="block relative pt-[75%] bg-brand-gray overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
          <span className="font-semibold text-brand-blue uppercase tracking-wider text-[11px]">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-medium text-gray-700">{product.rating}</span>
            <span className="text-gray-400">({product.reviewCount})</span>
          </div>
        </div>

        <Link href={`/product/${product.id}`} className="group-hover:text-brand-blue transition-colors">
          <h3 className="font-semibold text-brand-dark text-base line-clamp-1 mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Frame Attributes */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
          <span className="bg-gray-100 px-2 py-0.5 rounded">{product.frameShape}</span>
          <span>•</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded">{product.frameMaterial}</span>
          <span>•</span>
          <span>{product.gender}</span>
        </div>

        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-brand-dark">
              ₹{product.price.toLocaleString("en-IN")}
            </div>
            <div className="text-xs text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-1.5 bg-brand-dark text-white hover:bg-brand-blue px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
