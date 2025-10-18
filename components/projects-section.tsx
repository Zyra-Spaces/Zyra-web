"use client";

import React, { useState } from "react";
import { ExternalLink, Github, MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      image: "/hero-project-1.svg",
      alt: "Creative Designer Portfolio",
      title: "Creative Designer",
      category: "Portfolio",
      links: [
        { type: "live", url: "#" },
      ],
    },
    {
      id: 2,
      image: "/hero-project-2.svg",
      alt: "Marketing Workshop",
      title: "Marketing Workshop",
      category: "Landing Page",
      links: [
        { type: "live", url: "#" },
      ],
    },
    {
      id: 3,
      image: "/hero-project-5.svg",
      alt: "Student Platform",
      title: "Student Platform",
      category: "Web App",
      links: [
        { type: "live", url: "#" },
      ],
    },
    {
      id: 4,
      image: "/hero-project-4.svg",
      alt: "Eddie Assistant",
      title: "Eddie Assistant",
      category: "AI Product",
      links: [
        { type: "live", url: "#" },
      ],
    },
  ];

  return (
    <div className="min-h-screen  py-16 px-48 ">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Featured{" "}
              <span className="font-light italic text-gray-600">projects</span>
            </h2>
          </div>
          <button className="bg-[#4780C6] hover:bg-[#4780C6]/80 py-4 px-4 flex  items-center justify-center rounded-none text-white ">
            More Projects
            <MoveUpRight className="ml-2 h-6 w-6" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="w-full h-full object-cover"
              />

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 flex items-end justify-between p-4 ${
                  hoveredId === project.id
                    ? "opacity-80 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <h3 className="text-white text-2xl font- mb-2">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-center gap-2 px-6 py-3 bg-[#4780C6] text-white rounded-sm  transition-all transform hover:scale-105"
                      onClick={(e) => e.preventDefault()}
                    >
                      <ExternalLink size={18} />
                      <span className="font-medium ">View project</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
