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
            <Image
              src="/chart-flow.svg"
              alt="Chart Flow Diagram"
              width={635}
              height={322}
              className="w-full h-auto"
            />
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