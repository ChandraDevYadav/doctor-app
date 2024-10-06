'use client'
import Image from "next/image";
import React from "react";

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-200">
      <div className="marquee flex animate-marquee gap-4 sm:gap-8 md:gap-12 lg:gap-16 py-4 sm:py-6 lg:py-8">
        <Image src='/m1.png' width='40' height='40' alt='' className='object-cover' />
        <Image src='/m2.jpg' width='40' height='40' alt='' className='object-cover' />
        <Image src='/m3.png' width='40' height='40' alt='' className='object-cover' />
        <Image src='/m5.png' width='40' height='40' alt='' className='object-cover' />
        <Image src='/m6.jpg' width='40' height='40' alt='' className='object-cover' />
        <Image src='/m7.png' width='40' height='40' alt='' className='object-cover' />
        <Image src='/m8.png' width='40' height='40' alt='' className='object-cover' />
        <Image src='/m7.png' width='40' height='40' alt='' className='object-cover' />
      </div>
    </div>
  );
};

export default Marquee;
