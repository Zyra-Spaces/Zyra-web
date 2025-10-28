"use client";

import React from "react";
import { Check, MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function StartupsSection() {
  const features = [
    "30-day free trial",
    "Personalized onboarding",
    "Access to all features"
  ];

  return (
    <div className="min-h-screen py-16 mt-16 px-48">
      <div className="mx-auto">
       

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">

          <h1 className="text-5xl font-bold text-gray-900">
              Join 4,000+ startups{" "}
              <span className="font-light italic text-gray-600">growing</span>{" "}
              with Zyra
            </h1>
            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-8">
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium rounded-none transition-colors">
                Learn more
              </button>
              <button className="bg-[#4780C6] hover:bg-[#4780C6]/80 text-white px-8 py-4 text-lg font-medium rounded-none transition-colors">
                Get started
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/join-startups.svg"
                alt="Startup professional in modern workspace"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
