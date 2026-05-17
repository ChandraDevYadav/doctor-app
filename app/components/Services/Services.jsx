"use client";

import { Button } from "@/components/ui/button";
import { ChevronsRight, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getServices } from "../../services/contentService";

const fallbackServices = [
  {
    _id: "1",
    title: "Family Health Solutions",
    description: "Proced arrain manu produc rather conve quvat mantan this conven multscplinari testin motin was procedur aamng proced arrain manu produc rather conve quvat mantan this convenmultscplinari testiners motin was procedur arraming.",
    image: "/s1.jpg",
    layoutType: "card",
  },
  {
    _id: "2",
    title: "Eye Care Solutions",
    description: "Cabor levera then andin the Qualit bwdh then covae thm Uabor evera then andin meqe Any value cordin.",
    image: "/s2.jpg",
    bgColor: "#3156a3",
    layoutType: "split",
  },
  {
    _id: "3",
    title: "Children’s Health",
    description: "Cabor levera then andin the Qualit bwdh then covae thm Uabor evera then andin meqe Any value cordin.",
    image: "/s3.jpg",
    bgColor: "#379ff4",
    layoutType: "split",
  },
  {
    _id: "4",
    title: "Family Health Solutions",
    description: "Proced arrain manu produc rather conve quvat mantan this conven multscplinari testin motin was procedur aamng proced arrain manu produc rather conve quvat mantan this convenmultscplinari testiners motin was procedur arraming.",
    image: "/s4.jpg",
    layoutType: "card",
  },
];

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSvc = async () => {
      try {
        const data = await getServices();
        if (data && data.length > 0) {
          setServices(data);
        } else {
          setServices(fallbackServices);
        }
      } catch (err) {
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    };
    fetchSvc();
  }, []);

  if (loading) {
    return (
      <div className="pb-14 px-6 md:px-12 lg:px-24 pt-16 md:pt-20 bg-[#f5f9ff] flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-10 h-10 animate-spin text-[#0071ef] mb-4" />
        <p className="text-gray-500 font-medium">Loading Reliable Services...</p>
      </div>
    );
  }

  const activeServices = services.length > 0 ? services : fallbackServices;
  const cardServices = activeServices.filter((s) => s.layoutType === "card");
  const splitServices = activeServices.filter((s) => s.layoutType === "split");

  return (
    <div className="pb-14 px-6 md:px-12 lg:px-24 pt-16 md:pt-20 bg-[#f5f9ff]">
      <p className="text-2xl md:text-3xl text-center">We Are</p>
      <h1 className="text-3xl md:text-5xl font-semibold text-center mt-3 mb-10 md:mb-14">
        Offering Reliable Services
      </h1>
      <div className="space-y-8">
        {/* First Row: Card Service 0 */}
        {cardServices[0] && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full min-h-[300px] relative">
              <Image
                src={cardServices[0].image || "/s1.jpg"}
                alt={cardServices[0].title}
                width={600}
                height={500}
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
            <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
                {cardServices[0].title}
              </h1>
              <p className="text-gray-600 mt-4 md:mt-6 text-sm md:text-base leading-relaxed">
                {cardServices[0].description}
              </p>
              <div>
                <Link href={`/servicedetail/${cardServices[0]._id}`}>
                  <Button className="bg-[#0071ef] hover:bg-blue-700 text-white mt-8 gap-2 px-8 py-6 rounded-xl font-semibold shadow-lg shadow-blue-500/20 transition-all">
                    Read More <ChevronsRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Second Row: Split Services */}
        {splitServices.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {splitServices.map((svc) => (
              <div key={svc._id} className="grid grid-cols-1 sm:grid-cols-2 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="min-h-[250px] relative">
                  <Image
                    src={svc.image || "/s2.jpg"}
                    alt={svc.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center" style={{ backgroundColor: svc.bgColor || "#3156a3" }}>
                  <h1 className="text-xl md:text-2xl font-bold text-white">
                    {svc.title}
                  </h1>
                  <p className="text-white/90 mt-3 text-sm md:text-base leading-relaxed">
                    {svc.description}
                  </p>
                  <div>
                    <Link href={`/servicedetail/${svc._id}`}>
                      <Button className="text-[#0071ef] bg-white hover:bg-gray-100 mt-6 gap-2 px-6 py-5 rounded-xl font-bold shadow transition-all">
                        Read More <ChevronsRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Third Row: Card Service 1 */}
        {cardServices[1] && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-white p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
                {cardServices[1].title}
              </h1>
              <p className="text-gray-600 mt-4 md:mt-6 text-sm md:text-base leading-relaxed">
                {cardServices[1].description}
              </p>
              <div>
                <Link href={`/servicedetail/${cardServices[1]._id}`}>
                  <Button className="bg-[#0071ef] hover:bg-blue-700 text-white mt-8 gap-2 px-8 py-6 rounded-xl font-semibold shadow-lg shadow-blue-500/20 transition-all">
                    Read More <ChevronsRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full min-h-[300px] relative order-1 md:order-2">
              <Image
                src={cardServices[1].image || "/s4.jpg"}
                alt={cardServices[1].title}
                width={600}
                height={500}
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
