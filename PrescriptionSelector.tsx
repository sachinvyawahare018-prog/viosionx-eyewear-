"use client";

import React, { useState, useEffect } from "react";
import { PrescriptionPower, POWER_OPTIONS } from "@/lib/products";

interface PrescriptionSelectorProps {
  category: string;
  onPrescriptionChange: (prescription: PrescriptionPower) => void;
}

export default function PrescriptionSelector({
  category,
  onPrescriptionChange,
}: PrescriptionSelectorProps) {
  const showAddPower = category === "Bifocal" || category === "Progressive";

  const [prescription, setPrescription] = useState<PrescriptionPower>({
    rightEye: { sph: "0.00", cyl: "0.00", axis: "0", add: showAddPower ? "+1.00" : undefined },
    leftEye: { sph: "0.00", cyl: "0.00", axis: "0", add: showAddPower ? "+1.00" : undefined },
  });

  const handleChange = (
    eye: "rightEye" | "leftEye",
    field: "sph" | "cyl" | "axis" | "add",
    value: string
  ) => {
    const updated = {
      ...prescription,
      [eye]: {
        ...prescription[eye],
        [field]: value,
      },
    };
    setPrescription(updated);
    onPrescriptionChange(updated);
  };

  useEffect(() => {
    onPrescriptionChange(prescription);
  }, []);

  return (
    <div className="bg-brand-gray/60 border border-gray-200 rounded-xl p-5 my-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-brand-dark text-sm tracking-wide uppercase">
          Enter Prescription Power
        </h3>
        <span className="text-[11px] font-semibold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
          {category} Configuration
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-4">
        Specify your exact optical prescription parameters for Right Eye (OD) and Left Eye (OS).
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left min-w-[500px]">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500 font-semibold uppercase tracking-wider">
              <th className="py-2.5 px-3">Eye</th>
              <th className="py-2.5 px-3">SPH (Sphere)</th>
              <th className="py-2.5 px-3">CYL (Cylinder)</th>
              <th className="py-2.5 px-3">AXIS (Deg)</th>
              {showAddPower && <th className="py-2.5 px-3">ADD Power</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 font-medium">
            {/* Right Eye (OD) */}
            <tr>
              <td className="py-3 px-3 font-bold text-brand-blue">Right Eye (OD)</td>
              <td className="py-3 px-3">
                <select
                  value={prescription.rightEye.sph}
                  onChange={(e) => handleChange("rightEye", "sph", e.target.value)}
                  className="w-full p-2 bg-white border border-gray-300 rounded-md focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:outline-none"
                >
                  {POWER_OPTIONS.sph.map((val) => (
                    <option key={`od-sph-${val}`} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </td>
              <td className="py-3 px-3">
                <select
                  value={prescription.rightEye.cyl}
                  onChange={(e) => handleChange("rightEye", "cyl", e.target.value)}
                  className="w-full p-2 bg-white border border-gray-300 rounded-md focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:outline-none"
                >
                  {POWER_OPTIONS.cyl.map((val) => (
                    <option key={`od-cyl-${val}`} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </td>
              <td className="py-3 px-3">
                <select
                  value={prescription.rightEye.axis}
                  onChange={(e) => handleChange("rightEye", "axis", e.target.value)}
                  className="w-full p-2 bg-white border border-gray-300 rounded-md focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:outline-none"
                >
                  {POWER_OPTIONS.axis.map((val) => (
                    <option key={`od-axis-${val}`} value={val}>
                      {val}°
                    </option>
                  ))}
                </select>
              </td>
              {showAddPower && (
                <td className="py-3 px-3">
                  <select
                    value={prescription.rightEye.add || "+1.00"}
                    onChange={(e) => handleChange("rightEye", "add", e.target.value)}
                    className="w-full p-2 bg-white border border-gray-300 rounded-md focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:outline-none"
                  >
                    {POWER_OPTIONS.add.map((val) => (
                      <option key={`od-add-${val}`} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </td>
              )}
            </tr>

            {/* Left Eye (OS) */}
            <tr>
              <td className="py-3 px-3 font-bold text-brand-blue">Left Eye (OS)</td>
              <td className="py-3 px-3">
                <select
                  value={prescription.leftEye.sph}
                  onChange={(e) => handleChange("leftEye", "sph", e.target.value)}
                  className="w-full p-2 bg-white border border-gray-300 rounded-md focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:outline-none"
                >
                  {POWER_OPTIONS.sph.map((val) => (
                    <option key={`os-sph-${val}`} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </td>
              <td className="py-3 px-3">
                <select
                  value={prescription.leftEye.cyl}
                  onChange={(e) => handleChange("leftEye", "cyl", e.target.value)}
                  className="w-full p-2 bg-white border border-gray-300 rounded-md focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:outline-none"
                >
                  {POWER_OPTIONS.cyl.map((val) => (
                    <option key={`os-cyl-${val}`} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </td>
              <td className="py-3 px-3">
                <select
                  value={prescription.leftEye.axis}
                  onChange={(e) => handleChange("leftEye", "axis", e.target.value)}
                  className="w-full p-2 bg-white border border-gray-300 rounded-md focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:outline-none"
                >
                  {POWER_OPTIONS.axis.map((val) => (
                    <option key={`os-axis-${val}`} value={val}>
                      {val}°
                    </option>
                  ))}
                </select>
              </td>
              {showAddPower && (
                <td className="py-3 px-3">
                  <select
                    value={prescription.leftEye.add || "+1.00"}
                    onChange={(e) => handleChange("leftEye", "add", e.target.value)}
                    className="w-full p-2 bg-white border border-gray-300 rounded-md focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:outline-none"
                  >
                    {POWER_OPTIONS.add.map((val) => (
                      <option key={`os-add-${val}`} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
