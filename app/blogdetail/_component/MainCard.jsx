"use client";
import { Button } from "@/components/ui/button";
import { ChevronsRight, Earth, FacebookIcon, Heart, InstagramIcon, LinkedinIcon, MessageSquareText, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
              A wonderf serenity has taken poesion of my entire souin like these
              sweet mornins sprin which enjoy
            </p>
            <p className="py-4">
              A wonderf serenity has taken poesion of my entire souin like these
              sweet mornins sprin which enjoy with my whole hear I am alone and
              feel the charm of existen spot which was creatie For the bliss of
              souls like mineingi am so happy my dear friend, so absoribed in
              the exquisite sense tranquil existence, that I neglect my
              talentsri I should bye incapable of drawin and sinle stroke A
              wonderful serenity has taken possession of my entire souing like
              these sweet mornins sprng enjoy with my whole heart. I am alone,
              and feel the charm of existthis spot which was creatied the bliss
              of souls like mineingi am so happy my dear friend, so absoribed in
              the exquisite sense tranquil existnce, that I neglect my talentsri
              I should bye incapable of drawin and single stroke enjoy with my
              whole heart. I am alone, and feel the charm of existencethis spot
              which was For the bliss of souls like mineingi am so happy my dear
              friend, so absoribed in the exquisite sense tranquil existence,
              that I neglect my talentsri I should bye incapable of drawing and
              single the present moment; and yet If feel that I never was a
              greater artst
            </p>
            <div className="grid grid-cols-5 justify-center gap-5 bg-blue-600 py-10 md:py-14 mt-4">
              <div className="">
                <div className="flex justify-center ml-4">
                  <Image
                    src="/code.png"
                    alt='image'
                    width="20"
                    height="20"
                    className="object-cover w-12 md:w-16 mt-1"
                  />
                </div>
              </div>
              <div className="col-span-4">
                <p className="text-white pr-6">
                  Steal into The inner Sanc Thro Myse Down Amon The Hall Gras
                  Buzz The Little World Amon The Staks And Grow Famar With Count
                  And Fies Then The Presence of The Almighty Among The Staks
                </p>
              </div>
            </div>
            <p className="mt-8">
              A wonderf serenity has taken poesion of my entire souin like these
              sweet mornins sprin which enjoy with my whole hear I am alone and
              feel the charm of existen spot which was creatie For the bliss of
              souls like mineingi am so happy my dear friend, so absoribed in
              the exquisite sense tranquil existence, that I neglect my
              talentsri I should bye incapable of drawin and sinle stroke A
              wonderful serenity has taken possession of my entire souing like
              these sweet mornins sprng enjoy with my whole heart. I am alone,
              and feel the charm of existthis spot which was creatied the bliss
              of souls like mineingi am so happy my dear friend, so absoribed in
              the exquisite sense tranquil existnce, that I neglect my talentsri
              I should bye incapable of drawin and single stroke enjoy with my
              whole heart. I am alone, and feel the charm of existencethis spot
              which was For present moment; and yet If feel that I never was a
              greater artst
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6 border-t border-t-gray-300 pt-6">
              <div className='col-span-5 md:col-span-3'>
              <div className='grid grid-cols-3 md:grid-cols-5 gap-2'>
              <div className='flex justify-center items-center rounded-sm bg-blue-700 px-6 py-2'>
              <Image
                    src="/price-tag.png"
                    alt='image'
                    width="20"
                    height="20"
                    className="w-6 h-6"
                  />
              </div>
                <Button className='border border-gray-300 bg-white text-black px-5 py-3'>Dantal</Button>
                <Button className='border border-gray-300 bg-white text-black px-5 py-3'>Health Care</Button>
                <Button className='border border-gray-300 bg-white text-black px-5 py-3'>Company</Button>
                <Button className='border border-gray-300 bg-white text-black px-5 py-3'>Corporate</Button>
              </div>
              </div>
              <div className='col-span-5 md:col-span-2 mt-3 md:mt-0'>
                <div className='flex justify-start md:justify-end items-center gap-3'>
                    <div className='bg-[#3b5998] hover:rounded-full p-2 text-white'>
                    <FacebookIcon/>
                    </div>
                    <div className='bg-[#ea4c89] hover:rounded-full p-2 text-white'>
                    <InstagramIcon/>
                    </div>
                    <div className='bg-[#55acee] hover:rounded-full p-2 text-white'>
                    <TwitterIcon/>
                    </div>
                    <div className='bg-[#007bb5] hover:rounded-full p-2 text-white'>
                    <LinkedinIcon/>
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
