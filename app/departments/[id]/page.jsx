"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Phone, Mail, Clock, ShieldCheck, ChevronRight, Loader2 } from "lucide-react";
import { getDepartments } from "../../services/contentService";

const DepartmentDetailPage = () => {
  const params = useParams();
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const depts = await getDepartments();
        if (depts) {
          const found = depts.find((d) => d._id === params.id || d.value === params.id);
          if (found) {
            setDepartment(found);
          } else if (depts.length > 0) {
            setDepartment(depts[0]); // fallback to first dept if ID mismatch
          }
        }
      } catch (err) {
        console.error("Error fetching department detail:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f9ff]">
        <Loader2 className="w-12 h-12 animate-spin text-blue-600 mb-4" />
        <p className="text-gray-500 font-medium">Loading Department Details...</p>
      </div>
    );
  }

  if (!department) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f9ff] text-center px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Department Not Found</h1>
        <p className="text-gray-600 mb-8">We could not find the department you were looking for.</p>
        <Link href="/departments">
          <Button className="bg-blue-600 text-white px-8 py-4 rounded-xl">Back to All Departments</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f9ff] min-h-screen pb-24">
      {/* Banner */}
      <div className="bg-cover bg-center relative py-24 md:py-36 shadow-inner bg-gradient-to-r from-blue-900/90 to-blue-700/80" style={{ backgroundImage: `url(${department.image || '/pageheader.jpg'})` }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-300/30 text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
            Department of Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-xl mb-4">
            {department.title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light line-clamp-2 max-w-2xl mx-auto">
            Providing state-of-the-art diagnostic and therapeutic care with world-class medical specialists.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="container mx-auto px-6 flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href="/departments" className="hover:text-blue-600 transition-colors">Departments</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-blue-600 font-semibold">{department.title}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 md:px-16 lg:px-28 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Description & Features */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview & Specializations</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 whitespace-pre-line">
                {department.description}
              </p>
              
              <div className="border-t border-gray-100 pt-8 mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-blue-600 w-7 h-7" /> Key Highlights & Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {department.features?.map((feat, index) => (
                    <div key={index} className="flex items-center gap-3 bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50 hover:bg-blue-50 transition-colors">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800 text-md">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specialist Doctors Section */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Meet Our Lead Specialists</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "Dr. Jason Kovalsky", spec: department.title, img: "/d1.png", exp: "12+ Years" },
                  { name: "Dr. Sarah Jenkins", spec: department.title, img: "/d2.png", exp: "10+ Years" },
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
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book an Appointment</h3>
                <p className="text-gray-500 text-sm">Get priority access to our top specialists instantly.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 text-gray-700 font-medium">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Working Hours</p>
                    <p className="text-sm font-bold text-gray-800">24/7 Emergency & Outpatient</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 text-gray-700 font-medium">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Direct Hotline</p>
                    <p className="text-sm font-bold text-blue-600">+1 (800) 555-0199</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 text-gray-700 font-medium">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Department Email</p>
                    <p className="text-sm font-bold text-gray-800">{department.value || 'info'}@swasthya.com</p>
                  </div>
                </div>
              </div>

              <Link href="/register" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-7 rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/30 transition-all">
                  Schedule Consultation Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetailPage;
