"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animate elements in on mount
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1],
      }
    });
  }, [controls]);

  // Headline animation variants
  const headlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  return (
    <section 
      ref={containerRef}
      className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gray-50"
      id="hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute inset-0 bg-radial-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={controls}
              className="mb-6 inline-block"
            >
              <span className="bg-[#E02AA4]/10 text-[#E02AA4] px-4 py-1.5 rounded-full text-sm font-medium">
                Employee Engagement Made Simple (#1 APP OUT THERE)
              </span>
            </motion.div>

            <motion.h1 
              className="text-balance font-heading mb-6"
              initial="hidden"
              animate="visible"
              variants={headlineVariants}
              custom={0}
            >
              <span className="block">Pulse-check your company&apos;s</span>
              <span className="gradient-text">heartbeat and happiness</span>
            </motion.h1>

            <motion.p 
              className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={headlineVariants}
              custom={1}
            >
              Effortlessly gather periodic feedback from your employees, track their engagement levels, 
              and take meaningful action to improve their workplace experience.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial="hidden"
              animate="visible"
              variants={headlineVariants}
              custom={2}
            >
              <Button variant="primary" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg">
                Book a Demo
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={headlineVariants}
              custom={3}
            >
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {[
                  "No credit card required",
                  "14-day free trial",
                  "Cancel anytime"
                ].map((text, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-[#E02AA4] mr-2" />
                    <span className="text-gray-600">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div 
            style={{ y, opacity }}
            className="relative ml-auto"
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-8 -left-8 w-24 h-24 bg-blue-100 rounded-full animate-float"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
              
              <motion.div 
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-100 rounded-full animate-float"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                style={{ animationDelay: "1s" }}
              />
              
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Vibe Report Dashboard"
                  width={600}
                  height={450}
                  className="rounded-t-lg"
                  priority
                />
                
                {/* Dashboard overlay elements */}
                <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    </div>
                    <div className="text-xs text-gray-500">Vibe Report Dashboard</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-2">Employee Feedback Dashboard</h3>
                  <p className="text-sm text-gray-500 mb-4">Track engagement metrics in real-time</p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Happiness</div>
                      <div className="text-lg font-bold text-green-600">78%</div>
                      <div className="text-xs text-green-600">↑ 4%</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Engagement</div>
                      <div className="text-lg font-bold text-blue-600">82%</div>
                      <div className="text-xs text-blue-600">↑ 7%</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Retention</div>
                      <div className="text-lg font-bold text-purple-600">91%</div>
                      <div className="text-xs text-purple-600">↑ 2%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-lg p-4 z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-10 h-10 bg-[#E02AA4]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#E02AA4] font-bold">85%</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <p className="text-xs font-medium">Weekly Response Rate</p>
                  <p className="text-xs text-green-600">↑ 12% this month</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
