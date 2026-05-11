"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const VisitNav = () => {
  return (
    <div className='hidden lg:block bg-background border-b'>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand/Logo Area */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-4"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/10 rounded-full blur-xl" />
            <Image src="/hlo1.png" alt="Logo" width="50" height="50" className="relative z-10" />
          </div>
          <div>
            <h1 className="text-primary font-black text-2xl tracking-tighter">SWASTHYA</h1>
            <p className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase">Healthcare</p>
          </div>
        </motion.div>

        {/* Info Area */}
        <div className="flex items-center gap-10">
          {[
            { label: "Call Us", value: "+977-9805912060", icon: Phone, color: "text-blue-500" },
            { label: "Email", value: "info@swasthya.com", icon: Mail, color: "text-indigo-500" },
            { label: "Visit", value: "Biratnagar, Nepal", icon: MapPin, color: "text-rose-500" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 group cursor-default"
            >
              <div className={`w-10 h-10 rounded-2xl bg-muted flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                <p className="text-sm font-semibold group-hover:text-primary transition-colors">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitNav;
