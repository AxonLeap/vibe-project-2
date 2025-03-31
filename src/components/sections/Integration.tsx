"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";

interface IntegrationLogo {
  name: string;
  logo: string;
}

const integrationLogos: IntegrationLogo[] = [
  { name: "Slack", logo: "https://images.pexels.com/photos/7989448/pexels-photo-7989448.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "Microsoft Teams", logo: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "Google Workspace", logo: "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "Zoom", logo: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "Jira", logo: "https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "Asana", logo: "https://images.pexels.com/photos/5473289/pexels-photo-5473289.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "HubSpot", logo: "https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "Zendesk", logo: "https://images.pexels.com/photos/5473330/pexels-photo-5473330.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "Salesforce", logo: "https://images.pexels.com/photos/5473297/pexels-photo-5473297.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "Notion", logo: "https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "Monday.com", logo: "https://images.pexels.com/photos/5473301/pexels-photo-5473301.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "Workday", logo: "https://images.pexels.com/photos/5473952/pexels-photo-5473952.jpeg?auto=compress&cs=tinysrgb&w=150" }
];

export default function Integration() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      className="py-20 bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-4">
            Seamless <span className="gradient-text">integrations</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Connect Vibe Report with your favorite workplace tools for a frictionless experience.
          </p>
        </motion.div>

        {/* Integration showcase */}
        <div className="mb-16">
          <Marquee 
            gradient={true} 
            gradientColor={"#FFFFFF"}
            gradientWidth={100}
            speed={30}
            pauseOnHover={true}
          >
            <div className="flex py-4 space-x-12">
              {integrationLogos.slice(0, 6).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center justify-center h-16 w-32"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={100}
                    height={40}
                    className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </motion.div>
              ))}
            </div>
          </Marquee>

          <Marquee 
            gradient={true} 
            gradientColor={"#FFFFFF"}
            gradientWidth={100}
            direction="right"
            speed={25}
            pauseOnHover={true}
          >
            <div className="flex py-4 space-x-12">
              {integrationLogos.slice(6).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: (index + 6) * 0.05 }}
                  className="flex items-center justify-center h-16 w-32"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={100}
                    height={40}
                    className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </motion.div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Integration highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden p-8 md:p-12 shadow-sm border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Connect with your existing tools in just a few clicks
              </h3>
              <p className="text-gray-600 mb-6">
                Vibe Report integrates with 30+ workplace tools, making it easy to incorporate 
                employee feedback into your existing workflows. Set up once and get valuable insights 
                delivered where your team already works.
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  "Single sign-on support",
                  "API access",
                  "Secure data transfer",
                  "Custom webhooks",
                  "Real-time syncing",
                  "Advanced permissions"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg 
                      className="w-5 h-5 text-[#E02AA4] mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Integration Showcase"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}