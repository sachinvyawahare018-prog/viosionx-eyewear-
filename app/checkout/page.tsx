"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, CreditCard, CheckCircle2, Truck, ArrowLeft, Glasses } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, totalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "upi",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    clearCart();
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">
            Order Confirmed • Pan India Shipping
          </span>
          <h1 className="text-3xl font-extrabold text-brand-dark">Thank You For Your Order!</h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
            Your prescription eyewear order has been routed to our optical lab for surfacing and calibration.
          </p>
        </div>

        <div className="bg-brand-gray/60 border border-gray-200 rounded-xl p-6 text-left max-w-md mx-auto space-y-3 text-xs">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-500">Order ID:</span>
            <span className="font-bold text-brand-dark">VX-{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-500">Deliver To:</span>
            <span className="font-bold text-brand-dark">{formData.fullName} ({formData.pincode})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Payment Status:</span>
            <span className="font-bold text-emerald-600">Paid Online via {formData.paymentMethod.toUpperCase()}</span>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors shadow-md"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-bold text-brand-dark">No Items to Checkout</h1>
        <p className="text-xs text-gray-500">Please add optical products to your cart before proceeding.</p>
        <Link
          href="/shop"
          className="inline-block bg-brand-blue text-white font-bold text-xs px-6 py-3 rounded-xl"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link href="/cart" className="inline-flex items-center gap-2 text-xs font-semibold text-brand-blue hover:underline mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Cart
      </Link>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-2">Checkout Details</h1>
      <p className="text-xs text-gray-500 mb-8">Complete your address and online payment to dispatch your optical order</p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Customer Information & Address Form */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Personal Details */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
            <h2 className="font-bold text-brand-dark text-base border-b border-gray-100 pb-3">
              1. Customer Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-brand-gray/50 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-blue"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-brand-gray/50 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-blue"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-brand-gray/50 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-blue"
                />
              </div>
            </div>
          </div>

          {/* Pan India Delivery Address */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h2 className="font-bold text-brand-dark text-base">2. Complete Delivery Address</h2>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Pan India Delivery
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Street Address / House No. / Building *</label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Flat No, Apartment, Street, Area"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-brand-gray/50 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-blue"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="e.g. Bengaluru"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-2.5 bg-brand-gray/50 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">State *</label>
                  <input
                    type="text"
                    name="state"
                    required
                    placeholder="e.g. Karnataka"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full p-2.5 bg-brand-gray/50 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    maxLength={6}
                    placeholder="6-digit Pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full p-2.5 bg-brand-gray/50 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Secure Online Payment Options */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
            <h2 className="font-bold text-brand-dark text-base border-b border-gray-100 pb-3 flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              3. Secure Online Payment Method
            </h2>

            <div className="space-y-3 text-xs">
              <label className="flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition-colors bg-blue-50/40 border-brand-blue">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === "upi"}
                    onChange={handleChange}
                    className="accent-brand-blue"
                  />
                  <div>
                    <span className="font-bold text-brand-dark block">UPI Instant Payment</span>
                    <span className="text-[11px] text-gray-500">GPay, PhonePe, Paytm, BHIM</span>
                  </div>
                </div>
                <CreditCard className="w-5 h-5 text-brand-blue" />
              </label>

              <label className="flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition-colors border-gray-200 hover:border-gray-300">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleChange}
                    className="accent-brand-blue"
                  />
                  <div>
                    <span className="font-bold text-brand-dark block">Credit / Debit Card</span>
                    <span className="text-[11px] text-gray-500">Visa, Mastercard, RuPay</span>
                  </div>
                </div>
                <Lock className="w-4 h-4 text-gray-400" />
              </label>

              <label className="flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition-colors border-gray-200 hover:border-gray-300">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="netbanking"
                    checked={formData.paymentMethod === "netbanking"}
                    onChange={handleChange}
                    className="accent-brand-blue"
                  />
                  <div>
                    <span className="font-bold text-brand-dark block">Net Banking</span>
                    <span className="text-[11px] text-gray-500">All major Indian banks supported</span>
                  </div>
                </div>
                <ShieldCheck className="w-4 h-4 text-gray-400" />
              </label>
            </div>
          </div>

        </div>

        {/* Right Column Order Summary */}
        <div className="space-y-6">
          <div className="bg-brand-gray/50 border border-gray-200 rounded-xl p-6 space-y-4">
            <h2 className="font-extrabold text-brand-dark text-base border-b border-gray-200 pb-3">
              Order Review
            </h2>

            <div className="space-y-3 divide-y divide-gray-200">
              {cart.map((item) => (
                <div key={item.id} className="pt-3 first:pt-0 flex justify-between items-start gap-3 text-xs">
                  <div>
                    <p className="font-bold text-brand-dark">{item.product.name}</p>
                    <p className="text-[10px] text-gray-500">Qty: {item.quantity} | {item.selectedColor}</p>
                  </div>
                  <span className="font-bold text-brand-dark shrink-0">
                    ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-bold text-emerald-600">FREE Pan India</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-brand-dark pt-2 border-t border-gray-200">
                <span>Total Amount</span>
                <span>₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-colors shadow-lg shadow-blue-900/20"
            >
              Pay & Confirm Order (₹{totalPrice.toLocaleString("en-IN")})
            </button>
          </div>

          <div className="p-4 bg-white rounded-xl border border-gray-200 text-xs text-gray-500 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-brand-dark">
              <Truck className="w-4 h-4 text-brand-blue" />
              Pan-India Express Transit
            </div>
            <p className="text-[11px] leading-relaxed">
              Dispatched with optical-grade protective hard shell case and micro-fiber lens cloth.
            </p>
          </div>
        </div>

      </form>
    </div>
  );
}
