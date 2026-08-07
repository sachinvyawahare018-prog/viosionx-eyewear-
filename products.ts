export type LensCategory = 
  | "Zero Power Glasses"
  | "Single Vision"
  | "Bifocal"
  | "Progressive"
  | "Sunglasses";

export type Gender = "Men" | "Women" | "Unisex";
export type FrameShape = "Rectangle" | "Square" | "Round" | "Aviator" | "Wayfarer" | "Cat Eye";
export type FrameSize = "Small" | "Medium" | "Large";
export type FrameMaterial = "Acetate" | "Titanium" | "Stainless Steel" | "TR90";

export interface PrescriptionPower {
  rightEye: {
    sph: string;
    cyl: string;
    axis: string;
    add?: string;
  };
  leftEye: {
    sph: string;
    cyl: string;
    axis: string;
    add?: string;
  };
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  category: LensCategory;
  gender: Gender;
  frameShape: FrameShape;
  frameColor: string;
  frameSize: FrameSize;
  frameMaterial: FrameMaterial;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  features: string[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
  allowsPrescription: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "vx-001",
    name: "VisionX Classic Acetate Square",
    price: 2499,
    originalPrice: 4999,
    discountPercentage: 50,
    category: "Single Vision",
    gender: "Unisex",
    frameShape: "Square",
    frameColor: "Matte Black",
    frameSize: "Medium",
    frameMaterial: "Acetate",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Handcrafted Italian acetate frame designed for ultimate comfort and durability. Precision anti-reflective coated single vision lenses included.",
    features: [
      "Lightweight Premium Acetate",
      "Scratch-Resistant Coating",
      "100% UV Protection",
      "Flexible Spring Hinges"
    ],
    isFeatured: true,
    isBestSeller: true,
    allowsPrescription: true
  },
  {
    id: "vx-002",
    name: "VisionX Titanium Air Rimless",
    price: 3999,
    originalPrice: 6999,
    discountPercentage: 43,
    category: "Progressive",
    gender: "Men",
    frameShape: "Rectangle",
    frameColor: "Gunmetal Silver",
    frameSize: "Medium",
    frameMaterial: "Titanium",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Ultra-lightweight Japanese Titanium frame paired with high-definition progressive lenses for seamless distance-to-near transition.",
    features: [
      "Pure Titanium Construction",
      "Hypoallergenic Nose Pads",
      "Wide Progressive Vision Zone",
      "Blue Light Filter Option"
    ],
    isFeatured: true,
    isBestSeller: true,
    allowsPrescription: true
  },
  {
    id: "vx-003",
    name: "VisionX Blue Block Screen Pro",
    price: 1499,
    originalPrice: 2999,
    discountPercentage: 50,
    category: "Zero Power Glasses",
    gender: "Unisex",
    frameShape: "Round",
    frameColor: "Tortoise Shell",
    frameSize: "Small",
    frameMaterial: "TR90",
    rating: 4.7,
    reviewCount: 215,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Engineered specifically for digital screen users. Filters out 98% of harmful high-energy blue light to reduce eye strain and fatigue.",
    features: [
      "Advanced Blue Cut Technology",
      "Featherweight TR90 Frame",
      "Anti-Glare Hydrophobic Coating",
      "Zero Distortion Optics"
    ],
    isFeatured: true,
    isBestSeller: false,
    allowsPrescription: false
  },
  {
    id: "vx-004",
    name: "VisionX Urban Aviator Sunglasses",
    price: 2999,
    originalPrice: 5499,
    discountPercentage: 45,
    category: "Sunglasses",
    gender: "Men",
    frameShape: "Aviator",
    frameColor: "Gold / Dark Green Lens",
    frameSize: "Large",
    frameMaterial: "Stainless Steel",
    rating: 4.9,
    reviewCount: 162,
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Iconic teardrop aviator silhouette crafted with medical-grade stainless steel and UV400 polarized lenses for crystal-clear outdoor vision.",
    features: [
      "TAC Polarized Lenses",
      "UV400 Category 3 Protection",
      "Adjustable Silicone Nose Pads",
      "Corrosion Resistant Alloy"
    ],
    isFeatured: true,
    isBestSeller: true,
    allowsPrescription: false
  },
  {
    id: "vx-005",
    name: "VisionX Executive Bifocal Classic",
    price: 3299,
    originalPrice: 5999,
    discountPercentage: 45,
    category: "Bifocal",
    gender: "Men",
    frameShape: "Square",
    frameColor: "Navy Blue",
    frameSize: "Large",
    frameMaterial: "Acetate",
    rating: 4.6,
    reviewCount: 78,
    images: [
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Sophisticated dual-field bifocal design delivering clear distance vision with a precise reading segment for professional efficiency.",
    features: [
      "Invisible Line Bifocal Lenses",
      "High Impact Resistant Coated",
      "Ergonomic Ear Temple Curve",
      "Premium Protective Case Included"
    ],
    isFeatured: false,
    isBestSeller: false,
    allowsPrescription: true
  },
  {
    id: "vx-006",
    name: "VisionX Velvet Cat Eye Luxe",
    price: 2799,
    originalPrice: 4999,
    discountPercentage: 44,
    category: "Single Vision",
    gender: "Women",
    frameShape: "Cat Eye",
    frameColor: "Rose Gold Transparent",
    frameSize: "Medium",
    frameMaterial: "Acetate",
    rating: 4.8,
    reviewCount: 140,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800"
    ],
    description: "An elegant cat-eye frame designed to elevate everyday style without compromising on vision accuracy.",
    features: [
      "Crystal-Clear Optical Resin Lenses",
      "Contoured Sculpted Acetate",
      "Full Anti-Reflective Coating",
      "Includes Hard Case & Microfiber Cloth"
    ],
    isFeatured: false,
    isBestSeller: true,
    allowsPrescription: true
  }
];

export const POWER_OPTIONS = {
  sph: ["-10.00", "-9.50", "-9.00", "-8.50", "-8.00", "-7.50", "-7.00", "-6.50", "-6.00", "-5.50", "-5.00", "-4.50", "-4.00", "-3.50", "-3.00", "-2.50", "-2.00", "-1.75", "-1.50", "-1.25", "-1.00", "-0.75", "-0.50", "-0.25", "0.00", "+0.25", "+0.50", "+0.75", "+1.00", "+1.25", "+1.50", "+1.75", "+2.00", "+2.25", "+2.50", "+2.75", "+3.00", "+3.25", "+3.50", "+3.75", "+4.00", "+4.50", "+5.00", "+5.50", "+6.00"],
  cyl: ["0.00", "-0.25", "-0.50", "-0.75", "-1.00", "-1.25", "-1.50", "-1.75", "-2.00", "-2.25", "-2.50", "-2.75", "-3.00", "+0.25", "+0.50", "+0.75", "+1.00", "+1.25", "+1.50", "+1.75", "+2.00"],
  axis: Array.from({ length: 181 }, (_, i) => i.toString()),
  add: ["+1.00", "+1.25", "+1.50", "+1.75", "+2.00", "+2.25", "+2.50", "+2.75", "+3.00"]
};
