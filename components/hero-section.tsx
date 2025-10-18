"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GlassSurface from "@/components/GlassSurface";
import { ArrowRight, MoveUpRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      image: "/hero-project-1.svg",
      alt: "Creative Designer Portfolio",
    },
    {
      id: 2,
      image: "/hero-project-2.svg",
      alt: "Marketing Workshop",
    },
    {
      id: 3,
      image: "/hero-project-5.svg",
      alt: "Student Platform",
    },
    {
      id: 4,
      image: "/hero-project-4.svg",
      alt: "Eddie Assistant",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Diagonal Grid Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.svg"
          alt="Grid Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col px-48 mx-auto">
        {/* Navigation Header */}
        <header className=" fixed top-12 z-10 right-48 left-48 rounded-sm">
          <GlassSurface
            width="100%"
            height="auto"
            borderRadius={0}
            blur={100}
            brightness={100}
            opacity={0.93}
            backgroundOpacity={0.03}
            className="rounded-sm"
          >
            <div className="flex items-center justify-between  w-full">
              {/* Logo */}
              <div className="flex items-center">
                <Image
                  src="/header-logo.svg"
                  alt="Zyra Logo"
                  width={60}
                  height={60}
                  className="text-[#4780C6]"
                />
              </div>

              {/* Navigation Links */}
              <nav className="flex items-center gap-8 border bg-gray-50/80 rounded-sm ">
                <a
                  href="#home"
                  className="text-sm font-medium text-gray-600 hover:text-[#4780C6] transition-colors  border-r p-2 px-12"
                >
                  Home
                </a>
                <a
                  href="#solutions"
                  className="text-sm font-medium text-gray-600 hover:text-[#4780C6] transition-colors border-r p-2 px-4 "
                >
                  Solutions
                </a>
                <a
                  href="#organizations"
                  className="text-sm font-medium text-gray-600 hover:text-[#4780C6] transition-colors border-r p-2 px-4"
                >
                  Organizations
                </a>
              </nav>

              {/* Auth Buttons */}
              <div className="flex items-center gap-4">
                <button className=" border  rounded-none  px-12 py-4 hover:text-[#4780C6] text-[#4780C6]">
                  Login
                </button>
                <button className="bg-[#4780C6] hover:bg-[#4780C6]/80 py-4 px-4 flex  items-center justify-center rounded-none text-white ">
                  Get Started
                  <MoveUpRight className="ml-2 h-6 w-6"/>
                </button>
              </div>
            </div>
          </GlassSurface>
        </header>

        {/* Hero Content */}
        <div className="  px-8 pb-32 mt-40">

          <div className="text-center mb-8">
            <h1 className="text-[120px] font-light bg-gradient-to-b from-[#4780C6] to-white text-transparent bg-clip-text  tracking-wide leading-none mb-8">
              Zyra
            </h1>
            <p className="text-4xl font-normal tracking-wide mt-2 text-gradient bg-gradient-to-r from-[#4780C6] to-white text-transparent bg-clip-text">
              Innovate. <span className="text-[#4780C6]  ">Collaborate.</span>{" "}
              Grow.
            </p>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-4 gap-6 w-full border">
            {projects.map((project, index) => (
              <Card className="border-0 bg-transparent shadow-none overflow-hidden w-full">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
