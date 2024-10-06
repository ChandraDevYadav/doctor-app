import { Button } from "@/components/ui/button";
import { ChevronsRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideCom = () => {
  return (
    <div>
      <div className="relative py-8 md:py-10 px-6 md:px-8 bg-[#f5f9ff] shadow-md rounded-md">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full py-4 border border-gray-400 pl-4 rounded-sm"
        />
        <Search className="absolute top-12 md:top-14 right-10 md:right-12" />
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
          <div className="flex justify-between items-center mt-8 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> Themefores
            </Link>
            <p>O5</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/>Codecanyon
            </Link>
            <p>27</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> Graphicriver
            </Link>
            <p>O7</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> Photodune
            </Link>
            <p>O9</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> Videohive
            </Link>
            <p>O8</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> 3docean
            </Link>
            <p>25</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> WordPress
            </Link>
            <p>20</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> Joomla
            </Link>
            <p>30</p>
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
          <div className="flex justify-between items-center mt-8 hover:text-blue-600 hover:ml-2">
            <div className='pr-9 md:pr-7'>
                <Link href='' className='hover:text-blue-600 font-bold'>Foula Revunr Andin Mare Ngern Tache Create</Link>
                <p className='mt-2'>March 24, 2024</p>
            </div>
            <Image src='/6.jpg' width='50' height='50' className='w-20 h-20 rounded'/>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
          <div className='pr-9 md:pr-7'>
                <Link href='' className='hover:text-blue-600 font-bold'>Revunr Andin Mare Ngern Tache Create Fanny</Link>
                <p className='mt-2'>March 24, 2024</p>
            </div>
            <Image src='/07.jpg' width='50' height='50' className='w-20 h-20 rounded'/>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
          <div className='pr-9 md:pr-7'>
                <Link href='' className='hover:text-blue-600 font-bold'>Andin Mare Ngern Tache Create Medical Psd</Link>
                <p className='mt-2'>March 24, 2024</p>
            </div>
            <Image src='/08.jpg' width='50' height='50' className='w-20 h-20 rounded'/>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
          <div className='pr-9 md:pr-7'>
                <Link href='' className='hover:text-blue-600 font-bold'>Foula Revunr Andin Mare Tache Create Fanny</Link>
                <p className='mt-2'>March 24, 2024</p>
            </div>
            <Image src='/10.jpg' width='50' height='50' className='w-20 h-20 rounded'/>
          </div>
        </div>
      </div>
      <div className="py-8 md:py-10 px-6 md:px-8 my-6 bg-[#f5f9ff] shadow-md rounded-md">
        <p className="text-2xl font-bold">Sathi Archives</p>
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
              <ChevronsRight className='w-4'/> January
            </Link>
            <p>2024</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/>February
            </Link>
            <p>2024</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> March
            </Link>
            <p>2024</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> April
            </Link>
            <p>2024</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> May
            </Link>
            <p>2024</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> August
            </Link>
            <p>2024</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> September
            </Link>
            <p>2024</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> October
            </Link>
            <p>2024</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> November
            </Link>
            <p>2024</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-t-gray-300 pt-4 hover:text-blue-600 hover:ml-2">
            <Link href="" className="flex gap-1 justify-start items-center">
              <ChevronsRight className='w-4'/> December
            </Link>
            <p>2024</p>
          </div>
        </div>
      </div>
      <div className="py-8 md:py-10 px-6 md:px-8 my-6 bg-[#f5f9ff] shadow-md rounded-md">
        <p className="text-2xl font-bold">Sathi Archives</p>
        <div className="flex items-center gap-1 mt-3">
          <div className="w-12 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
        </div>
        <div className='mt-8'>
          <div className="grid grid-cols-3 gap-2">
          <Image src='/6.jpg' width='100' height='100' className='w-20 h-20 rounded'/>
          <Image src='/07.jpg' width='100' height='100' className='w-20 h-20 rounded'/>
          <Image src='/08.jpg' width='100' height='100' className='w-20 h-20 rounded'/>
          <Image src='/09.jpg' width='100' height='100' className='w-20 h-20 rounded'/>
          <Image src='/10.jpg' width='100' height='100' className='w-20 h-20 rounded'/>
          <Image src='/4.jpg' width='100' height='100' className='w-20 h-20 rounded'/>
          <Image src='/14.jpg' width='100' height='100' className='w-20 h-20 rounded'/>
          <Image src='/15.jpg' width='100' height='100' className='w-20 h-20 rounded'/>
          <Image src='/16.jpg' width='100' height='100' className='w-20 h-20 rounded'/>
          </div>
        </div>
      </div>
      <div className="py-8 md:py-10 px-6 md:px-8 my-6 bg-[#f5f9ff] shadow-md rounded-md">
        <p className="text-2xl font-bold">Top Tags</p>
        <div className="flex items-center gap-1 mt-3">
          <div className="w-12 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
          <div className="w-1 h-1 rounded-lg bg-blue-600"></div>
        </div>
        <div className='mt-8'>
          <div className="grid grid-cols-3 gap-2">
            <Button className='bg-white px-8 text-black py-3 border border-gray-300 hover:bg-blue-600 hover:text-white'>envato</Button>
            <Button className='bg-white px-8 text-black py-3 border border-gray-300 hover:bg-blue-600 hover:text-white'>themeforest</Button>
            <Button className='bg-white px-8 text-black py-3 border border-gray-300 hover:bg-blue-600 hover:text-white'>codecanyon</Button>
            <Button className='bg-white px-8 text-black py-3 border border-gray-300 hover:bg-blue-600 hover:text-white'>videohive</Button>
            <Button className='bg-white px-8 text-black py-3 border border-gray-300 hover:bg-blue-600 hover:text-white'>audiojungle</Button>
            <Button className='bg-white px-8 text-black py-3 border border-gray-300 hover:bg-blue-600 hover:text-white'>3docean</Button>
            <Button className='bg-white px-8 text-black py-3 border border-gray-300 hover:bg-blue-600 hover:text-white'>envato</Button>
            <Button className='bg-white px-8 text-black py-3 border border-gray-300 hover:bg-blue-600 hover:text-white'>themeforest</Button>
            <Button className='bg-white px-8 text-black py-3 border border-gray-300 hover:bg-blue-600 hover:text-white'>codecanyon</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCom;
