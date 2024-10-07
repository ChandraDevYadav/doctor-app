import { Button } from "@/components/ui/button";
import { Calendar, ChevronsRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideCom = () => {
  return (
    <div>
      <div className="py-8 md:py-10 px-6 md:px-8 my-6 bg-[#f5f9ff] shadow-md rounded-md">
        <p className="text-2xl font-bold">Our Departments</p>
        <div className="flex items-center gap-1 mt-3">
          <div className="w-12 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
        </div>
        <div>
          <div className="flex justify-between items-center mt-8 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              Outpatient Surgery
            </Link>
            <p>
              <ChevronsRight className="w-4" />
            </p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              Cardiac Clinicy
            </Link>
            <p>
              <ChevronsRight className="w-4" />
            </p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              Ophthalmology Clinic
            </Link>
            <p>
              <ChevronsRight className="w-4" />
            </p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              Gynaecological Clinic
            </Link>
            <p>
              <ChevronsRight className="w-4" />
            </p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              Outpatient Rehabilitation
            </Link>
            <p>
              <ChevronsRight className="w-4" />
            </p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              Laryngological Clinic
            </Link>
            <p>
              <ChevronsRight className="w-4" />
            </p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              Pediatric Clinic
            </Link>
            <p>
              <ChevronsRight className="w-4" />
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 md:py-10 px-6 md:px-8 my-6 bg-[#f5f9ff] shadow-md rounded-md">
        <p className="text-2xl font-bold">Our Opening Timetable</p>
        <div className="flex items-center gap-1 mt-3">
          <div className="w-12 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
        </div>
        <div>
          <div className="flex justify-between items-center mt-8 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className="w-4" /> Satarday
            </Link>
            <p>08:00am-10:00pm</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className="w-4" />
              Sunday
            </Link>
            <p>06:00am-08:00pm</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className="w-4" /> Monday
            </Link>
            <p>06:00am-02:00pm</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className="w-4" /> Tuesday
            </Link>
            <p>07:00am-09:00pm</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className="w-4" /> Wednesday
            </Link>
            <p>08:00am-12:00pm</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className="w-4" /> Thrusday
            </Link>
            <p>02:00am-06:00pm</p>
          </div>
        </div>
      </div>
      <div className="py-8 md:py-10 px-6 md:px-8 my-6 bg-[#f5f9ff] shadow-md rounded-md">
        <p className="text-2xl font-bold">Appointment Now</p>
        <div className="flex items-center gap-1 mt-3">
          <div className="w-12 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-2">
            <div>
            <div className="flex flex-col space-y-6">
              {/* Name input */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full py-3 bg-transparent placeholder-black px-3 rounded text-white focus:border outline-none border border-gray-300"
              />
              {/* Phone input */}
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full py-3 bg-transparent placeholder-black px-3 rounded text-white focus:border outline-none border border-gray-300"
              />
              {/* Dropdown selection */}
              <select
                id="dropdown"
                className="block w-full py-[0.9rem] pl-3 placeholder-white rounded text-black bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:border-white"
              >
                <option value="">Select Departments</option>
                <option value="option1">Outpatient Surgery</option>
                <option value="option2">Cardiac Clinicy</option>
                <option value="option3">Ophthalmology Clinic</option>
                <option value="option3">Gynaecological Clinic</option>
                <option value="option3">Outpatient Rehabilitation</option>
                <option value="option3">Laryngological Clinic</option>
                <option value="option3">Pediatric Clinic</option>
              </select>
              {/* Date input */}
              <input
                type="date"
                placeholder="10/5/2024"
                className="w-full py-3 bg-transparent rounded placeholder-black px-3 text-black focus:border outline-none border border-gray-300"
              />
              {/* Submit button */}
              <Button className="gap-2 text-white py-6 px-6 text-md border border-gray-300 bg-[#0071ef] rounded">
                Appointment Now <ChevronsRight className="w-4" />
              </Button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCom;
