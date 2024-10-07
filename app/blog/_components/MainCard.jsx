"use client";
import { ChevronsRight, Heart, MessageSquareText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { CarouselPlugin } from "./CarouselPlugin";

const MainCard = () => {
  return (
    <div className="grid grid-cols-1">
      <div>
        <div className="shadow-md">
          <Image
            src="/mcard.jpg"
            alt='image'
            width="1000"
            height="1000"
            className="object-cover w-full h-auto transition-transform duration-300 ease-linear hover:scale-95 rounded"
          />
          <div className="px-3 md:px-8 pb-3 md:pb-8">
            <p className="py-4">
              By <strong>Admin</strong> March 24, 2021
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              Uompe Qrear High Ecent Nche Without Some PrinIc Uomp Without Some
              Qreari High Ecent
            </p>
            <p className="py-4">
              Rapidious qntegrate distrbuted supply chains throuih marke
              position bestn practces chain marke positonn bestin practcer
              ieractvel fashon and sound qources forin iteractve fashion bestin
              practce ieractve and sound qources for.
            </p>
            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
              <Link href="" className="flex items-center gap-1">
                Read More <ChevronsRight />
              </Link>
              <div className="flex gap-3">
                <div className="flex gap-1 md:gap-2 items-center">
                  <Heart className="w-4 md:w-5" />
                  <p className="text-sm font-medium md:text-lg">12 Like</p>
                </div>
                <div className="flex gap-1 md:gap-2 items-center">
                  <MessageSquareText className="w-4 md:w-5" />
                  <p className="text-sm font-medium md:text-lg">24 Comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="shadow-md mt-5">
          <CarouselPlugin />
          <div className="px-3 md:px-8 pb-3 md:pb-8">
            <p className="pb-4">By Admin March 24, 2021</p>
            <p className="text-xl md:text-2xl font-semibold">
              Uompe Qrear High Ecent Nche Without Some PrinIc Uomp Without Some
              Qreari High Ecent
            </p>
            <p className="py-4">
              Rapidious qntegrate distrbuted supply chains throuih marke
              position bestn practces chain marke positonn bestin practcer
              ieractvel fashon and sound qources forin iteractve fashion bestin
              practce ieractve and sound qources for.
            </p>
            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
              <Link href="" className="flex items-center gap-1">
                Read More <ChevronsRight />
              </Link>
              <div className="flex gap-3">
                <div className="flex gap-1 md:gap-2 items-center">
                  <Heart className="w-4 md:w-5" />
                  <p className="text-sm font-medium md:text-lg">12 Like</p>
                </div>
                <div className="flex gap-1 md:gap-2 items-center">
                  <MessageSquareText className="w-4 md:w-5" />
                  <p className="text-sm font-medium md:text-lg">24 Comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-8">
        <div className="shadow-md">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/BtN-goy9VOY"
              title="Medical Video: The Immune System Explained"
              className="absolute top-0 left-0 w-full h-full object-cover"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-2 text-center">
            <a
              href="https://www.youtube.com/watch?v=BtN-goy9VOY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Watch on YouTube
            </a>
          </div>

          <div className="px-3 md:px-8 pb-3 md:pb-8">
            <p className="py-4">
              By <strong>Admin</strong> March 24, 2021
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              Uompe Qrear High Ecent Nche Without Some PrinIc Uomp Without Some
              Qreari High Ecent
            </p>
            <p className="py-4">
              Rapidious qntegrate distrbuted supply chains throuih marke
              position bestn practces chain marke positonn bestin practcer
              ieractvel fashon and sound qources forin iteractve fashion bestin
              practce ieractve and sound qources for.
            </p>
            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
              <Link href="" className="flex items-center gap-1">
                Read More <ChevronsRight />
              </Link>
              <div className="flex gap-3">
                <div className="flex gap-1 md:gap-2 items-center">
                  <Heart className="w-4 md:w-5" />
                  <p className="text-sm font-medium md:text-lg">12 Like</p>
                </div>
                <div className="flex gap-1 md:gap-2 items-center">
                  <MessageSquareText className="w-4 md:w-5" />
                  <p className="text-sm font-medium md:text-lg">24 Comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="shadow-md mt-6 md:mt-8">
          <div className='bg-blue-600 py-10 md:py-14'>
          <div className='flex justify-center items-center'>
            <Image
              src="/code.png"
              alt='image'
              width="50"
              height="50"
              className="object-cover w-24"
            />
            </div>
            <p className='text-white text-center font-semibold px-6 md:px-12 mt-6'>
              Rapidious qntegrate distrbuted supply chains throuih marke
              position bestn practces chain marke positonn bestin practcer
              ieractvel fashon and sound qources forin iteractve fashion bestin
              practce ieractve and sound qources for.
            </p>
          </div>
          <div className="px-3 md:px-8 pb-3 md:pb-8">
            <p className="py-4">
              By <strong>Admin</strong> March 24, 2021
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              Uompe Qrear High Ecent Nche Without Some PrinIc Uomp Without Some
              Qreari High Ecent
            </p>
            <p className="py-4">
              Rapidious qntegrate distrbuted supply chains throuih marke
              position bestn practces chain marke positonn bestin practcer
              ieractvel fashon and sound qources forin iteractve fashion bestin
              practce ieractve and sound qources for.
            </p>
            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
              <Link href="" className="flex items-center gap-1">
                Read More <ChevronsRight />
              </Link>
              <div className="flex gap-3">
                <div className="flex gap-1 md:gap-2 items-center">
                  <Heart className="w-4 md:w-5" />
                  <p className="text-sm font-medium md:text-lg">12 Like</p>
                </div>
                <div className="flex gap-1 md:gap-2 items-center">
                  <MessageSquareText className="w-4 md:w-5" />
                  <p className="text-sm font-medium md:text-lg">24 Comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='my-8 md:my-12'>
      <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
      </div>
    </div>
  );
};

export default MainCard;
