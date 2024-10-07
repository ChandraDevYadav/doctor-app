import React from 'react'
import MainCom from './_components/MainCom'
import Pagination from './_components/Pagination'
import SideCom from './_components/SideCom'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <div className='grid grid-cols-1 bg-cover bg-left' style={{ backgroundImage: "url('/pageheader.jpg')" }}>
        <div className='flex justify-center items-center py-16 md:py-24'>
            <div className=''>
            <h1 className='text-3xl md:text-5xl font-bold py-4 md:py-6 text-blue-600'>From Our Shop</h1>
            <div className='text-center flex justify-center items-center'>
            <p className='text-blue-600 text-center text-lg font-semibold'>Home&nbsp; - &nbsp;</p>
            <Link href='/' className='text-lg font-semibold'>Shop</Link>
            </div>
            </div>
        </div>
    </div>
    <div className='px-2 md:px-28'>
      <div className='grid grid-cols-1 md:grid-cols-7 gap-4'>
        <div className='col-span-7 md:col-span-5'>
          <MainCom/>
          <Pagination/>
        </div>
        <div className='col-span-7 md:col-span-2'>
          <SideCom/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page