import React from 'react'
import Hero from './_components/Hero'
import MainCom from './_components/mainCom'
import SideCom from './_components/SideCom'

const page = () => {
  return (
    <div>
      <Hero/>
      <div className="grid grid-cols-6 gap-6 px-6 md:px-28 pt-10">
        <div className='col-span-6 md:col-span-4'>
          <MainCom/>
        </div>
        <div className='col-span-6 md:col-span-2'>
          <SideCom/>
        </div>
      </div>
    </div>
  )
}

export default page