import { Clock, Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const VisitNav = () => {
  return (
    <div className='hidden md:block'>
      <div className="grid grid-cols-3 bg-white py-3">
      <div>
        <div className="flex justify-center items-center gap-4">
          <Image src="/hlo1.png" alt="" width="50" height="50" />
          <div>
            <h1 className="text-[#0071ef] font-bold text-3xl">Swasthya</h1>
            <p className="text-[#0071ef] text-center text-lg">Sathi</p>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex justify-start items-center gap-8">
        <div className="flex justify-center items-center gap-5">
          <Image src="/sp.png" alt="" width="40" height="40" />
          <div>
            <p className="text-gray-400 text-[16px]">Number :</p>
            <p className="text-black font-bold text-md">+977-9805912060</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Image src="/en.png" alt="" width="40" height="40" />
          <div>
            <p className="text-gray-400 text-[16px]">Email :</p>
            <p className="text-black font-bold text-md">
              yadavchandradev4@gmail.com
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Image src="/lo.png" alt="" width="40" height="40" />
          <div>
            <p className="text-gray-400 text-[16px]">Address :</p>
            <p className="text-black font-bold text-md">
              Bhattachowk-1 Biratnagar Nepal
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VisitNav;
