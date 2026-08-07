"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Glasses } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
          We're Here to Help Your Vision
        </h1>
        <p className="text-xs sm:text-sm text-gray-600">
          Have questions about your lens prescription, order status, or frame dimensions? Reach out to our optical support team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Details Column */}
        <div className="space-y-6 bg-brand-dark text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-blue/30 border border-brand-blue/50 text-blue-300 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-3">
                <Glasses className="w-3.5 h-3.5" /> Optical Support Desk
              </div>
              <h2 className="text-xl font-bold">Contact Information</h2>
              <p className="text-xs text-gray-300 mt-1">
                Our certified opticians are available 6 days a week for assistance.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Customer Support Hotline</p>
                  <p className="text-gray-300">+91 1800-123-8474 (Toll-Free)</p>
                  <p className="text-[10px] text-gray-400">Mon - Sat: 9:00 AM - 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Email Us</p>
                  <p className="text-gray-300">support@visionxeyewear.in</p>
                  <p className="text-[10px] text-gray-400">Prescription verification & order updates</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Optical Lab & Fulfillment Center</p>
                  <p className="text-gray-300">Plot 42, Tech Park Avenue, Electronic City</p>
                  <p className="text-gray-300">Bengaluru, Karnataka 560100</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Delivery Timeline</p>
                  <p className="text-gray-300">Pan-India Transit: 3-5 Business Days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 text-[11px] text-gray-400">
            100% Guaranteed Prescription Surfacing Accuracy
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Message Sent Successfully!</h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                Thank you for reaching out to VisionX Eyewear. One of our optical specialists will review your message and reply via email within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
                }}
                className="inline-block bg-brand-blue text-white text-xs font-bold px-6 py-2.5 rounded-lg mt-4"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="font-bold text-brand-dark text-lg border-b border-gray-100 pb-3">
                Send Us a Message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 bg-brand-gray/50 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 bg-brand-gray/50 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 bg-brand-gray/50 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-2.5 bg-brand-gray/50 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-blue"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Prescription Help">Prescription Verification</option>
                    <option value="Order Status">Order Status & Tracking</option>
                    <option value="Returns & Warranty">Returns & Warranty</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Message *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="How can we assist you with your eyewear today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2.5 bg-brand-gray/50 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-brand-blue resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-brand-blue hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2 shadow-md"
              >
                <Send className="w-4 h-4" />
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
