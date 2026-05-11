"use client";

import { Facebook, Instagram, MapPin, Twitter, Wifi, Youtube } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const SocialNav = () => {
  return (
    <div className='hidden lg:block bg-primary text-primary-foreground py-2 border-b border-white/10'>
      <div className='container mx-auto px-6 flex justify-between items-center'>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className='flex items-center gap-2 group'
        >
          <MapPin className='w-4 h-4 text-white/70 group-hover:text-white transition-colors' />
          <p className='text-xs font-medium tracking-wide text-white/90 group-hover:text-white transition-colors'>
            Bhattachowk-1, Biratnagar, Nepal
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className='flex items-center gap-6'
        >
          {[Twitter, Facebook, Instagram, Youtube, Wifi].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -2, scale: 1.1 }}
              className='text-white/70 hover:text-white transition-colors'
            >
              <Icon className='w-4 h-4' />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SocialNav;