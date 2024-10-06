'use client'
import { Button } from "@/components/ui/button";
import { ChevronsRight, MessageSquareText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const feedbacks = [
  {
    id: 1,
    edited: "By Admin March 24, 2024",
    title: "Globa Empoer Extenve Chanels Extensve Creat Method",
    description: "Complete actuaze centi centrcing colora and sharin without anstaled anding bases aweme medicalplus Template.",
    commentsCount: 12,
    image: "/f1.jpg",
  },
  {
    id: 2,
    edited: "By Smith March 24, 2024",
    title: "Globa Empoer Extenve Chanels Extensve Creat Method",
    description: "Complete actuaze centi centrcing colora and sharin without anstaled anding bases aweme medicalplus Template.",
    commentsCount: 12,
    image: "/f2.jpg",
  },
  {
    id: 3,
    edited: "By Johnson March 24, 2024",
    title: "Child health specialist focusing on pediatrics",
    description: "Complete actuaze centi centrcing colora and sharin without anstaled anding bases aweme medicalplus Template.",
    commentsCount: 5,
    image: "/f3.jpg",
  },
];

const FeedbackPage = () => {
  return (
    <div className="pb-20 px-4 md:px-16 lg:px-48 pt-16 md:mt-0 bg-[#f5f9ff]">
      <p className="text-2xl md:text-3xl text-center">News Feed</p>
      <h1 className="text-3xl md:text-5xl font-semibold text-center mt-3 mb-12">
        Be The First To New Stories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="rounded-lg shadow-md overflow-hidden"
          >
            <div className="w-full h-[220px] overflow-hidden relative">
              <Image
                src={feedback.image}
                alt={feedback.name}
                width="300"
                height="400"
                className="w-full h-full object-cover transition-transform duration-300 ease-linear hover:scale-110"
              />
            </div>

            <div className="pt-6 text-white">
              <h1 className="text-xs font-semibold ml-5 text-[#0071ef]">{feedback.edited}</h1>
              <h1 className="text-lg font-semibold text-black ml-5 py-3">{feedback.title}</h1>
              <p className="ml-5 text-md text-black mb-5">{feedback.description}</p>
              <div className='flex justify-between items-center pl-5 py-3 border-t border-t-gray-200'>
                <Link href='' className='text-black text-sm flex items-center gap-1'>Read More <ChevronsRight className='w-5'/></Link>
                <p className="ml-5 mt-2 flex gap-3 mr-5 text-black"><MessageSquareText/><span className="text-black">{feedback.commentsCount}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
