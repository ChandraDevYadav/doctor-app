import { Button } from "@/components/ui/button";
import { ChevronsRight, Plus, Search, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideCom = () => {
  return (
    <div className='mt-32'>
      <div className="relative py-8 md:py-10 px-6 md:px-8 bg-[#f5f9ff] shadow-md rounded-md">
        <p className="text-2xl font-bold mb-4">Search keywords</p>
        <input
          type="text"
          placeholder="Search here..."
          className="w-full py-4 border border-gray-400 pl-4 rounded-sm"
        />
      </div>
      <div className="py-8 md:py-10 px-6 md:px-8 my-6 bg-[#f5f9ff] shadow-md rounded-md">
        <p className="text-2xl font-bold">Post Category</p>
        <div className="flex items-center gap-1 mt-3">
          <div className="w-12 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
        </div>
        <div>
          <div className="flex justify-between items-center mt-8">
            <Link href="" className="flex gap-1 justify-start items-center">
               Code Optimization
            </Link>
            <Plus className='w-5'/>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4">
            <Link href="" className="flex gap-1 justify-start items-center">
              Monitoring Ranking
            </Link>
            <Plus className='w-5'/>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4">
            <Link href="" className="flex gap-1 justify-start items-center">
               Target Strategy
            </Link>
            <Plus className='w-5'/>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4">
            <Link href="" className="flex gap-1 justify-start items-center">
               Nap Syndication
            </Link>
            <Plus className='w-5'/>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4">
            <Link href="" className="flex gap-1 justify-start items-center">
               SEO Support
            </Link>
            <Plus className='w-5'/>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4">
            <Link href="" className="flex gap-1 justify-start items-center">
               Email Marketing
            </Link>
            <Plus className='w-5'/>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4">
            <Link href="" className="flex gap-1 justify-start items-center">
               Engine Marketing
            </Link>
            <Plus className='w-5'/>
          </div>
        </div>
      </div>
      <div className="py-8 md:py-10 px-6 md:px-8 my-6 bg-[#f5f9ff] shadow-md rounded-md">
        <p className="text-2xl font-bold">Post Category</p>
        <div className="flex items-center gap-1 mt-3">
          <div className="w-12 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
        </div>
        <div>
          <div className="flex justify-between items-center mt-8 ">
          <Image src='/6.jpg' alt='image' width='50' height='50' className='w-20 h-20 rounded'/>
            <div className='pr-9 md:pr-7'>
                <Link href='' className='hover:text-blue-600 font-bold'>Product Text Here</Link>
                <div className='flex gap-1'>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <p>(3 review)</p>
                </div>
                <p>Rs 200</p>
            </div>
            
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 ">
          <Image src='/07.jpg' alt='image' width='50' height='50' className='w-20 h-20 rounded'/>
          <div className='pr-9 md:pr-7'>
                <Link href='' className='hover:text-blue-600 font-bold'>Product Text Here</Link>
                <div className='flex gap-1'>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <p>(3 review)</p>
                </div>
                <p>Rs 200</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 ">
          <Image src='/08.jpg' alt='image' width='50' height='50' className='w-20 h-20 rounded'/>
          <div className='pr-9 md:pr-7'>
                <Link href='' className='hover:text-blue-600 font-bold'>Product Text Here</Link>
                <div className='flex gap-1'>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <p>(3 review)</p>
                </div>
                <p>Rs 200</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 ">
          <Image src='/10.jpg' alt='image' width='50' height='50' className='w-20 h-20 rounded'/>
          <div className='pr-9 md:pr-7'>
                <Link href='' className='hover:text-blue-600 font-bold'>Product Text Here</Link>
                <div className='flex gap-1'>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <Star className='w-4 text-orange-500'/>
                    <p>(3 review)</p>
                </div>
                <p>Rs 200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCom;
