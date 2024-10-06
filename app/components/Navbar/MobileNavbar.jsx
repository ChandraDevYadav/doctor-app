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
        className={`fixed top-0 overflow-scroll left-0 h-full bg-gray-100 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-1/2 z-50 shadow-lg`}
      >
        <div className="bg-cover bg-left h-24 bg-gray-200" style={{ backgroundImage: "url('/hp1.jpg')" }}>
          <div className='flex justify-end'>
          <button
            className="text-black bg-white rounded-full m-1 p-1 shadow-lg focus:outline-none"
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

        <ul className="flex flex-col p-4">
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/">
              Home
            </Link>
          </li>
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/departments">
              Departments
            </Link>
          </li>
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/doctor">
              Doctors
            </Link>
          </li>
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/service">
              Services
            </Link>
          </li>
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/shop">
              Shop
            </Link>
          </li>
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/blog">
              Blog
            </Link>
          </li>
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/pages">
              Pages
            </Link>
          </li>
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/gallery">
              Gallery
            </Link>
          </li>
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/about">
              About
            </Link>
          </li>
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/contact">
              Contact
            </Link>
          </li>
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/setting">
              Setting
            </Link>
          </li>
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/notification">
              Notification
            </Link>
          </li>
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/profile">
              Profile
            </Link>
          </li>
          <li className="mb-3">
            <Link className="block hover:text-blue-600" href="/login">
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
