"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, HelpCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PricingPlan {
  name: string;
  description: string;
  price: {
    monthly: number;
    annually: number;
  };
  features: {
    text: string;
    included: boolean;
    tooltip?: string;
  }[];
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Startup",
    description: "Perfect for small teams just getting started",
    price: {
      monthly: 9,
      annually: 7,
    },
    features: [
      { text: "Up to 25 employees", included: true },
      { text: "Basic survey templates", included: true },
      { text: "Weekly pulse surveys", included: true },
      { text: "Email delivery", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "Anonymous feedback", included: true },
      { text: "Team comparisons", included: false },
      { text: "Slack/Teams integration", included: false },
      { text: "Custom survey creation", included: false },
      { text: "Advanced analytics", included: false },
      { text: "API access", included: false },
      { text: "Dedicated success manager", included: false },
    ],
  },
  {
    name: "Growth",
    description: "Best for growing mid-sized organizations",
    price: {
      monthly: 19,
      annually: 15,
    },
    features: [
      { text: "Up to 100 employees", included: true },
      { text: "Advanced survey templates", included: true },
      { text: "Weekly pulse surveys", included: true },
      { text: "Email & app delivery", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "Anonymous feedback", included: true },
      { 
        text: "Team comparisons", 
        included: true, 
        tooltip: "Compare engagement across departments and teams"
      },
      { 
        text: "Slack/Teams integration", 
        included: true,
        tooltip: "Deliver surveys and collect responses directly in Slack or Teams"
      },
      { 
        text: "Custom survey creation", 
        included: true,
        tooltip: "Create fully customized surveys with your own questions"
      },
      { text: "Advanced analytics", included: false },
      { text: "API access", included: false },
      { text: "Dedicated success manager", included: false },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: {
      monthly: 49,
      annually: 39,
    },
    features: [
      { text: "Unlimited employees", included: true },
      { text: "All survey templates", included: true },
      { text: "Customizable survey frequency", included: true },
      { text: "Multi-channel delivery", included: true },
      { text: "Enterprise analytics suite", included: true },
      { text: "Anonymous feedback", included: true },
      { text: "Team comparisons", included: true },
      { text: "All integrations", included: true },
      { text: "Custom survey creation", included: true },
      { 
        text: "Advanced analytics", 
        included: true,
        tooltip: "AI-powered insights, trend analysis, and predictive modeling"
      },
      { 
        text: "API access", 
        included: true,
        tooltip: "Full API access for custom integrations and data exports"
      },
      { 
        text: "Dedicated success manager", 
        included: true,
        tooltip: "A dedicated customer success manager to help you implement and optimize"
      },
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-4">
              Simple, <span className="gradient-text">transparent</span> pricing
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Choose a plan that works for your team, with no hidden fees or long-term commitments.
            </p>
          </motion.div>

          {/* Billing toggle */}
          <div className="flex justify-center mt-10 mb-12">
            <div className="relative bg-white p-1 rounded-lg shadow-sm border border-gray-200 inline-flex">
              <button
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-md transition-all z-10",
                  !annual ? "text-white" : "text-gray-700"
                )}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-md transition-all z-10",
                  annual ? "text-white" : "text-gray-700"
                )}
                onClick={() => setAnnual(true)}
              >
                Annually <span className="text-xs opacity-75">(20% off)</span>
              </button>
              <div
                className={cn(
                  "absolute top-1 h-[calc(100%-8px)] rounded-md bg-[#E02AA4] transition-all duration-200 ease-in-out",
                  annual ? "left-[50%] w-[50%]" : "left-1 w-[45%]"
                )}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "bg-white border rounded-xl overflow-hidden transition-all hover:shadow-lg",
                plan.popular ? "border-[#E02AA4] shadow-lg relative" : "border-gray-200"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#E02AA4] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-5">{plan.description}</p>
                
                <div className="mt-4 mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">
                      ${annual ? plan.price.annually : plan.price.monthly}
                    </span>
                    <span className="text-gray-500 ml-2">per user / month</span>
                  </div>
                  {annual && (
                    <p className="text-sm text-green-600 mt-1">
                      Save ${(plan.price.monthly - plan.price.annually) * 12} per user annually
                    </p>
                  )}
                </div>
                
                <Button 
                  variant={plan.popular ? "primary" : "outline"} 
                  className="w-full"
                >
                  {plan.popular ? "Start your free trial" : "Choose plan"}
                </Button>
              </div>
              
              <div className="border-t border-gray-100 p-8">
                <h4 className="font-medium mb-4">Features included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                      )}
                      <span 
                        className={feature.included ? "text-gray-700" : "text-gray-400"}
                      >
                        {feature.text}
                        {feature.tooltip && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="inline-block w-3.5 h-3.5 ml-1 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 bg-gray-900 text-white rounded-xl p-8 md:p-12 text-center max-w-5xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a custom plan?</h3>
          <p className="max-w-2xl mx-auto mb-6 text-gray-300">
            We offer tailored solutions for organizations with unique requirements.
            Our team will work with you to build a plan that perfectly fits your needs.
          </p>
          <Button variant="white" size="lg">
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </section>
  );
}