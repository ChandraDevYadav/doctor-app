"use client";

import { Button } from "@/components/ui/button";
import { ChevronsRight, Star, Phone, Mail, Award } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { API_BASE_URL } from "../../config/api";

const ProfDoctor = () => {
  const [doctorsList, setDoctorsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/patients/doctors`);
        const data = await response.json();
        if (data.status === "success") {
          setDoctorsList(data.data.doctors);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  if (loading) return (
    <div className="py-24 container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-[400px] rounded-[2rem] bg-muted animate-pulse" />
      ))}
    </div>
  );

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-sm"
          >
            Our Specialists
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Meet Our Professional Doctors
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Access top-tier healthcare from experienced professionals dedicated to your well-being.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsList.map((doctor, index) => (
            <motion.div
              key={doctor._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card/50 backdrop-blur-md rounded-[2rem] border border-border/50 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={
                    doctor.userId.profileImage 
                      ? (doctor.userId.profileImage.startsWith('/') || doctor.userId.profileImage.startsWith('http') || doctor.userId.profileImage.startsWith('data:')
                          ? doctor.userId.profileImage 
                          : `/${doctor.userId.profileImage}`)
                      : "/hp2.jpg"
                  }
                  alt={doctor.userId.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Quick Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                  <div>
                    <h3 className="text-xl font-bold">{doctor.userId.name}</h3>
                    <p className="text-sm text-white/80">{doctor.specialization}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg text-xs">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-primary" />
                  <span>{doctor.experience}+ Years Experience</span>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <p className="text-lg font-bold text-primary">
                    ${doctor.fees} <span className="text-xs font-normal text-muted-foreground">/ Visit</span>
                  </p>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline" className="rounded-full w-8 h-8 hover:bg-primary hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full w-8 h-8 hover:bg-primary hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
                  className="w-full rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-all group-hover:shadow-lg active:scale-95"
                >
                  Book Profile
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center mt-16"
        >
          <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 rounded-full text-lg font-bold shadow-xl shadow-primary/20 gap-2 group">
            View All Doctors <ChevronsRight className="group-hover:translate-x-2 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfDoctor;
