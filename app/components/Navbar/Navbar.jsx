"use client";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className='hidden md:block sticky top-0 w-full z-10'>
      <div className="grid grid-cols-2 justify-end items-center py-3 pl-40 bg-[#0071ef]">
      <div>
        <div className="flex justify-start items-center gap-5">
          <ul className="flex gap-10 text-md font-bold text-b-white text-white">
          <li className="text-[14px]">
            <Link href="/" className="">
                Home
              </Link>
            </li>
            <li className="text-[14px]">
            <Link href="/departments" className="">
                Departments
              </Link>
            </li>
            <li className="text-[14px]">
            <DropdownMenu>
                <DropdownMenuTrigger className='focus:outline-none'>
                  <p className="">
                    Doctors
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                  <Link href="/pages/doctor" className="">
                    Doctors
                  </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                  <Link href="/pages/doctordetail" className="">
                    Doctors Details
                  </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="text-[14px]">
            <DropdownMenu>
                <DropdownMenuTrigger className='focus:outline-none'>
                  <p className="">
                    Services
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><Link href="/service" className="">
                  Service
                  </Link></DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Link href="/servicedetail" className="">
                  Service Detail
                  </Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="text-[14px]">
            <DropdownMenu>
                <DropdownMenuTrigger className='focus:outline-none'>
                  <p className="">
                    Shop
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><Link href="/shop" className="">
                  Shop
                  </Link></DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Link href="/shopdetail" className="">
                  Shop Detail
                  </Link></DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Link href="/shopcart" className="">
                  Shop Cart
                  </Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="text-[14px]">
            <DropdownMenu>
                <DropdownMenuTrigger className='focus:outline-none'>
                  <p className="">
                    Blog
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><Link href="/blog" className="">
                  Blog
                  </Link></DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Link href="/blogdetail" className="">
                  Blog Detail
                  </Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="text-[14px]">
            <DropdownMenu>
                <DropdownMenuTrigger className='focus:outline-none'>
                  <p className="">
                    Gallery
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><Link href="/pages/gallery" className="">
                  Gallery
                  </Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
      </div>
      <div className>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-baseline w-2/4 relative gap-4 pr-6">
            <input
              type="text"
              placeholder="Search Here"
              className="w-full pl-3 py-2 rounded-full bg-white opacity-30 text-white"
            />
            <Search className="text-white absolute top-2 right-12 w-5" />
          </div>
          <div className="relative border-2 border-white rounded-full p-2">
            <Image src="/cart.png" alt="" width="35" height="35" />
            <div className="w-3 h-3 rounded-full bg-red-500 absolute top-0 left-9"></div>
          </div>
        </div>
      </div>
    </div>

    </div> 
     );
};

export default Navbar;
