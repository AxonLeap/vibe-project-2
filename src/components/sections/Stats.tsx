"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    value: 89,
    unit: "%",
    label: "Employee response rate",
    description: "Average response rate across all customers"
  },
  {
    value: 28,
    unit: "%",
    label: "Increase in engagement",
    description: "Average improvement after 6 months"
  },
  {
    value: 35,
    unit: "%",
    label: "Reduced turnover",
    description: "Average reduction in employee churn"
  },
  {
    value: 94,
    unit: "%",
    label: "Customer satisfaction",
    description: "Companies that would recommend us"
  }
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section 
      className="py-20 bg-white relative" 
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#E02AA4]/5 skew-y-3 transform -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-3">
                  <div className="h-8 w-1.5 bg-[#E02AA4] rounded-full mr-4"></div>
                  <h3 className="text-lg font-medium text-gray-500">{stat.label}</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">
                    {hasAnimated ? (
                      <CountUp
                        end={stat.value}
                        duration={2}
                        separator=","
                      />
                    ) : (
                      "0"
                    )}
                  </span>
                  <span className="text-4xl md:text-5xl font-bold ml-1 gradient-text">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-gray-500 mt-2">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}