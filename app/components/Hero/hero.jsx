"use client";

import { Button } from "@/components/ui/button";
import { ChevronsRight, Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Trusted by 10,000+ patients
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Bringing <span className="text-primary relative italic">
                Health
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span> To Life For Your Family
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the future of healthcare with our expert doctors and state-of-the-art facilities. Your well-being is our top priority.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
                className="rounded-full text-white font-bold px-8 py-7 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 gap-2"
              >
                Book Appointment <ChevronsRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-7 text-lg border-2 hover:bg-accent/5 gap-2 group transition-all">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Watch Story
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 border-t border-border/50">
              <div>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">Experts</p>
              </div>
            </div>
          </motion.div>

          {/* Image/Carousel Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-12"
          >
            <div className="relative z-10 bg-gradient-to-tr from-primary/10 to-accent/10 p-4 rounded-[2rem] shadow-2xl backdrop-blur-sm border border-white/20">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg animate-float">
                      <Image
                        src="/hp.jpg"
                        alt="Expert Doctor"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg animate-float animation-delay-1000">
                      <Image
                        src="/hp1.jpg"
                        alt="Modern Clinic"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <div className="hidden sm:block">
                  <CarouselPrevious className="left-4 bg-white/20 backdrop-blur-md border-white/40 hover:bg-white/40" />
                  <CarouselNext className="right-4 bg-white/20 backdrop-blur-md border-white/40 hover:bg-white/40" />
                </div>
              </Carousel>
            </div>
            
            {/* Floating Info Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 bg-background/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  ★
                </div>
                <div>
                  <p className="font-bold">Top Rated</p>
                  <p className="text-xs text-muted-foreground">Healthcare Provider 2024</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
