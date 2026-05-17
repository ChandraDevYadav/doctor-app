"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import OurDepartment from "../components/OurDepartment/OurDepartment";
import { getDepartments } from "../services/contentService";
import { ChevronsRight, Phone, Mail, Loader2 } from "lucide-react";

const DepartmentsPage = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDept = async () => {
      try {
        const data = await getDepartments();
        if (data && data.length > 0) {
          setDepartments(data);
        }
      } catch (err) {
        console.error("Error fetching departments:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDept();
  }, []);

  return (
    <div className="bg-[#f5f9ff] min-h-screen">
      {/* Header Banner */}
      <div className="bg-cover bg-center relative py-20 md:py-32 shadow-inner bg-gradient-to-r from-blue-900/80 to-blue-600/60" style={{ backgroundImage: "url('/pageheader.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Our Specialized Departments
          </h1>
          <div className="flex justify-center items-center mt-4 text-white/90 text-sm md:text-lg font-medium gap-2">
            <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-300 font-semibold">Departments</span>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="container mx-auto px-6 md:px-16 lg:px-28 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-wider text-sm md:text-base">Comprehensive Care</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">Explore Medical Centers of Excellence</h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
          </div>
        ) : departments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <div key={dept._id || dept.value} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <span className="text-2xl font-bold text-blue-600 group-hover:text-white transition-colors">
                      {dept.title ? dept.title.charAt(0) : "D"}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{dept.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{dept.description}</p>
                </div>

                <div className="border-t border-gray-100 pt-6 mt-4">
                  <div className="space-y-2 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-500" />
                      <span>(123) 456-7890</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-500" />
                      <span>{dept.value || "contact"}@swasthya.com</span>
                    </div>
                  </div>

                  <Link href={`/departments/${dept._id}`}>
                    <button className="w-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2">
                      View Full Department <ChevronsRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">No departments found.</div>
        )}
      </div>

      {/* Tabs Section */}
      <OurDepartment />
    </div>
  );
};

export default DepartmentsPage;
