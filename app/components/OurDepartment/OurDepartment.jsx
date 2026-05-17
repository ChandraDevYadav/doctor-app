"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, ChevronsRight, Loader2 } from "lucide-react";
import { getDepartments } from "../../services/contentService";

const fallbackTabData = [
  {
    value: "rhinology1",
    title: "Speciality Rhinology 1",
    tabimage: "/01.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/07.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology2",
    title: "Speciality Rhinology 2",
    tabimage: "/02.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/08.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology3",
    title: "Speciality Rhinology 3",
    tabimage: "/03.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/09.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology4",
    title: "Speciality Rhinology 4",
    tabimage: "/04.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/10.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology5",
    title: "Speciality Rhinology 5",
    tabimage: "/05.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/5.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology6",
    title: "Speciality Rhinology 6",
    tabimage: "/06.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/6.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology7",
    title: "Speciality Rhinology 7",
    tabimage: "/07.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/4.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology8",
    title: "Speciality Rhinology 8",
    tabimage: "/08.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/07.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology9",
    title: "Speciality Rhinology 9",
    tabimage: "/09.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/08.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
];

const OurDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDept = async () => {
      try {
        const data = await getDepartments();
        if (data && data.length > 0) {
          setDepartments(data);
        } else {
          setDepartments(fallbackTabData);
        }
      } catch (err) {
        setDepartments(fallbackTabData);
      } finally {
        setLoading(false);
      }
    };
    fetchDept();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#f5f9ff] px-4 md:px-10 lg:px-28 py-20 flex flex-col items-center justify-center min-h-[500px]">
        <Loader2 className="w-12 h-12 animate-spin text-[#0071ef] mb-4" />
        <p className="text-gray-500 font-medium">Loading Best Departments...</p>
      </div>
    );
  }

  const activeTabs = departments.length > 0 ? departments : fallbackTabData;

  return (
    <div className="bg-[#f5f9ff] px-4 md:px-10 lg:px-28 pb-16 md:pb-16">
      <div className="pt-12 md:pt-20">
        <p className="text-center text-xl md:text-3xl">We Are The</p>
        <h1 className="text-2xl md:text-5xl font-bold text-center mt-4 pb-8 md:pb-16">
          Best Our Departments Centers
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 w-full">
          <div>
            <Tabs defaultValue={activeTabs[0]?.value || "rhinology1"} className="w-full">
              <TabsList className="grid grid-cols-2 md:flex md:py-14 gap-3 h-[33rem] md:h-0 overflow-x-auto overflow-y-hidden bg-none">
                {activeTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="p-4 md:p-6 hover:bg-white/50 transition-all rounded-xl"
                  >
                    <div>
                      <Image
                        src={tab.tabimage || "/01.png"}
                        width={50}
                        height={50}
                        alt={tab.title}
                        className="object-contain"
                      />
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              {activeTabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
                    <div className="flex flex-col justify-center">
                      <div>
                        <h1 className="text-xl md:text-3xl font-bold mx-5 md:mx-10 mt-8 md:mt-12 text-gray-900">
                          {tab.title}
                        </h1>
                        <p className="font-medium text-gray-600 leading-relaxed mx-5 md:mx-10 mt-4">
                          {tab.description}
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 mx-5 md:mx-10 gap-y-3 my-6 md:my-8">
                          {tab.features?.map((feature) => (
                            <li
                              key={feature}
                              className="font-medium text-gray-700 flex items-center gap-2.5 text-sm md:text-base"
                            >
                              <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3.5 h-3.5 text-[#0071ef]" />
                              </div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-4 mx-5 md:mx-10 mb-8 md:mb-12">
                          <Link href="/register">
                            <Button className="bg-[#0071ef] hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-6 font-semibold flex justify-center items-center text-sm md:text-md gap-2 shadow-lg shadow-blue-500/20 rounded-xl transition-all">
                              Appointment Now <ChevronsRight className="text-white w-5 h-5" />
                            </Button>
                          </Link>
                          <Link href={`/departments/${tab._id || tab.value}`}>
                            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 md:px-8 md:py-6 font-semibold flex justify-center items-center text-sm md:text-md gap-2 rounded-xl transition-all">
                              View Details <ChevronsRight className="w-5 h-5" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center justify-center p-4 md:p-6 bg-gray-50">
                      <div className="w-full h-full relative overflow-hidden rounded-xl shadow-md">
                        <Image
                          src={tab.image || "/07.jpg"}
                          width={600}
                          height={600}
                          className="w-full h-full object-cover min-h-[350px]"
                          alt={tab.title}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDepartment;
