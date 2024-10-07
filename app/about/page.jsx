import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-1 bg-cover bg-left" style={{ backgroundImage: "url('/pageheader.jpg')" }}>
        <div className="flex justify-center items-center py-16 md:py-24">
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold py-4 md:py-6 text-blue-600">From Our About</h1>
            <div className="text-center flex justify-center items-center">
              <p className="text-blue-600 text-center text-lg font-semibold">Home&nbsp; - &nbsp;</p>
              <Link href="/" className="text-lg font-semibold">About</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Our Doctor App
          </h1>
          <p className="text-lg text-gray-600">
            Your trusted platform for booking appointments and managing healthcare at your convenience.
          </p>
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to make healthcare accessible to everyone by connecting patients with trusted doctors, providing easy-to-use tools for booking appointments, and managing medical records all in one place. We strive to empower users by offering a reliable and secure platform for managing their healthcare needs.
            </p>
            <p className="text-gray-600 mt-3">
              We believe that timely access to healthcare should be a right, not a privilege. Our platform ensures that patients can quickly find and consult with doctors across various specialties, whether for routine checkups, urgent consultations, or long-term care. By streamlining the appointment process and reducing the time it takes to find a healthcare provider, we help patients focus on what matters most — their well-being.
            </p>
            <p className="text-gray-600 mt-3">
              At the heart of our app is a commitment to personalized healthcare. We recognize that each patient&rsquo;s needs are unique, and we provide tailored recommendations based on their medical history, preferences, and ongoing health conditions. Whether it&apos;s setting reminders for follow-up appointments or giving insights into preventative care, our platform is designed to support patients every step of the way in their healthcare journey.
            </p>
          </div>
          <div>
            <Image
              src="/doc3.jpg"
              width="600"
              height="400"
              alt="Doctor Consultation"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="/doc1.jpg"
                width="300"
                height="300"
                alt="Easy Appointments"
                className="object-cover mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-3">
                Easy Appointments
              </h3>
              <p className="text-gray-600">
                Book appointments with your preferred doctor at a time that suits you, quickly and easily.
              </p>
              <div className="flex justify-center items-center gap-2 mt-3">
                <p className="font-medium">Rating :</p>
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="/doc6.jpg"
                width="300"
                height="300"
                alt="Manage Medical Records"
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Manage Medical Records
              </h3>
              <p className="text-gray-600">
                Keep track of your medical history and records securely within the app for easy reference.
              </p>
              <div className="flex justify-center items-center gap-2 mt-3">
                <p className="font-medium">Rating :</p>
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="/doc.jpg"
                width="300"
                height="300"
                alt="Trusted Doctors"
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Trusted Doctors
              </h3>
              <p className="text-gray-600">
                Access a network of certified and experienced doctors from various specialties to cater to your healthcare needs.
              </p>
              <div className="flex justify-center items-center gap-2 mt-3">
                <p className="font-medium">Rating :</p>
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="/d1.png"
                width="100"
                height="100"
                alt="Dr. John Doe"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Dr. John Doe
              </h3>
              <p className="text-gray-600">Chief Medical Officer</p>
              <div className="flex justify-center items-center gap-2 mt-3">
                <p className="font-medium">Rating :</p>
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
                <Image src="/s.png" width="20" height="20" className="w-4" alt="Star rating" />
              </div>
            </div>
            {/* Repeat for other team members */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
