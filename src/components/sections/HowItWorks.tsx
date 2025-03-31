"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create custom surveys",
    description: "Design tailored feedback surveys that address your specific organizational needs using our intuitive builder.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    number: "02",
    title: "Schedule automated delivery",
    description: "Set the frequency of surveys and let our system automatically send them to your team at the right intervals.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    number: "03",
    title: "Analyze the results",
    description: "Review comprehensive analytics that highlight trends, patterns, and areas that need attention.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    number: "04",
    title: "Take meaningful action",
    description: "Implement targeted improvements based on data-driven insights and track the impact of your changes.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section 
      id="how-it-works" 
      className="py-24 bg-gray-50"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            How <span className="gradient-text">Vibe Report</span> works
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Our streamlined four-step process makes it easy to gather insights and improve 
            your workplace culture.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden lg:block"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center mb-16 last:mb-0 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="lg:w-1/2 lg:px-12 mb-8 lg:mb-0">
                <div className="max-w-md mx-auto lg:mx-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#E02AA4] rounded-full flex items-center justify-center text-white font-bold z-10">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <ChevronRight className="h-6 w-6 text-[#E02AA4] ml-4 hidden lg:block" />
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <div className={`relative overflow-hidden rounded-xl shadow-lg border border-gray-100 ${
                  index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                } w-full max-w-lg aspect-[4/3]`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#E02AA4]/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}