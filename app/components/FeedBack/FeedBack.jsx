"use client";

import { Button } from "@/components/ui/button";
import { ChevronsRight, MessageSquareText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getFeedbackStories } from "../../services/contentService";

const fallbackFeedbacks = [
  {
    _id: "1",
    edited: "By Admin March 24, 2024",
    title: "Globa Empoer Extenve Chanels Extensve Creat Method",
    description: "Complete actuaze centi centrcing colora and sharin without anstaled anding bases aweme medicalplus Template.",
    commentsCount: 12,
    image: "/f1.jpg",
    link: "#",
  },
  {
    _id: "2",
    edited: "By Smith March 24, 2024",
    title: "Globa Empoer Extenve Chanels Extensve Creat Method",
    description: "Complete actuaze centi centrcing colora and sharin without anstaled anding bases aweme medicalplus Template.",
    commentsCount: 12,
    image: "/f2.jpg",
    link: "#",
  },
  {
    _id: "3",
    edited: "By Johnson March 24, 2024",
    title: "Child health specialist focusing on pediatrics",
    description: "Complete actuaze centi centrcing colora and sharin without anstaled anding bases aweme medicalplus Template.",
    commentsCount: 5,
    image: "/f3.jpg",
    link: "#",
  },
];

const FeedbackPage = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await getFeedbackStories();
        if (data && data.length > 0) {
          setStories(data);
        } else {
          setStories(fallbackFeedbacks);
        }
      } catch (err) {
        setStories(fallbackFeedbacks);
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  return (
    <div className="pb-20 px-4 md:px-16 lg:px-48 pt-16 md:mt-0 bg-[#f5f9ff]">
      <p className="text-2xl md:text-3xl text-center">News Feed</p>
      <h1 className="text-3xl md:text-5xl font-semibold text-center mt-3 mb-12">
        Be The First To New Stories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-white shadow-md overflow-hidden animate-pulse h-[450px]">
                <div className="w-full h-[220px] bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-1/3" />
                  <div className="h-6 bg-gray-200 rounded w-5/6" />
                  <div className="h-16 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))
          : stories.map((feedback) => (
              <div
                key={feedback._id}
                className="rounded-2xl shadow-lg bg-white overflow-hidden flex flex-col justify-between border border-gray-100 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="w-full h-[220px] overflow-hidden relative">
                    <Image
                      src={feedback.image || "/f1.jpg"}
                      alt={feedback.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h1 className="text-xs font-semibold text-[#0071ef] uppercase tracking-wider">{feedback.edited}</h1>
                    <h1 className="text-xl font-bold text-gray-900 py-3 line-clamp-2 hover:text-[#0071ef] transition-colors cursor-pointer">{feedback.title}</h1>
                    <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">{feedback.description}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center px-6 py-4 border-t border-gray-100 bg-gray-50/50">
                  <Link href={feedback.link || "#"} className="text-[#0071ef] font-semibold text-sm flex items-center gap-1 hover:underline">
                    Read More <ChevronsRight className="w-4 h-4" />
                  </Link>
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                    <MessageSquareText className="w-4 h-4 text-gray-400" />
                    <span>{feedback.commentsCount}</span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
