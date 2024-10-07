import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-left"
      style={{ backgroundImage: "url('/bg11.jpg')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main content */}
        <div className="flex justify-center md:justify-start items-center px-6 md:px-0">
          <div className="pt-12 md:pt-20 md:ml-20 lg:ml-44 text-center md:text-left">
            <p className="text-2xl md:text-4xl text-white mb-4 font-semibold">
              Best Medical Clinic
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
              <span className="text-[#0071ef]">Bringing Health</span> To <br />{" "}
              Life For The Whole <br /> Family...
            </h1>
            <Button className="rounded-none text-white font-semibold px-6 py-4 md:px-8 md:py-6 mt-6 md:mt-8 bg-[#0071ef] gap-2">
              Get Appointment <ChevronsRight />
            </Button>
          </div>
        </div>
        {/* Empty space on larger screens */}
        <div className="">
          <div className='flex justify-center items-center pt-4 md:pt-36'>
          <Carousel className='px-4'>
  <CarouselContent className='relative'>
    <CarouselItem>
      <Image src='/hp.jpg' alt='image' width='500' height='500' className='object-cover w-full h-full'/>
    </CarouselItem>
    <CarouselItem>
    <Image src='/hp1.jpg' alt='image' width='500' height='500' className='object-cover w-full h-full'/>
    </CarouselItem>
    <CarouselItem>
    <Image src='/hp22.jpg' alt='image' width='500' height='500' className='object-cover w-full h-full'/>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious className='absolute left-8' />
  <CarouselNext className='absolute right-8' />
</Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
