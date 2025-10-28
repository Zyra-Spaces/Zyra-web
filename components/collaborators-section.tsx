"use client";

import React from "react";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function CollaboratorsSection() {
  const companies = [
    {
      id: 1,
      logo: "/Fictional company logo-1.svg",
      name: "Epicurious"
    },
    {
      id: 2,
      logo: "/Fictional company logo-2.svg", 
      name: "CloudWatch"
    },
    {
      id: 3,
      logo: "/Fictional company logo-3.svg",
      name: "Acme Corp"
    },
    {
      id: 4,
      logo: "/Fictional company logo-4.svg",
      name: "Polymath"
    },
    {
      id: 5,
      logo: "/Fictional company logo-5.svg",
      name: "Alt+Shift"
    },
    {
      id: 6,
      logo: "/Fictional company logo-6.svg",
      name: "Luminous"
    },
    {
      id: 7,
      logo: "/Fictional company logo-7.svg",
      name: "FocalPoint"
    },
    {
      id: 8,
      logo: "/Fictional company logo.svg",
      name: "Galileo"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-48 bg-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Our Trusted{" "}
              <span className="font-light italic text-gray-600" style={{ fontFamily: 'cursive' }}>
                Collaborators
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Building stronger solutions through trusted partnerships and shared goals.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium rounded-lg transition-colors">
              Learn more
            </button>
            <button className="bg-[#4780C6] hover:bg-[#4780C6]/80 text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors">
              Get started
            </button>
          </div>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {companies.map((company) => (
            <div key={company.id} className="flex flex-col items-center space-y-4">
              <div className="w-24 h-16 flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
