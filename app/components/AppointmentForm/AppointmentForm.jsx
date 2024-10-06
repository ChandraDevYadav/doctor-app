import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import React from "react";

const AppointmentForm = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side with opening hours */}
        <div
          className="h-full bg-cover bg-left"
          style={{ backgroundImage: "url('/ab1.jpg')" }}
        >
          <div className="mt-12 md:mt-24 mx-8 md:ml-20 md:mr-12 pb-16 md:pb-24">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
              24 Hours <br /> Opening Our Services
            </h1>
            <div className="flex justify-between items-center border-b border-b-gray-100 py-2 md:py-4">
              <p className="text-white">Saturday</p>
              <p className="text-white">8:00 am-10:00 pm</p>
            </div>
            <div className="flex justify-between items-center border-b border-b-gray-100 py-2 md:py-4">
              <p className="text-white">Sunday</p>
              <p className="text-white">6:00 am-8:00 pm</p>
            </div>
            <div className="flex justify-between items-center border-b border-b-gray-100 py-2 md:py-4">
              <p className="text-white">Monday</p>
              <p className="text-white">6:00 am-2:00 pm</p>
            </div>
            <div className="flex justify-between items-center border-b border-b-gray-100 py-2 md:py-4">
              <p className="text-white">Tuesday</p>
              <p className="text-white">7:00 am-9:00 pm</p>
            </div>
            <div className="flex justify-between items-center border-b border-b-gray-100 py-2 md:py-4">
              <p className="text-white">Wednesday</p>
              <p className="text-white">10:00 am-12:00 pm</p>
            </div>
            <div className="flex justify-between items-center border-b border-b-gray-100 py-2 md:py-4">
              <p className="text-white">Thursday</p>
              <p className="text-white">2:00 am-6:00 pm</p>
            </div>
            <div className="flex justify-between items-center border-b border-b-gray-100 py-2 md:py-4">
              <p className="text-white">Friday</p>
              <p className="text-white">Closed</p>
            </div>
          </div>
        </div>

        {/* Right side with appointment form */}
        <div
          className="h-full bg-cover bg-left"
          style={{ backgroundImage: "url('/ab2.jpg')" }}
        >
          <div className="mt-12 md:mt-24 mx-8 md:ml-12 md:mr-20 pb-16 md:pb-24">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-14">
              Make An <br />
              Appointment Now
            </h1>
            <div className="flex flex-col space-y-6">
              {/* Name input */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full py-3 bg-transparent placeholder-white px-3 text-white focus:border outline-none border border-white"
              />
              {/* Phone input */}
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full py-3 bg-transparent placeholder-white px-3 text-white focus:border outline-none border border-white"
              />
              {/* Dropdown selection */}
              <select
                id="dropdown"
                className="block w-full py-[0.9rem] pl-3 placeholder-white text-white bg-transparent border border-white focus:outline-none focus:ring-2 focus:border-white"
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              {/* Date input */}
              <input
                type="date"
                placeholder="10/5/2024"
                className="w-full py-3 bg-transparent placeholder-white px-3 text-white focus:border outline-none border border-white"
              />
              {/* Submit button */}
              <Button className="gap-2 bg-white py-6 px-6 text-md text-[#0071ef] rounded-none">
                Appointment Now <ChevronsRight className="w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
