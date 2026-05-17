"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronsRight, CheckCircle2, Phone, Mail, Clock, HelpCircle, HeartPulse, Stethoscope, Loader2, ChevronRight } from "lucide-react";
import { getServices } from "../../services/contentService";

const procedures = [
  { name: "Echocardiography & Doppler Study", price: "Rs 600" },
  { name: "Advanced Treadmill Stress Testing", price: "Rs 700" },
  { name: "Complete Pacemaker Evaluation", price: "Rs 500" },
  { name: "24-Hour Ambulatory Holter Monitoring", price: "Rs 600" },
  { name: "Implantable Cardiac Monitor Setup", price: "Rs 600" },
  { name: "Electrophysiology (EP) Diagnostic Study", price: "Rs 500" },
];

const ServiceDetailPage = () => {
  const params = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSvc = async () => {
      try {
        const services = await getServices();
        if (services) {
          const found = services.find((s) => s._id === params.id || s.title.toLowerCase().includes(params.id.toLowerCase()));
          if (found) {
            setService(found);
          } else if (services.length > 0) {
            setService(services[0]); // fallback to first service
          }
        }
      } catch (err) {
        console.error("Error fetching service details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSvc();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f9ff]">
        <Loader2 className="w-12 h-12 animate-spin text-blue-600 mb-4" />
        <p className="text-gray-500 font-medium">Loading Service Details...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f9ff] text-center px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-8">We could not find the medical service you were looking for.</p>
        <Link href="/service">
          <Button className="bg-blue-600 text-white px-8 py-4 rounded-xl">Explore All Services</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f9ff] min-h-screen pb-24">
      {/* Banner */}
      <div className="bg-cover bg-center relative py-24 md:py-36 shadow-inner bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-700/80" style={{ backgroundImage: `url(${service.image || '/01.jpg'})` }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-300/30 text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
            Advanced Care Protocol
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-xl mb-4">
            {service.title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light line-clamp-2 max-w-2xl mx-auto">
            Comprehensive diagnostic procedures, expert consultations, and reliable treatment programs.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="container mx-auto px-6 flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href="/service" className="hover:text-blue-600 transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-blue-600 font-semibold">{service.title}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 md:px-16 lg:px-28 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details & Procedures */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Our clinical workflows integrate precision diagnostics with patient-centered recovery plans. Each procedure is conducted in fully accredited medical centers utilizing high-fidelity instrumentation.
                </p>
              </div>

              {/* Pricing & Procedures Table */}
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2.5">
                  <HeartPulse className="text-blue-600 w-7 h-7" /> Diagnostic Procedures & Pricing
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {procedures.map((proc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-all">
                      <div className="flex items-center gap-3">
                        <ChevronsRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="font-semibold text-gray-800 text-sm">{proc.name}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs">{proc.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risks & FAQ */}
              <div className="border-t border-gray-100 pt-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2.5">
                  <HelpCircle className="text-blue-600 w-7 h-7" /> Frequently Asked Questions
                </h3>
                <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2">
                  <h4 className="font-bold text-gray-900 text-lg">What preparation is required before the procedure?</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Patients are advised to fast for 4-6 hours prior to specialized cardiac and diagnostic imaging. Please bring all previous medical records and current medication prescriptions.
                  </p>
                </div>
              </div>
            </div>

            {/* Specialist Doctors Section */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Assigned Clinical Specialists</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "Dr. Jason Kovalsky", spec: service.title, img: "/d1.png", exp: "12+ Years" },
                  { name: "Dr. Marcus Vance", spec: service.title, img: "/d2.png", exp: "15+ Years" },
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-gray-50/50">
                    <Image src={doc.img} alt={doc.name} width={90} height={90} className="rounded-2xl object-cover w-20 h-20 shadow-inner" />
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{doc.name}</h4>
                      <p className="text-blue-600 font-medium text-sm">{doc.spec}</p>
                      <p className="text-gray-500 text-xs mt-1">Exp: {doc.exp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar / Contact Card */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-28 space-y-8">
              <div className="text-center pb-6 border-b border-gray-100">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule Service</h3>
                <p className="text-gray-500 text-sm">Secure your diagnostic appointment online with immediate confirmation.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 text-gray-700 font-medium">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Availability</p>
                    <p className="text-sm font-bold text-gray-800">Mon - Sat (8:00 AM - 8:00 PM)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 text-gray-700 font-medium">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Patient Care Desk</p>
                    <p className="text-sm font-bold text-blue-600">+1 (800) 555-0199</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 text-gray-700 font-medium">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Inquiries</p>
                    <p className="text-sm font-bold text-gray-800">care@swasthya.com</p>
                  </div>
                </div>
              </div>

              <Link href="/register" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-7 rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/30 transition-all">
                  Book This Service Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
