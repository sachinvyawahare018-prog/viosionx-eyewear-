"use client";

import React from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-bold text-brand-dark">Your Cart is Currently Empty</h1>
        <p className="text-xs text-gray-500 max-w-sm mx-auto">
          Explore our collection of optical frames, prescription lenses, and designer sunglasses to find your perfect fit.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors shadow-md"
        >
          Explore Eyewear Range
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-2">Shopping Cart</h1>
      <p className="text-xs text-gray-500 mb-8">
        Review your selected optical frames and custom prescription lens configurations.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
            >
              <div className="flex gap-4 items-center w-full sm:w-auto">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover bg-brand-gray rounded-lg shrink-0"
                />
                <div className="space-y-1 flex-grow">
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">
                    {item.product.category}
                  </span>
                  <h3 className="font-bold text-brand-dark text-sm sm:text-base">
                    {item.product.name}
                  </h3>
                  <div className="text-xs text-gray-500 space-x-2">
                    <span>Color: {item.selectedColor}</span>
                    <span>•</span>
                    <span>Size: {item.selectedSize}</span>
                  </div>

                  {/* Prescription Power Summary if configured */}
                  {item.prescription && (
                    <div className="mt-2 text-[11px] bg-blue-50/70 border border-blue-100 p-2 rounded-md space-y-0.5 text-gray-700">
                      <div className="font-semibold text-brand-blue">Prescription Configured:</div>
                      <div>
                        OD (Right): SPH {item.prescription.rightEye.sph} | CYL {item.prescription.rightEye.cyl} | AXIS {item.prescription.rightEye.axis}°
                        {item.prescription.rightEye.add && ` | ADD ${item.prescription.rightEye.add}`}
                      </div>
                      <div>
                        OS (Left): SPH {item.prescription.leftEye.sph} | CYL {item.prescription.leftEye.cyl} | AXIS {item.prescription.leftEye.axis}°
                        {item.prescription.leftEye.add && ` | ADD ${item.prescription.leftEye.add}`}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity and Price */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1.5 text-gray-500 hover:text-brand-dark transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-brand-dark">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1.5 text-gray-500 hover:text-brand-dark transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-right">
                  <div className="font-bold text-brand-dark text-base">
                    ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                  </div>
                  <div className="text-[10px] text-gray-400">
                    ₹{item.product.price.toLocaleString("en-IN")} each
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-brand-gray/50 border border-gray-200 rounded-xl p-6 h-fit space-y-5">
          <h2 className="font-extrabold text-brand-dark text-base border-b border-gray-200 pb-3">
            Order Summary
          </h2>

          <div className="space-y-3 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal ({totalItems} items)</span>
              <span className="font-semibold text-brand-dark">₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between">
              <span>Pan India Delivery</span>
              <span className="font-bold text-emerald-600">FREE</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Optical Surfacing & Quality Inspection</span>
              <span className="font-semibold text-brand-dark">Included</span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between items-baseline text-sm">
              <span className="font-bold text-brand-dark">Total Amount</span>
              <span className="text-xl font-extrabold text-brand-dark">
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
          >
            Proceed to Checkout
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="space-y-2 pt-2 border-t border-gray-200 text-[11px] text-gray-500">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-brand-blue shrink-0" />
              <span>Pan India Insured Shipping Included</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
              <span>100% Prescription Accuracy Guarantee</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
