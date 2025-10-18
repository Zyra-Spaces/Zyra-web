"use client";

import React from "react";
import { MoveUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function ProjectCollaboration() {
  return (
    <div className="min-h-screen py-16 px-48">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-5xl font-bold text-gray-900">
              Project{" "}
              <span className="font-light italic text-gray-600">
                collaboration
              </span>
            </h1>
          </div>
          <button className="bg-[#4780C6] hover:bg-[#4780C6]/80 py-4 px-6 flex items-center justify-center rounded-none text-white">
            Create a Project
            <MoveUpRight className="ml-2 h-6 w-6" />
          </button>
        </div>

        {/* Content Grid */}
        <div className="flex gap-4">
          {/* Left Column - Text Content */}
          <div className="space-y-12 w-[40%]">
            {/* Project Collaboration Section */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Project Collaboration
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Collaborate with others by contributing your skills, sharing
                feedback, or joining teams that match your expertise.
              </p>
            </div>

            {/* From Brainstorm to Breakthrough Section */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                From Brainstorm to Breakthrough
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Sketch, connect, and evolve your ideas live with your team.
                Zyra's real-time mind-mapping feature turns scattered thoughts
                into actionable plans — together.
              </p>
            </div>
          </div>

          {/* Right Column - Canvas Image */}
          <div className="relative flex-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ">
              <Image
                src="/Canvas 1.svg"
                alt="Project Collaboration Canvas"
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