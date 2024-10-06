import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin() {
  // Array of image paths
  const images = [
    "/mcard.jpg",
    "/mcard1.jpg",
    "/mcard2.jpg",
    "/mcard.jpg",
    "/mcard1.jpg",
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-auto py-5"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="relative">
        {images.map((src, index) => (
          <CarouselItem key={index} className="py-4">
            <div className="">
              <Card className="ml-4 md:ml-4 w-full">
                <CardContent className="flex aspect-square items-center justify-center p-2 md:p-6 h-[180px] md:h-[400px] w-full">
                  <Image
                    src={src} // Use the image source from the array
                    alt={`Image ${index + 1}`} // Alt text for accessibility
                    width="1000"
                    height="1000"
                    className="object-cover w-full h-auto rounded"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-8" />
      <CarouselNext className="absolute right-8" />
    </Carousel>
  );
}
