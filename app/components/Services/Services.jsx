import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="pb-14 px-6 md:px-12 lg:px-24 pt-16 md:pt-20 bg-[#f5f9ff]">
      <p className="text-2xl md:text-3xl text-center">We Are</p>
      <h1 className="text-3xl md:text-5xl font-semibold text-center mt-3 mb-10 md:mb-14">
        Offering Reliable Services
      </h1>
      <div className="space-y-8">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="shadow-sm">
            <Image
              src="/s1.jpg"
              alt="Family Health Solutions"
              width="500"
              height="500"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white shadow-sm">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold ml-6 md:ml-8 mt-8 md:mt-10">
                Family Health Solutions
              </h1>
              <p className="text-gray-400 ml-6 md:ml-8 mt-4 md:mt-5 text-sm md:text-base">
                Proced arrain manu produc rather conve quvat mantan this conven
                multscplinari testin motin was procedur aamng proced arrain manu
                produc rather conve quvat mantan this convenmultscplinari
                testiners motin was procedur arraming.
              </p>
              <Button className="bg-[#0071ef] text-white mt-6 md:mt-8 ml-6 md:ml-8 mb-8 md:mb-0 gap-2 px-6 md:px-8 py-4 md:py-6 rounded-sm">
                Read More <ChevronsRight />
              </Button>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Eye Care Solutions */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Image
                src="/s2.jpg"
                alt="Eye Care Solutions"
                width="300"
                height="300"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#3156a3] p-3 md:p-6">
              <h1 className="text-lg md:text-2xl font-bold text-white">
                Eye Care Solutions
              </h1>
              <p className="text-white mt-3 text-sm md:text-base">
                Cabor levera then andin the Qualit bwdh then covae thm Uabor
                evera then andin meqe Any value cordin.
              </p>
              <Button className="text-[#0071ef] bg-white mt-6 gap-2 px-3 md:px-6 py-4 rounded-sm">
                Read More <ChevronsRight />
              </Button>
            </div>
          </div>

          {/* Children’s Health */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Image
                src="/s3.jpg"
                alt="Children’s Health"
                width="300"
                height="300"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#379ff4] p-3 md:p-6">
              <h1 className="text-lg md:text-2xl font-bold text-white">
                Children’s Health
              </h1>
              <p className="text-white mt-3 text-sm md:text-base">
                Cabor levera then andin the Qualit bwdh then covae thm Uabor
                evera then andin meqe Any value cordin.
              </p>
              <Button className="text-[#0071ef] bg-white mt-6 gap-2 px-3 md:px-6 py-4 rounded-sm">
                Read More <ChevronsRight />
              </Button>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-sm">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold ml-6 md:ml-8 mt-8 md:mt-10">
                Family Health Solutions
              </h1>
              <p className="text-gray-400 ml-6 md:ml-8 mt-4 md:mt-5 text-sm md:text-base">
                Proced arrain manu produc rather conve quvat mantan this conven
                multscplinari testin motin was procedur aamng proced arrain manu
                produc rather conve quvat mantan this convenmultscplinari
                testiners motin was procedur arraming.
              </p>
              <Button className="bg-[#0071ef] text-white mt-6 md:mt-8 ml-6 md:ml-8 mb-5 md:mb-0 gap-2 px-6 md:px-8 py-4 md:py-6 rounded-sm">
                Read More <ChevronsRight />
              </Button>
            </div>
          </div>
          <div className="shadow-sm">
            <Image
              src="/s4.jpg"
              alt="Family Health Solutions"
              width="500"
              height="500"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
