"use client";

import React from "react";
import { MoveUpRight, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function StartBuildingSection() {
  return (
    <div className="min-h-screen py-16 px-40">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-5xl font-bold text-gray-900">
              Start building{" "}
              <span className="font-light italic text-gray-600">now</span>
            </h1>
          </div>
          <button className="bg-[#4780C6] hover:bg-[#4780C6]/80 py-4 px-6 flex items-center justify-center rounded-none text-white">
            More projects
            <MoveUpRight className="ml-2 h-6 w-6" />
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12 items-center">
          {/* Left Column - Flowchart/Diagram */}
          <div className="relative">
            <div className="relative aspect-[16/9] bg-gray-50 rounded-2xl p-8">
              {/* Flowchart Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Simple flowchart representation */}
                <div className="flex items-center gap-4 overflow-x-auto pb-4">
                  {/* Home Page */}
                  <div className="flex-shrink-0 w-32 h-32 bg-white border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center shadow-sm">
                    <div className="text-xs text-gray-400 mb-1">📄</div>
                    <div className="text-sm font-semibold">Home Page</div>
                  </div>

                  <div className="text-gray-400">→</div>

                  {/* Products/Services */}
                  <div className="flex-shrink-0 w-32 h-32 bg-white border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center shadow-sm">
                    <div className="text-xs text-gray-400 mb-1">🛍️</div>
                    <div className="text-sm font-semibold text-center">Products/Services</div>
                  </div>

                  <div className="text-gray-400">→</div>

                  {/* Display Products */}
                  <div className="flex-shrink-0 w-32 h-32 bg-white border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center shadow-sm">
                    <div className="text-xs text-gray-400 mb-1">📦</div>
                    <div className="text-sm font-semibold text-center">Display Products</div>
                  </div>

                  <div className="text-gray-400">→</div>

                  {/* Product Page */}
                  <div className="flex-shrink-0 w-32 h-32 bg-white border-2 border-blue-400 rounded-lg flex flex-col items-center justify-center shadow-sm">
                    <div className="text-xs text-gray-400 mb-1">📄</div>
                    <div className="text-sm font-semibold text-center">Product Page</div>
                  </div>

                  <div className="text-gray-400">→</div>

                  {/* Add to Cart */}
                  <div className="flex-shrink-0 w-32 h-32 bg-white border-2 border-yellow-400 rounded-lg flex flex-col items-center justify-center shadow-sm">
                    <div className="text-xs text-gray-400 mb-1">🛒</div>
                    <div className="text-sm font-semibold text-center">Add to Cart</div>
                  </div>

                  <div className="text-gray-400">→</div>

                  {/* Thank You Page */}
                  <div className="flex-shrink-0 w-32 h-32 bg-white border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center shadow-sm">
                    <div className="text-xs text-gray-400 mb-1">✓</div>
                    <div className="text-sm font-semibold text-center">Thank You Page</div>
                  </div>
                </div>

                {/* Cart Page below */}
                <div className="absolute bottom-8 right-1/4 w-32 h-32 bg-white border-2 border-red-400 rounded-lg flex flex-col items-center justify-center shadow-sm">
                  <div className="text-xs text-gray-400 mb-1">🛒</div>
                  <div className="text-sm font-semibold text-center">Cart Page</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center">
              <Mail className="w-7 h-7 text-white" />
            </div>

            {/* Share That Burning Idea Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Share That Burning Idea
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#4780C6] hover:text-[#4780C6]/80 font-medium text-base"
              >
                Share idea
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}