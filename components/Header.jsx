"use client";

import React, { useState, useEffect } from "react";
import SocialNav from "../app/components/Navbar/SocialNav";
import VisitNav from "../app/components/Navbar/VisitNav";
import Navbar from "../app/components/Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import AppointmentForm from "../app/components/AppointmentForm/AppointmentForm";
import { X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    const handleOpenModal = () => setIsModalOpen(true);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("open-booking-modal", handleOpenModal);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-booking-modal", handleOpenModal);
    };
  }, []);

  return (
    <header className="w-full z-50">
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <SocialNav />
            <VisitNav />
          </motion.div>
        )}
      </AnimatePresence>
      
      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Navbar isScrolled={isScrolled} onBookClick={() => setIsModalOpen(true)} />
        
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-in fade-in duration-300" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl z-[101] animate-in zoom-in-95 fade-in duration-300">
            <div className="relative">
              <Dialog.Close className="absolute right-4 top-4 z-[102] w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors">
                <X className="w-6 h-6" />
              </Dialog.Close>
              <div className="max-h-[90vh] overflow-y-auto rounded-[3rem]">
                <AppointmentForm />
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
