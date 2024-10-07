"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky z-10 top-0 shadow-md block md:hidden">
      <div className="container mx-auto flex justify-between items-center p-4">
        <button
          className="lg:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <a href="#" className="text-xl font-bold text-blue-600">
          <Image src="/hlo1.png" alt="logo" width="50" height="50" />
        </a>
      </div>

      {/* Navigation Menu - Sliding from the Left */}
      <div
        className={`fixed top-0 overflow-scroll left-0 h-full bg-blue-600 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-1/2 z-50 shadow-lg`}
      >
        <div className="bg-cover bg-left h-14 bg-blue-700" >
          <div className='flex justify-end'>
          <button
            className="text-white rounded-full mt-3 p-1 shadow-lg focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          </div>
        </div>

        <ul className="flex flex-col p-4 ">
          <li className="mb-5 font-bold">
            <Link className="block text-white" href="/">
              Home
            </Link>
          </li>
          <li className="mb-5 font-bold">
            <Link className="block text-white" href="/departments">
              Departments
            </Link>
          </li>
          <li className="mb-5 font-bold">
            <Link className="block text-white" href="/pages/doctor">
              Doctors
            </Link>
          </li>
          <li className="mb-5 font-bold">
            <Link className="block text-white" href="/service">
              Services
            </Link>
          </li>
          <li className="mb-5 font-bold">
            <Link className="block text-white" href="/shop">
              Shop
            </Link>
          </li>
          <li className="mb-5 font-bold">
            <Link className="block text-white" href="/blog">
              Blog
            </Link>
          </li>
          <li className="mb-5 font-bold">
            <Link className="block text-white" href="/blogdetail">
              Blog Detail
            </Link>
          </li>
          <li className="mb-5 font-bold">
            <Link className="block text-white" href="/pages/gallery">
              Gallery
            </Link>
          </li>
          <li className="mb-5 font-bold">
            <Link className="block text-white" href="/about">
              About
            </Link>
          </li>
          <li className="mb-5 font-bold">
            <Link className="block text-white" href="/pages/contact">
              Contact
            </Link>
          </li>
          <li className="mb-5 font-bold">
            <Link className="block text-white" href="/pages/setting">
              Setting
            </Link>
          </li>
          <li className="mb-5 font-bold">
            <Link className="block text-white" href="/pages/profile">
              Profile
            </Link>
          </li>
          <li className="mb-5 font-bold">
            <Link className="block text-white" href="/login">
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay to close the sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default MobileNavbar;
