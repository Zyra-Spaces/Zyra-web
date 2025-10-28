"use client";

import React from "react";
import { MoveUpRight, Users, FolderOpen, Grid3X3, BarChart3, Rocket, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      icon: Users,
      title: "Zyra Connect",
      description: "Find and connect with collaborators, mentors, and project partners effortlessly.",
      iconColor: "text-green-500",
      iconBg: "bg-green-500",
    },
    {
      id: 2,
      icon: FolderOpen,
      title: "Zyra Projects",
      description: "Plan, track, and manage ideas with real-time collaboration tools.",
      iconColor: "text-teal-500",
      iconBg: "bg-teal-500",
    },
    {
      id: 3,
      icon: Grid3X3,
      title: "Zyra Spaces",
      description: "Collaborative workspaces for brainstorming, file sharing, and team workflows.",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500",
    },
    {
      id: 4,
      icon: BarChart3,
      title: "Zyra Insights",
      description: "Get data-driven analytics to measure project impact and team performance.",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500",
    },
    {
      id: 5,
      icon: Rocket,
      title: "Zyra Launchpad",
      description: "Showcase projects, pitch ideas, and attract visibility or funding.",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-600",
    },
    {
      id: 6,
      icon: Globe,
      title: "Zyra Community",
      description: "Join a network of innovators, share solutions, and participate in challenges.",
      iconColor: "text-red-500",
      iconBg: "bg-red-500",
    },
  ];

  return (
    <div className="relative min-h-screen py-16 px-48 overflow-hidden">
      {/* Crystalline Background */}
      <div className="absolute inset-0 z-0 mx-48 top-40">
        <Image
          src="/grass-background.svg"
          alt="Crystalline Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-5xl font-bold text-gray-900">
              Access our{" "}
              <span className="font-light italic text-gray-600" style={{ fontFamily: 'cursive' }}>
                products
              </span>
            </h1>
          </div>
          <button className="bg-[#4780C6] hover:bg-[#4780C6]/80 py-4 px-6 flex items-center justify-center rounded-none text-white">
            More projects
            <MoveUpRight className="ml-2 h-6 w-6" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={product.id} 
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-101 rounded-xl"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${product.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
