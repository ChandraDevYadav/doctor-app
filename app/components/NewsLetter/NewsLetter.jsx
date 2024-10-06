import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const NewsLetter = () => {
  return (
    <div className='bg-[#0071ef]'>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center py-12">
        <h1 className='text-3xl md:text-5xl font-bold text-white text-center mb-4'>
          Join Our Newsletter
        </h1>
        <div className='flex justify-center items-center relative w-full max-w-md px-3 md:px-0'>
          <input 
            type="text" 
            placeholder='Enter Your Email' 
            className='w-full border border-gray-400 py-5 pl-12 rounded-sm' 
          />
          <Image 
            src='/telegram.png' 
            width='30' 
            height='30' 
            className='object-cover absolute left-4' 
            alt='Telegram icon'
          />
          <Button className='bg-white text-[#0071ef] px-8 py-8 rounded-sm ml-2'>Subscribe Now</Button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
