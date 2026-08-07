"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Heart, Star, ShieldCheck, Truck, ShoppingBag, ArrowRight, Check } from "lucide-react";
import { PRODUCTS, PrescriptionPower } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import PrescriptionSelector from "@/components/PrescriptionSelector";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.frameColor);
  const [selectedSize, setSelectedSize] = useState(product.frameSize);
  const [prescription, setPrescription] = useState<PrescriptionPower | undefined>(undefined);

  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, 1, prescription, selectedColor, selectedSize);
  };

  const handleBuyNow = () => {
    addToCart(product, 1, prescription, selectedColor, selectedSize);
    router.push("/checkout");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Product Image Gallery */}
        <div className="space-y-4">
          <div className="bg-brand-gray/50 border border-gray-200 rounded-2xl overflow-hidden relative pt-[75%]">
            <img
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <button
              onClick={() => toggleWishlist(product)}
              className={`absolute top-4 right-4 p-3 rounded-full border shadow-sm transition-colors ${
                inWishlist
                  ? "bg-red-50 text-red-500 border-red-200"
                  : "bg-white text-gray-600 border-gray-200 hover:text-red-500"
              }`}
            >
              <Heart className={`w-5 h-5 ${inWishlist ? "fill-red-500" : ""}`} />
            </button>
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? "border-brand-blue" : "border-gray-200 opacity-70"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details & Specifications */}
        <div className="flex flex-col">
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-100 text-brand-blue text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs font-medium text-gray-600">{product.gender}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md text-xs font-semibold text-amber-700">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-gray-400">({product.reviewCount} Reviews)</span>
              </div>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                In Stock • Pan India Shipping
              </span>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-brand-dark">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="text-base text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                Save {product.discountPercentage}%
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="py-5 border-b border-gray-200 text-xs sm:text-sm text-gray-600 leading-relaxed">
            <p>{product.description}</p>
          </div>

          {/* Frame Specifications */}
          <div className="py-5 border-b border-gray-200 space-y-4">
            <h3 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
              Frame Details & Specs
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-brand-gray/50 p-2.5 rounded-lg border border-gray-200">
                <span className="text-gray-400 block text-[10px] uppercase font-semibold">Frame Color</span>
                <span className="font-bold text-brand-dark">{product.frameColor}</span>
              </div>
              <div className="bg-brand-gray/50 p-2.5 rounded-lg border border-gray-200">
                <span className="text-gray-400 block text-[10px] uppercase font-semibold">Frame Size</span>
                <span className="font-bold text-brand-dark">{product.frameSize}</span>
              </div>
              <div className="bg-brand-gray/50 p-2.5 rounded-lg border border-gray-200">
                <span className="text-gray-400 block text-[10px] uppercase font-semibold">Material</span>
                <span className="font-bold text-brand-dark">{product.frameMaterial}</span>
              </div>
            </div>
          </div>

          {/* Lens Prescription Inputs (for prescription products) */}
          {product.allowsPrescription && (
            <PrescriptionSelector
              category={product.category}
              onPrescriptionChange={(pres) => setPrescription(pres)}
            />
          )}

          {/* Features List */}
          <div className="py-5 space-y-2">
            <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Key Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-brand-dark hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-brand-blue hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
            >
              Buy Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-6 p-4 bg-blue-50/50 rounded-xl border border-blue-100 grid grid-cols-2 gap-4 text-xs">
            <div className="flex items-center gap-2.5 text-gray-700 font-medium">
              <Truck className="w-4 h-4 text-brand-blue shrink-0" />
              <span>Pan-India Doorstep Delivery</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
              <span>100% Prescription Accuracy</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
