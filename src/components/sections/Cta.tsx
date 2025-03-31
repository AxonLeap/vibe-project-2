"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E02AA4]/10 to-[#E02AA4]/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
        <div className="w-64 h-64 rounded-full bg-[#E02AA4]/10 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 transform translate-y-1/3 translate-x-1/3">
        <div className="w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image side */}
            <div className="bg-[#E02AA4] p-8 md:p-12 flex items-center justify-center">
              <div className="relative w-full max-w-xs aspect-square">
                <svg 
                  viewBox="0 0 200 200" 
                  className="w-full h-full absolute animate-pulse-glow"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fill="#FFFFFF" 
                    d="M45.7,-57.2C58.9,-45.8,69.2,-31.5,73.2,-15.3C77.1,0.9,74.7,19.2,66,32.8C57.2,46.4,42.2,55.3,26.5,62.3C10.8,69.3,-5.6,74.4,-22.3,71.6C-39,68.7,-56,58,-66.2,42.8C-76.4,27.6,-79.8,8,-74.6,-8.4C-69.3,-24.8,-55.5,-37.9,-41.5,-49.2C-27.4,-60.5,-13.7,-70,2.2,-72.8C18.2,-75.6,32.5,-68.7,45.7,-57.2Z" 
                    transform="translate(100 100)" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                    Start Today
                  </h3>
                  <p className="text-white/90 mb-4">
                    14-day free trial
                  </p>
                  <p className="text-white/80 text-sm">
                    No credit card required
                  </p>
                </div>
              </div>
            </div>
            
            {/* Content side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to transform your <span className="gradient-text">workplace culture?</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Join thousands of companies using Vibe Report to build better, more engaged teams.
                Get started in minutes with our easy setup process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="group">
                  Start free trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button variant="outline" size="lg">
                  Request demo
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 mt-6">
                Already a customer? <a href="#" className="text-[#E02AA4] hover:underline">Log in here</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}