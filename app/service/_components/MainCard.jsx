"use client";
import { Button } from "@/components/ui/button";
import { ChevronsRight, Heart, MessageSquareText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1">
        <div>
          <div className="shadow-md">
            <Image
              src="/01.jpg"
              alt='image'
              width="1000"
              height="1000"
              className="object-cover w-full h-auto transition-transform duration-300 ease-linear hover:scale-95 rounded"
            />
            <div className="px-3 md:px-8 pb-3 md:pb-8">
              <p className="text-xl md:text-2xl mt-4 font-semibold">
                About The Outpatient Surgery
              </p>
              <p className="py-4">
                Holisticly proize fullye tested reonshs rather next Compe
                productivate extensve awesome flexble mper Seames for traorm out
                of the box chanes through opportunities awesome infrastructures.
                Coaborativey Holistic proize fullye tested reonshs rather next
                Compe productivate extensve awesome flexbe mperng Seames for
                traorm out of the box chanes through awesome infrastructures
                enable awesome theme was Networks whereas eames for traorm out
                of the box chanes etworks whereas eames for traorm out of the
                box chanes etworks whereas eames for traorm out of the box
                chanes
              </p>
              <p className="text-xl md:text-2xl mt-4 font-semibold">
                What are the Risks of Open-Heart Surgery?
              </p>
              <p className="mt-4">
                Seames for traorm out of the box chanes through opportunities
                awesome infrastructures. Coaborativey Holistic proize fullye
                tested reonshs rather next Compe productivate
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <div>
                    <div className="flex justify-between items-center mt-8 hover:text-blue-600 hover:ml-2">
                      <Link
                        href=""
                        className="flex gap-1 justify-start items-center"
                      >
                        <ChevronsRight className="w-4" />
                        Echocardiography
                      </Link>
                      <p>Rs 600</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
                      <Link
                        href=""
                        className="flex gap-1 justify-start items-center"
                      >
                        <ChevronsRight className="w-4" />
                        Treadmill stress testing
                      </Link>
                      <p>Rs 700</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
                      <Link
                        href=""
                        className="flex gap-1 justify-start items-center"
                      >
                        <ChevronsRight className="w-4" />
                        Pacemaker checks
                      </Link>
                      <p>Rs 500</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
                      <Link
                        href=""
                        className="flex gap-1 justify-start items-center"
                      >
                        <ChevronsRight className="w-4" />
                        Holter monitoring
                      </Link>
                      <p>Rs 600</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
                      <Link
                        href=""
                        className="flex gap-1 justify-start items-center"
                      >
                        <ChevronsRight className="w-4" />
                        Implantable Cardiac Monitor
                      </Link>
                      <p>Rs 600</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
                      <Link
                        href=""
                        className="flex gap-1 justify-start items-center"
                      >
                        <ChevronsRight className="w-4" />
                        Electrophysiology (EP) Study
                      </Link>
                      <p>Rs 500</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-t-gray-300 hover:text-blue-600 hover:ml-2">
                      <Link
                        href=""
                        className="flex gap-1 justify-start items-center"
                      >
                        <ChevronsRight className="w-4" />
                        Holter monitoring
                      </Link>
                      <p>Rs 600</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
                      <Link
                        href=""
                        className="flex gap-1 justify-start items-center"
                      >
                        <ChevronsRight className="w-4" />
                        Implantable Cardiac Monitor
                      </Link>
                      <p>Rs 700</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
                      <Link
                        href=""
                        className="flex gap-1 justify-start items-center"
                      >
                        <ChevronsRight className="w-4" />
                        Electrophysiology (EP) Study
                      </Link>
                      <p>Rs 500</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
                      <Link
                        href=""
                        className="flex gap-1 justify-start items-center"
                      >
                        <ChevronsRight className="w-4" />
                        Pacemaker checks
                      </Link>
                      <p>Rs 600</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
                      <Link
                        href=""
                        className="flex gap-1 justify-start items-center"
                      >
                        <ChevronsRight className="w-4" />
                        Treadmill stress testing
                      </Link>
                      <p>Rs 600</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
                      <Link
                        href=""
                        className="flex gap-1 justify-start items-center"
                      >
                        <ChevronsRight className="w-4" />
                        Echocardiography
                      </Link>
                      <p>Rs 500</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl md:text-2xl mt-10 font-semibold">
                Awesome Doctors for Medical and Health
              </p>
              <p className="mt-3">
                Seames for traorm out of the box chanes through opportunities
                awesome infrastructures. Coaborativey Holistic proize fullye
                tested reonshs rather next Compe productivate
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div>
                  <div className="flex justify-start items-center gap-5 bg-white shadow-md px-4 py-6 border border-gray-100">
                    <Image
                      src="/d1.png"
                      alt='image'
                      width="300"
                      height="300"
                      className="w-20 md:w-24 h-20 md:h-24 object-cover rounded-full transform transition duration-500 ease-out hover:scale-95"
                    />
                    <div>
                      <p className="text-xl font-bold mb-3">Jason Kovalsky</p>
                      <p>Phone :658 222 127 964</p>
                      <p>Email :admin@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-start items-center gap-5 bg-white shadow-md px-4 py-6 border border-gray-100">
                    <Image
                      src="/d2.png"
                      alt='image'
                      width="300"
                      height="300"
                      className="w-20 md:w-24 h-20 md:h-24 object-cover rounded-full transform transition duration-500 ease-out hover:scale-95"
                    />
                    <div>
                      <p className="text-xl font-bold mb-3">Jason Kovalsky</p>
                      <p>Phone :658 222 127 964</p>
                      <p>Email :admin@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-start items-center gap-5 bg-white shadow-md px-4 py-6 border border-gray-100">
                    <Image
                      src="/d3.png"
                      alt='image'
                      width="300"
                      height="300"
                      className="w-20 md:w-24 h-20 md:h-24 object-cover rounded-full transform transition duration-500 ease-out hover:scale-95"
                    />
                    <div>
                      <p className="text-xl font-bold mb-3">Jason Kovalsky</p>
                      <p>Phone :658 222 127 964</p>
                      <p>Email :admin@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-start items-center gap-5 bg-white shadow-md px-4 py-6 border border-gray-100">
                    <Image
                      src="/d4.png"
                      alt='image'
                      width="300"
                      height="300"
                      className="w-20 md:w-24 h-20 md:h-24 object-cover rounded-full transform transition duration-500 ease-out hover:scale-95"
                    />
                    <div>
                      <p className="text-xl font-bold mb-3">Jason Kovalsky</p>
                      <p>Phone :658 222 127 964</p>
                      <p>Email :admin@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
