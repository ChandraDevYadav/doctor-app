import Link from 'next/link';
import React from 'react';
import OurDepartment from '../components/OurDepartment/OurDepartment';

const departments = [
  {
    id: 1,
    name: 'Cardiology',
    description: 'Our Cardiology department focuses on diagnosing and treating heart conditions. We provide advanced cardiac care, including non-invasive and invasive procedures.',
    contact: {
      phone: '(123) 456-7891',
      email: 'cardiology@doctorapp.com',
    },
  },
  {
    id: 2,
    name: 'Pediatrics',
    description: 'We specialize in providing compassionate care for children, from newborns to adolescents. Our pediatricians are experts in preventive care and treatment of childhood illnesses.',
    contact: {
      phone: '(123) 456-7892',
      email: 'pediatrics@doctorapp.com',
    },
  },
  {
    id: 3,
    name: 'Neurology',
    description: 'The Neurology department treats disorders of the nervous system, offering treatments for conditions like epilepsy, stroke, and Alzheimer’s disease.',
    contact: {
      phone: '(123) 456-7893',
      email: 'neurology@doctorapp.com',
    },
  },
  {
    id: 4,
    name: 'Orthopedics',
    description: 'Our Orthopedics department is dedicated to diagnosing and treating bone, joint, and muscle conditions. We offer both surgical and non-surgical treatments for musculoskeletal disorders.',
    contact: {
      phone: '(123) 456-7894',
      email: 'orthopedics@doctorapp.com',
    },
  },
  {
    id: 5,
    name: 'Dermatology',
    description: 'The Dermatology department focuses on skin health. We offer treatments for a variety of skin conditions, from acne to skin cancer screenings.',
    contact: {
      phone: '(123) 456-7895',
      email: 'dermatology@doctorapp.com',
    },
  },
  {
    id: 6,
    name: 'Gynecology',
    description: 'Our Gynecology department provides comprehensive care for women’s health, offering services such as routine exams, reproductive health consultations, and more.',
    contact: {
      phone: '(123) 456-7896',
      email: 'gynecology@doctorapp.com',
    },
  },
];

const DepartmentsPage = () => {
  return (
    <div>
        <div className='grid grid-cols-1 bg-cover bg-left' style={{ backgroundImage: "url('/pageheader.jpg')" }}>
        <div className='flex justify-center items-center py-16 md:py-24'>
            <div className=''>
            <h1 className='text-3xl md:text-5xl font-bold py-4 md:py-6 text-blue-600'>From Our Departments</h1>
            <div className='text-center flex justify-center items-center'>
            <p className='text-blue-600 text-center text-lg font-semibold'>Home&nbsp; - &nbsp;</p>
            <Link href='/' className='text-lg font-semibold'>Departments</Link>
            </div>
            </div>
        </div>
    </div>
        <div className="container mx-auto px-4 md:px-28 ">
      <h1 className="text-2xl md:text-5xl text-center font-bold py-12">Our Medical Departments</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department) => (
          <div key={department.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{department.name}</h2>
            <p className="text-gray-700 mb-4">{department.description}</p>
            <div>
              <h3 className="text-lg font-medium">Contact Information</h3>
              <p><strong>Phone:</strong> {department.contact.phone}</p>
              <p><strong>Email:</strong> <a href={`mailto:${department.contact.email}`} className="text-blue-500 underline">{department.contact.email}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
        <OurDepartment/>
    </div>
    </div>
  );
};

export default DepartmentsPage;
