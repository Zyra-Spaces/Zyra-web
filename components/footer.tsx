"use client";

import React from "react";
import { Mail, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const navigationLinks = {
    product: [
      "About Zyra",
      "How It Works", 
      "Features",
      "Pricing",
      "FAQs",
      "Roadmap"
    ],
    community: [
      "Explore Ideas",
      "Find Collaborators", 
      "Success Stories",
      "Events & Challenges",
      "Become a Partner",
      "Join the Community"
    ],
    resources: [
      "Blog/Insights",
      "Help Center",
      "Documentation",
      "API Access",
      "Design Guidelines",
      "Tutorials"
    ],
    company: [
      "About Us",
      "Careers",
      "Contact Us",
      "Press / Media Kit",
      "Terms of Service",
      "Privacy Policy"
    ],
    connect: [
      "LinkedIn",
      "Twitter/X",
      "GitHub",
      "Instagram",
      "Discord",
      "Email Support"
    ]
  };

  const socialIcons = [
    { icon: Twitter, name: "Twitter/X" },
    { icon: Linkedin, name: "LinkedIn" },
    { icon: Facebook, name: "Facebook" },
    { icon: Github, name: "GitHub" },
    { icon: Instagram, name: "Instagram" },
    { icon: Mail, name: "Email" }
  ];

  return (
    <footer className="bg-white">
      {/* Newsletter Subscription Section */}
      <div className="px-48 py-16">
        <div className="bg-gray-100 rounded-2xl p-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get notified when we launch
              </h2>
              <p className="text-lg text-gray-600">
                Stay up to date with the latest news, announcements, and articles.
              </p>
            </div>
            <div className="flex items-center space-x-4 ml-12">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4780C6] focus:border-transparent w-80"
              />
              <button className="bg-[#4780C6] hover:bg-[#4780C6]/80 text-white px-8 py-4 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-48 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Branding */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#4780C6] rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zyra Spaces</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Design amazing digital experiences that create more happy in the world.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Product */}
            <div>
              <h3 className="text-[#4780C6] font-semibold text-sm mb-4">Product</h3>
              <ul className="space-y-3">
                {navigationLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-[#4780C6] text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-[#4780C6] font-semibold text-sm mb-4">Community</h3>
              <ul className="space-y-3">
                {navigationLinks.community.map((link, index) => (
                  <li key={index} className="flex items-center">
                    <a href="#" className="text-gray-600 hover:text-[#4780C6] text-sm transition-colors">
                      {link}
                    </a>
                    {link === "Success Stories" && (
                      <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                        Soon
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-[#4780C6] font-semibold text-sm mb-4">Resources</h3>
              <ul className="space-y-3">
                {navigationLinks.resources.map((link, index) => (
                  <li key={index} className="flex items-center">
                    <a href="#" className="text-gray-600 hover:text-[#4780C6] text-sm transition-colors">
                      {link}
                    </a>
                    {link === "Documentation" && (
                      <span className="ml-2 px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                        New
                      </span>
                    )}
                    {link === "API Access" && (
                      <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                        Soon
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[#4780C6] font-semibold text-sm mb-4">Company</h3>
              <ul className="space-y-3">
                {navigationLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-[#4780C6] text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-[#4780C6] font-semibold text-sm mb-4">Connect (Socials)</h3>
              <ul className="space-y-3">
                {navigationLinks.connect.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-[#4780C6] text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 px-48 py-8">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">
            © 2025 Zyra Spaces. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className="text-gray-600 hover:text-[#4780C6] transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
