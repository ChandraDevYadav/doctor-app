import { ChevronsRight, Globe, Home, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-left pt-24 px-4 sm:px-10 md:px-20 lg:px-40"
      style={{ backgroundImage: "url('/bg1.png')" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-16 gap-8">
        <div>
          <h1 className='text-3xl sm:text-2xl font-bold mb-5'>Contact Info</h1>
          <p className='mb-4'>
            Rapidiously seize wireless strategic theme areas and corporate testing procedures. Uniquely
          </p>
          <ul>
            <li className='flex gap-3 mb-4'>
              <Home className='w-4 text-blue-600' />
              Bhattachowk-1 Biratnagar Nepal
            </li>
            <li className='flex gap-3 mb-4'>
              <Phone className='w-4 text-blue-600' />
              +977-9805912060, 021-8000
            </li>
            <li className='flex gap-3 mb-4'>
              <Link className='flex gap-2 hover:text-blue-600' href=''>
                <MessageCircle className='w-4 text-blue-600' />
                info@clientgmail.com
              </Link>
            </li>
            <li className='flex gap-3'>
              <Link className='flex gap-2 hover:text-blue-600' href=''>
                <Globe className='w-4 text-blue-600' />
                chandra@visit.com
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className='text-3xl sm:text-2xl font-bold mb-6'>Our Doctors</h1>
          <ul>
            {['Dr. Nick Sims', 'Dr. Michael Linden', 'Dr. Max Turner', 'Dr. Amy Adams', 'Dr. Julia Jameson'].map((doctor, index) => (
              <li key={index} className='flex gap-3 mb-4'>
                <Link className='flex gap-2 hover:ml-3 hover:text-blue-600' href=''>
                  <ChevronsRight className='w-4' />
                  {doctor}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className='text-3xl sm:text-2xl font-bold mb-6'>Our Services</h1>
          <ul>
            {['Outpatient Surgery', 'Cardiac Clinic', 'Ophthalmology Clinic', 'Gynaecological Clinic', 'Outpatient Rehabilitation'].map((service, index) => (
              <li key={index} className='flex gap-3 mb-4'>
                <Link className='flex gap-2 hover:ml-3 hover:text-blue-600' href=''>
                  <ChevronsRight className='w-4' />
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className='text-3xl sm:text-2xl font-bold mb-6'>Opening Hours</h1>
          <ul>
            {[
              { day: "Saturday", time: "8:00 am-10:00 pm" },
              { day: "Sunday", time: "6:00 am-8:00 pm" },
              { day: "Monday", time: "6:00 am-2:00 pm" },
              { day: "Tuesday", time: "7:00 am-9:00 pm" },
              { day: "Wednesday", time: "10:00 am-12:00 pm" },
              { day: "Thursday", time: "2:00 am-6:00 pm" },
            ].map((hour, index) => (
              <li key={index} className='flex justify-between items-center mb-4'>
                <p>{hour.day}</p>
                <p>{hour.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='flex justify-center items-center py-10 border-t border-t-gray-200'>
        <p className='text-center text-sm'>
          Copyright © 2021 Swasthya. Designed by ChandraDev
        </p>
      </div>
    </div>
  );
};

export default Footer;
