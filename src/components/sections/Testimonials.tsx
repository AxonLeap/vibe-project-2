"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
  logo: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Vibe Report has completely transformed how we understand our employee experience. The insights we've gained have helped us reduce turnover by 22% in just six months.",
    name: "Sarah Johnson",
    title: "Chief People Officer",
    company: "TechVentures Inc",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    logo: "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    id: 2,
    quote: "As a fast-growing startup, we needed a solution that could scale with us. Vibe Report delivers actionable insights that have helped us maintain our culture during rapid expansion.",
    name: "Michael Wei",
    title: "CEO",
    company: "Innovate Labs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    logo: "https://images.pexels.com/photos/5473301/pexels-photo-5473301.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    id: 3,
    quote: "The anonymized feedback feature has been a game-changer. Our team members now feel safe sharing honest opinions, which has led to meaningful improvements in our workplace.",
    name: "Elena Rodriguez",
    title: "HR Director",
    company: "Global Solutions",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
    logo: "https://images.pexels.com/photos/5473297/pexels-photo-5473297.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Handle autoplay functionality
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay]);
  
  // Pause autoplay when user interacts with carousel
  const handleNavigation = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
    
    // Resume autoplay after 10 seconds of inactivity
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    setTimeout(() => {
      setAutoplay(true);
    }, 10000);
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            Loved by HR teams <span className="gradient-text">everywhere</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            See what our customers are saying about how Vibe Report has transformed their
            workplace culture and employee experience.
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Main testimonial carousel */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                {/* Image column */}
                <div className="relative hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E02AA4]/20 to-transparent z-10"></div>
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Content column */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Image 
                      src={testimonials[activeIndex].logo} 
                      alt={testimonials[activeIndex].company}
                      width={120}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  
                  <div className="mb-2 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "w-5 h-5", 
                          i < testimonials[activeIndex].rating 
                            ? "text-yellow-400 fill-yellow-400" 
                            : "text-gray-300"
                        )} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-medium mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div className="mt-auto">
                    <div className="flex items-center">
                      <div className="md:hidden mr-4 rounded-full overflow-hidden relative w-12 h-12">
                        <Image
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">
                          {testimonials[activeIndex].name}
                        </p>
                        <p className="text-gray-600">
                          {testimonials[activeIndex].title}, {testimonials[activeIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-between mt-8 items-center">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    activeIndex === index 
                      ? "bg-[#E02AA4] w-8" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleNavigation(
                  (activeIndex - 1 + testimonials.length) % testimonials.length
                )}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleNavigation(
                  (activeIndex + 1) % testimonials.length
                )}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}