"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-600 max-w-sm">
              Effortlessly gather periodic feedback from your employees, track engagement,
              and take action to improve the workplace experience.
            </p>
            <div className="mt-6 flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank"
                rel="noreferrer"
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -3 }}
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-[#E02AA4]" />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank"
                rel="noreferrer"
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -3 }}
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-[#E02AA4]" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noreferrer"
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -3 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-[#E02AA4]" />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank"
                rel="noreferrer"
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -3 }}
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-[#E02AA4]" />
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Press"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#"
                    className="text-gray-600 hover:text-[#E02AA4] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {["Features", "Integrations", "Pricing", "FAQ", "Support"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#"
                    className="text-gray-600 hover:text-[#E02AA4] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="border-gray-300 focus:border-[#E02AA4]" 
              />
              <Button variant="primary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <Mail size={18} className="mr-2 text-[#E02AA4]" />
            <span className="text-gray-600">hello@vibereport.com</span>
          </div>
          <div className="flex items-center">
            <Phone size={18} className="mr-2 text-[#E02AA4]" />
            <span className="text-gray-600">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <MapPin size={18} className="mr-2 text-[#E02AA4]" />
            <span className="text-gray-600">123 Feedback Lane, San Francisco, CA</span>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row md:justify-between md:items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            © {year} Vibe Report. All rights reserved.
          </div>
          <div className="flex flex-wrap space-x-4 md:space-x-8">
            <Link href="#" className="hover:text-[#E02AA4]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#E02AA4]">Terms of Service</Link>
            <Link href="#" className="hover:text-[#E02AA4]">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}