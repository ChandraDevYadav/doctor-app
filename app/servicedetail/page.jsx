"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getServices } from "../services/contentService";
import { ChevronsRight, Loader2 } from "lucide-react";

const ServiceListingPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSvc = async () => {
      try {
        const data = await getServices();
        if (data && data.length > 0) {
          setServices(data);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSvc();
  }, []);

  return (
    <div className="bg-[#f5f9ff] min-h-screen pb-24">
      {/* Banner */}
      <div className="bg-cover bg-center relative py-20 md:py-32 shadow-inner bg-gradient-to-r from-blue-900/80 to-blue-600/60" style={{ backgroundImage: "url('/pageheader.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Our Medical Services
          </h1>
          <div className="flex justify-center items-center mt-4 text-white/90 text-sm md:text-lg font-medium gap-2">
            <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-300 font-semibold">Services</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 md:px-16 lg:px-28 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-wider text-sm md:text-base">Advanced Healthcare</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">Explore Our Specialized Medical Services</h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
          </div>
        ) : services.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc._id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
                <div className="h-56 w-full relative overflow-hidden">
                  <Image src={svc.image || "/s1.jpg"} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{svc.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{svc.description}</p>
                  </div>
                  <Link href={`/servicedetail/${svc._id}`} className="block mt-4">
                    <button className="w-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2">
                      View Service Details <ChevronsRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">No services found.</div>
        )}
      </div>
    </div>
  );
};

export default ServiceListingPage;