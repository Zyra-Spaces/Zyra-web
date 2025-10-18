"use client";

import React from "react";
import { MoveUpRight, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ShareBurningIdea() {
  return (
    <div className="min-h-screen py-16 px-48">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-5xl font-bold text-gray-900">
              Share that burning{" "}
              <span className="font-light italic text-gray-600">idea</span>
            </h1>
          </div>
          <button className="bg-[#4780C6] hover:bg-[#4780C6]/80 py-4 px-6 flex items-center justify-center rounded-none text-white">
            More projects
            <MoveUpRight className="ml-2 h-6 w-6" />
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4 items-center">
          {/* Left Column - Illustration */}
          <div className="relative">
            <div className="relative aspect-square">
              <Image
                src="/illustration.svg"
                alt="Person sitting on cloud with burning idea"
                fill
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-12">
            {/* Share That Burning Idea Section */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Share That Burning Idea
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#4780C6] hover:text-[#4780C6]/80 font-medium text-lg"
              >
                Share idea
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            {/* Track Progress & Celebrate Milestones Section */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Track Progress & Celebrate Milestones
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Keep your collaborators in sync. Share updates, milestones, and
                achievements as your idea evolves.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#4780C6] hover:text-[#4780C6]/80 font-medium text-lg"
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