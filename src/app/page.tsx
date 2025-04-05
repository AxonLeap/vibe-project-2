"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Sections
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Integration from "@/components/sections/Integration";
import Stats from "@/components/sections/Stats";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";

export default function Home() {
  // Smooth scroll implementation
  useEffect(() => {
    // Handle smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (!anchor) return;
      
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      if (!targetId) return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Integration />
      <Pricing />
      <Faq />
      <Cta />
    </main>
  );
}
