"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/" className="inline-flex items-center">
      <div 
        className="relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E02AA4] to-[#FF6699] flex items-center justify-center text-white font-bold mr-2"
          animate={isHovered ? { rotate: 360 } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M21.6 12C21.6 17.302 17.302 21.6 12 21.6C6.69807 21.6 2.4 17.302 2.4 12C2.4 6.69807 6.69807 2.4 12 2.4C17.302 2.4 21.6 6.69807 21.6 12Z" 
              stroke="white" 
              strokeWidth="2"
            />
            <path 
              d="M12 8V16" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <path 
              d="M16 12L8 12" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
        <div>
          <span className="text-lg font-bold">Vibe Report</span>
        </div>
      </div>
    </Link>
  );
}