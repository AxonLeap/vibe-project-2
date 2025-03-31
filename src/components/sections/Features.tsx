"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, LineChart, Clock, Users, MessageSquare, Award } from "lucide-react";

const features = [
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Pulse Surveys",
    description: "Gather quick feedback from employees on a regular basis to track engagement trends over time."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Analytics Dashboard",
    description: "Visualize employee sentiment with powerful charts and reports to identify areas for improvement."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Automated Scheduling",
    description: "Set custom survey frequencies that work for your team—weekly, bi-weekly, or monthly."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Insights",
    description: "Compare engagement metrics across departments to identify team-specific challenges."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Anonymous Feedback",
    description: "Create a safe space for honest feedback with anonymous response options."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Recognition Tools",
    description: "Celebrate wins and acknowledge team members' contributions with built-in recognition features."
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section 
      id="features" 
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-[#E02AA4]/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 top-40 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4">
            Powerful tools for a <span className="gradient-text">thriving workplace</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Our comprehensive platform gives you everything you need to collect, measure, and improve 
            employee engagement across your organization.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#E02AA4]/10 to-[#E02AA4]/20 text-[#E02AA4] mr-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">
                Smart insights, right when you need them
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Our AI-powered analytics engine identifies patterns and trends in your feedback data, 
                automatically highlighting areas that need attention before they become problems.
              </p>
              <ul className="space-y-4">
                {[
                  "Predictive engagement trends",
                  "Automated action recommendations",
                  "Departmental comparison insights",
                  "Custom report generation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white">
                    <span className="mr-3 w-5 h-5 inline-flex items-center justify-center rounded-full bg-[#E02AA4] text-white">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M10.2426 0.343146L4.24264 6.34315L1.75736 3.85786" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent lg:hidden"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Vibe Report Analytics Dashboard"
                className="h-full w-full object-cover object-left"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}