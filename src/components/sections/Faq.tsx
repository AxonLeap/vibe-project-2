"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "How often are surveys sent to employees?",
    answer: "You have complete control over survey frequency. Most companies start with weekly or bi-weekly pulse surveys. You can adjust the cadence based on your team's preferences and response rates, and even set different schedules for different teams."
  },
  {
    question: "Are employee responses truly anonymous?",
    answer: "Yes, our anonymous feedback feature ensures that individual responses can't be traced back to specific employees. Demographic data is only displayed in aggregate when there are enough responses to maintain anonymity. You can also choose which surveys should be anonymous vs. attributed."
  },
  {
    question: "How long does it take to set up Vibe Report?",
    answer: "Most customers are fully set up within a day. Simply import your employee list (or connect to your HRIS), choose your survey templates, set your schedule, and you're ready to go. Our customer success team provides complimentary onboarding assistance for all plans."
  },
  {
    question: "Can I customize the questions in the surveys?",
    answer: "Absolutely. While we provide scientifically validated question templates designed by organizational psychologists, you can fully customize the questions or create entirely new surveys from scratch to address your specific needs."
  },
  {
    question: "What integrations does Vibe Report offer?",
    answer: "We integrate with all major HRIS systems, communication tools (Slack, Teams, etc.), and project management platforms. Our API allows for custom integrations with virtually any system. Check out our integrations page for a complete list."
  },
  {
    question: "How do you ensure high response rates?",
    answer: "We've designed the entire experience to maximize engagement. Surveys are quick (2-3 minutes), delivered through employees' preferred channels, and include smart reminders. Our customers typically see 75-85% response rates, well above industry averages."
  },
  {
    question: "Is my company data secure with Vibe Report?",
    answer: "Security is our top priority. We're SOC 2 Type II compliant, implement encryption at rest and in transit, and follow industry best practices for data protection. We also offer data residency options for companies with specific regulatory requirements."
  },
  {
    question: "What happens after the free trial?",
    answer: "After your 14-day trial, you can choose the plan that works best for your organization. We'll send a reminder before your trial ends, and you can upgrade or cancel at any time. No credit card is required to start your trial."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need to know about Vibe Report and how it can transform your workplace culture.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className={cn(
                  "flex justify-between items-center w-full text-left px-6 py-4 rounded-lg",
                  "focus:outline-none transition-all duration-200",
                  openIndex === index
                    ? "bg-gradient-to-r from-[#E02AA4]/10 to-[#E02AA4]/5 shadow-sm"
                    : "hover:bg-gray-50"
                )}
              >
                <span className="text-lg font-medium">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-[#E02AA4] transition-transform duration-200",
                    openIndex === index ? "transform rotate-180" : ""
                  )}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-600">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Still have questions? We'd love to help.
          </p>
          <a 
            href="#" 
            className="inline-block mt-3 text-[#E02AA4] font-medium hover:underline"
          >
            Contact our support team
          </a>
        </motion.div>
      </div>
    </section>
  );
}