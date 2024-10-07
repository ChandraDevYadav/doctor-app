import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, ChevronsRight } from "lucide-react";

const Deep = () => {
  return (
    <div className="bg-[#f5f9ff] px-28 pb-24">
      <div className="pt-28">
        <p className="text-center text-3xl">We Are The</p>
        <h1 className="text-5xl font-bold text-center mt-4 pb-16">
          Best Our Departments Centers
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 gap-12">
          <div className=''>
            <Tabs defaultValue="rhinology1" className="w-full">
              <TabsList className="py-14 gap-5 ml-20">
                <TabsTrigger value="rhinology1" className="p-6">
                  <div>
                    <Image src="/01.png" alt='image' width="60" height="60" />
                  </div>
                </TabsTrigger>
                <TabsTrigger value="rhinology2" className="p-6">
                  <div>
                    <Image src="/02.png" alt='image' width="60" height="60" />
                  </div>
                </TabsTrigger>
                <TabsTrigger value="rhinology3" className="p-6">
                  <div>
                    <Image src="/03.png" alt='image' width="60" height="60" />
                  </div>
                </TabsTrigger>
                <TabsTrigger value="rhinology4" className="p-6">
                  <div>
                    <Image src="/04.png" alt='image' width="60" height="60" />
                  </div>
                </TabsTrigger>
                <TabsTrigger value="rhinology5" className="p-6">
                  <div>
                    <Image src="/05.png" alt='image' width="60" height="60" />
                  </div>
                </TabsTrigger>
                <TabsTrigger value="rhinology6" className="p-6">
                  <div>
                    <Image src="/06.png" alt='image' width="60" height="60" />
                  </div>
                </TabsTrigger>
                <TabsTrigger value="rhinology7" className="p-6">
                  <div>
                    <Image src="/07.png" alt='image' width="60" height="60" />
                  </div>
                </TabsTrigger>
                <TabsTrigger value="rhinology8" className="p-6">
                  <div>
                    <Image src="/08.png" alt='image' width="60" height="60" />
                  </div>
                </TabsTrigger>
                <TabsTrigger value="rhinology9" className="p-6">
                  <div>
                    <Image src="/09.png" alt='image' width="60" height="60" />
                  </div>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="rhinology1">
                <div className="grid grid-cols-2 bg-white shadow-lg">
                  <div>
                    <div>
                      <h1 className='text-2xl font-semibold mx-10 mt-24'>Speciality Rhinology 1</h1>
                      <p className='font-medium text-gray-500 mx-10 mt-4'>
                        Procedur arrain manu producs rather convenet cuvate
                        mantna this man Manucur produc rather conven cuvatie
                        mantan this conven cuvate bad Credibly envisioneer
                        ubiquitous niche markets transparent relations
                        Dramatically enable worldwide action items whereas
                        magnetic source motin was procedur arramin
                      </p>
                      <ul className='grid grid-cols-2 mx-10 gap-y-3 my-7'>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/> Qualified Doctors</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>24×7 Emergency Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>General Medical</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Feel like Home Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Outdoor Checkup</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Easy and Affordable Billing</li>
                      </ul>
                      <Button className='bg-[#0071ef] text-white px-8 py-4 font-semibold mx-10 flex justify-center items-center text-md mt-3 gap-2'>Appointment Now <ChevronsRight className='text-white'/></Button>
                    </div>
                  </div>
                  <div className="">
                    <div className="m-3">
                      <Image
                        src="/07.jpg"
                        width="500"
                        height="500"
                        className="w-full h-full object-cover"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rhinology2">
              <div className="grid grid-cols-2 bg-white shadow-lg">
                  <div>
                    <div>
                      <h1 className='text-2xl font-semibold mx-10 mt-24'>Speciality Rhinology 2</h1>
                      <p className='font-medium text-gray-500 mx-10 mt-4'>
                        Procedur arrain manu producs rather convenet cuvate
                        mantna this man Manucur produc rather conven cuvatie
                        mantan this conven cuvate bad Credibly envisioneer
                        ubiquitous niche markets transparent relations
                        Dramatically enable worldwide action items whereas
                        magnetic source motin was procedur arramin
                      </p>
                      <ul className='grid grid-cols-2 mx-10 gap-y-3 my-7'>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/> Qualified Doctors</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>24×7 Emergency Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>General Medical</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Feel like Home Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Outdoor Checkup</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Easy and Affordable Billing</li>
                      </ul>
                      <Button className='bg-[#0071ef] text-white px-8 py-4 font-semibold mx-10 flex justify-center items-center text-md mt-3 gap-2'>Appointment Now <ChevronsRight className='text-white'/></Button>
                    </div>
                  </div>
                  <div className="">
                    <div className="m-3">
                      <Image
                        src="/08.jpg"
                        width="500"
                        height="500"
                        className="w-full h-full object-cover"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rhinology3">
              <div className="grid grid-cols-2 bg-white shadow-lg">
                  <div>
                    <div>
                      <h1 className='text-2xl font-semibold mx-10 mt-24'>Speciality Rhinology 3</h1>
                      <p className='font-medium text-gray-500 mx-10 mt-4'>
                        Procedur arrain manu producs rather convenet cuvate
                        mantna this man Manucur produc rather conven cuvatie
                        mantan this conven cuvate bad Credibly envisioneer
                        ubiquitous niche markets transparent relations
                        Dramatically enable worldwide action items whereas
                        magnetic source motin was procedur arramin
                      </p>
                      <ul className='grid grid-cols-2 mx-10 gap-y-3 my-7'>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/> Qualified Doctors</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>24×7 Emergency Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>General Medical</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Feel like Home Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Outdoor Checkup</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Easy and Affordable Billing</li>
                      </ul>
                      <Button className='bg-[#0071ef] text-white px-8 py-4 font-semibold mx-10 flex justify-center items-center text-md mt-3 gap-2'>Appointment Now <ChevronsRight className='text-white'/></Button>
                    </div>
                  </div>
                  <div className="">
                    <div className="m-3">
                      <Image
                        src="/09.jpg"
                        width="500"
                        height="500"
                        className="w-full h-full object-cover"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rhinology4">
              <div className="grid grid-cols-2 bg-white shadow-lg">
                  <div>
                    <div>
                      <h1 className='text-2xl font-semibold mx-10 mt-24'>Speciality Rhinology 4</h1>
                      <p className='font-medium text-gray-500 mx-10 mt-4'>
                        Procedur arrain manu producs rather convenet cuvate
                        mantna this man Manucur produc rather conven cuvatie
                        mantan this conven cuvate bad Credibly envisioneer
                        ubiquitous niche markets transparent relations
                        Dramatically enable worldwide action items whereas
                        magnetic source motin was procedur arramin
                      </p>
                      <ul className='grid grid-cols-2 mx-10 gap-y-3 my-7'>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/> Qualified Doctors</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>24×7 Emergency Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>General Medical</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Feel like Home Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Outdoor Checkup</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Easy and Affordable Billing</li>
                      </ul>
                      <Button className='bg-[#0071ef] text-white px-8 py-4 font-semibold mx-10 flex justify-center items-center text-md mt-3 gap-2'>Appointment Now <ChevronsRight className='text-white'/></Button>
                    </div>
                  </div>
                  <div className="">
                    <div className="m-3">
                      <Image
                        src="/10.jpg"
                        width="500"
                        height="500"
                        className="w-full h-full object-cover"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rhinology5">
              <div className="grid grid-cols-2 bg-white shadow-lg">
                  <div>
                    <div>
                      <h1 className='text-2xl font-semibold mx-10 mt-24'>Speciality Rhinology 5</h1>
                      <p className='font-medium text-gray-500 mx-10 mt-4'>
                        Procedur arrain manu producs rather convenet cuvate
                        mantna this man Manucur produc rather conven cuvatie
                        mantan this conven cuvate bad Credibly envisioneer
                        ubiquitous niche markets transparent relations
                        Dramatically enable worldwide action items whereas
                        magnetic source motin was procedur arramin
                      </p>
                      <ul className='grid grid-cols-2 mx-10 gap-y-3 my-7'>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/> Qualified Doctors</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>24×7 Emergency Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>General Medical</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Feel like Home Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Outdoor Checkup</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Easy and Affordable Billing</li>
                      </ul>
                      <Button className='bg-[#0071ef] text-white px-8 py-4 font-semibold mx-10 flex justify-center items-center text-md mt-3 gap-2'>Appointment Now <ChevronsRight className='text-white'/></Button>
                    </div>
                  </div>
                  <div className="">
                    <div className="m-3">
                      <Image
                        src="/5.jpg"
                        width="500"
                        height="500"
                        className="w-full h-full object-cover"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rhinology6">
              <div className="grid grid-cols-2 bg-white shadow-lg">
                  <div>
                    <div>
                      <h1 className='text-2xl font-semibold mx-10 mt-24'>Speciality Rhinology 6</h1>
                      <p className='font-medium text-gray-500 mx-10 mt-4'>
                        Procedur arrain manu producs rather convenet cuvate
                        mantna this man Manucur produc rather conven cuvatie
                        mantan this conven cuvate bad Credibly envisioneer
                        ubiquitous niche markets transparent relations
                        Dramatically enable worldwide action items whereas
                        magnetic source motin was procedur arramin
                      </p>
                      <ul className='grid grid-cols-2 mx-10 gap-y-3 my-7'>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/> Qualified Doctors</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>24×7 Emergency Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>General Medical</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Feel like Home Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Outdoor Checkup</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Easy and Affordable Billing</li>
                      </ul>
                      <Button className='bg-[#0071ef] text-white px-8 py-4 font-semibold mx-10 flex justify-center items-center text-md mt-3 gap-2'>Appointment Now <ChevronsRight className='text-white'/></Button>
                    </div>
                  </div>
                  <div className="">
                    <div className="m-3">
                      <Image
                        src="/4.jpg"
                        width="500"
                        height="500"
                        className="w-full h-full object-cover"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rhinology7">
              <div className="grid grid-cols-2 bg-white shadow-lg">
                  <div>
                    <div>
                      <h1 className='text-2xl font-semibold mx-10 mt-24'>Speciality Rhinology 7</h1>
                      <p className='font-medium text-gray-500 mx-10 mt-4'>
                        Procedur arrain manu producs rather convenet cuvate
                        mantna this man Manucur produc rather conven cuvatie
                        mantan this conven cuvate bad Credibly envisioneer
                        ubiquitous niche markets transparent relations
                        Dramatically enable worldwide action items whereas
                        magnetic source motin was procedur arramin
                      </p>
                      <ul className='grid grid-cols-2 mx-10 gap-y-3 my-7'>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/> Qualified Doctors</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>24×7 Emergency Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>General Medical</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Feel like Home Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Outdoor Checkup</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Easy and Affordable Billing</li>
                      </ul>
                      <Button className='bg-[#0071ef] text-white px-8 py-4 font-semibold mx-10 flex justify-center items-center text-md mt-3 gap-2'>Appointment Now <ChevronsRight className='text-white'/></Button>
                    </div>
                  </div>
                  <div className="">
                    <div className="m-3">
                      <Image
                        src="/07.jpg"
                        width="500"
                        height="500"
                        className="w-full h-full object-cover"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rhinology8">
              <div className="grid grid-cols-2 bg-white shadow-lg">
                  <div>
                    <div>
                      <h1 className='text-2xl font-semibold mx-10 mt-24'>Speciality Rhinology 8</h1>
                      <p className='font-medium text-gray-500 mx-10 mt-4'>
                        Procedur arrain manu producs rather convenet cuvate
                        mantna this man Manucur produc rather conven cuvatie
                        mantan this conven cuvate bad Credibly envisioneer
                        ubiquitous niche markets transparent relations
                        Dramatically enable worldwide action items whereas
                        magnetic source motin was procedur arramin
                      </p>
                      <ul className='grid grid-cols-2 mx-10 gap-y-3 my-7'>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/> Qualified Doctors</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>24×7 Emergency Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>General Medical</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Feel like Home Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Outdoor Checkup</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Easy and Affordable Billing</li>
                      </ul>
                      <Button className='bg-[#0071ef] text-white px-8 py-4 font-semibold mx-10 flex justify-center items-center text-md mt-3 gap-2'>Appointment Now <ChevronsRight className='text-white'/></Button>
                    </div>
                  </div>
                  <div className="">
                    <div className="m-3">
                      <Image
                        src="/6.jpg"
                        width="500"
                        height="500"
                        className="w-full h-full object-cover"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rhinology9">
              <div className="grid grid-cols-2 bg-white shadow-lg">
                  <div>
                    <div>
                      <h1 className='text-2xl font-semibold mx-10 mt-24'>Speciality Rhinology 9</h1>
                      <p className='font-medium text-gray-500 mx-10 mt-4'>
                        Procedur arrain manu producs rather convenet cuvate
                        mantna this man Manucur produc rather conven cuvatie
                        mantan this conven cuvate bad Credibly envisioneer
                        ubiquitous niche markets transparent relations
                        Dramatically enable worldwide action items whereas
                        magnetic source motin was procedur arramin
                      </p>
                      <ul className='grid grid-cols-2 mx-10 gap-y-3 my-7'>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/> Qualified Doctors</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>24×7 Emergency Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>General Medical</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Feel like Home Services</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Outdoor Checkup</li>
                        <li className='font-medium text-gray-500 flex items-center gap-2'><Check className='w-5 text-[#0071ef]'/>Easy and Affordable Billing</li>
                      </ul>
                      <Button className='bg-[#0071ef] text-white px-8 py-4 font-semibold mx-10 flex justify-center items-center text-md mt-3 gap-2'>Appointment Now <ChevronsRight className='text-white'/></Button>
                    </div>
                  </div>
                  <div className="">
                    <div className="m-3">
                      <Image
                        src="/5.jpg"
                        width="500"
                        height="500"
                        className="w-full h-full object-cover"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deep;
