import { CirclePlay, Facebook, Instagram, MapPin, Twitter, Wifi } from 'lucide-react'
import React from 'react'

const SocialNav = () => {
  return (
    <div className='grid grid-cols-2 py-3 px-40 bg-[#8f1b1b]'>
        <div>
            <div className='flex justify-start items-center gap-5'>
                <MapPin className='text-white w-5'/>
                <p className='text-white text-sm'>ADDRESS: Bhattachowk-1 Koshi Morang Nepal</p>
            </div>
        </div>
        <div>
            <div className='flex justify-end items-center gap-4 pr-6'>
                <Twitter className='text-white'/>
                <Facebook className='text-white'/>
                <Instagram className='text-white'/>
                <Wifi className='text-white'/>
                <CirclePlay className='text-white'/>
            </div>
        </div>
    </div>
  )
}

export default SocialNav