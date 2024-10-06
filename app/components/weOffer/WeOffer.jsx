import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WeOffer = () => {
  return (
    <div className="bg-[#f5f9ff] px-6 md:px-16 lg:px-28 md:pb-12">
      <div className="pt-16 md:pt-28">
        <p className="text-center text-2xl md:text-3xl">We Offer Specialized</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-4 pb-12 md:pb-16">
          Orthopedics To Meet Your Needs
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
        {/* Card 1 */}
        <div className="flex justify-center items-center px-3">
          <div className="px-6 py-8 bg-white shadow-lg">
            <Image src="/1 (1).png" alt="Medical Treatment" width={60} height={60} />
            <h1 className="text-lg md:text-xl font-bold mt-8">Medical Treatment</h1>
            <p className="my-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
              optio animi?
            </p>
            <Link
              href=""
              className="bg-white text-sm md:text-md hover:bg-white text-black font-bold hover:text-blue-600"
            >
              Read More
            </Link>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex justify-center items-center px-3">
          <div className="px-6 py-8 bg-white shadow-lg">
            <Image src="/2 (2).png" alt="Emergency Help" width={60} height={60} />
            <h1 className="text-lg md:text-xl font-bold mt-8">Emergency Help</h1>
            <p className="my-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
              optio animi?
            </p>
            <Link
              href=""
              className="bg-white text-sm md:text-md hover:bg-white text-black font-bold hover:text-blue-600"
            >
              Read More
            </Link>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex justify-center items-center px-3">
          <div className="px-6 py-8 bg-white shadow-lg">
            <Image src="/3 (1).png" alt="Medical Professionals" width={60} height={60} />
            <h1 className="text-lg md:text-xl font-bold mt-8">Medical Professionals</h1>
            <p className="my-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
              optio animi?
            </p>
            <Link
              href=""
              className="bg-white text-sm md:text-md hover:bg-white text-black font-bold hover:text-blue-600"
            >
              Read More
            </Link>
          </div>
        </div>
        {/* Card 4 */}
        <div className="flex justify-center items-center px-3">
          <div className="px-6 py-8 bg-white shadow-lg">
            <Image src="/4 (1).png" alt="Qualified Doctors" width={60} height={60} />
            <h1 className="text-lg md:text-xl font-bold mt-8">Qualified Doctors</h1>
            <p className="my-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
              optio animi?
            </p>
            <Link
              href=""
              className="bg-white text-sm md:text-md hover:bg-white text-black font-bold hover:text-blue-600"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
