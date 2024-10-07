import Image from "next/image";
import Link from "next/link";
import React from "react";

// Array of doctor details
const doctors = [
  {
    image: "/doc.jpg",
    name: "Dr. John Doe",
    yearsOfExperience: 10,
    specialty: "Cardiologist",
    rating: 4.5,
    description:
      "Dr. John Doe is an experienced cardiologist who has been treating patients with heart conditions for over a decade.",
  },
  {
    image: "/doc1.jpg",
    name: "Dr. Jane Smith",
    yearsOfExperience: 8,
    specialty: "Dermatologist",
    rating: 4.7,
    description:
      "Dr. Jane Smith is known for her expertise in treating skin conditions and providing aesthetic dermatological services.",
  },
  {
    image: "/doc2.jpg",
    name: "Dr. Emily Johnson",
    yearsOfExperience: 5,
    specialty: "Pediatrician",
    rating: 4.3,
    description:
      "Dr. Emily Johnson specializes in caring for children and has a warm, caring approach that puts parents and children at ease.",
  },
  {
    image: "/doc3.jpg",
    name: "Dr. Michael Brown",
    yearsOfExperience: 12,
    specialty: "Orthopedic Surgeon",
    rating: 4.8,
    description:
      "With over a decade of experience in orthopedic surgery, Dr. Michael Brown helps patients recover from bone injuries and joint problems.",
  },
  {
    image: "/doc4.jpg",
    name: "Dr. Sarah Williams",
    yearsOfExperience: 9,
    specialty: "Neurologist",
    rating: 4.6,
    description:
      "Dr. Sarah Williams is a neurologist with vast experience in treating neurological disorders, focusing on patient care and research.",
  },
  {
    image: "/doc5.jpg",
    name: "Dr. David Clark",
    yearsOfExperience: 11,
    specialty: "Oncologist",
    rating: 4.9,
    description:
      "Dr. David Clark has been treating cancer patients for over a decade, offering both treatment and support for recovery.",
  },
  {
    image: "/doc6.jpg",
    name: "Dr. Laura Martinez",
    yearsOfExperience: 6,
    specialty: "Gynecologist",
    rating: 4.4,
    description:
      "Dr. Laura Martinez provides specialized care for women's health, including reproductive health and prenatal care.",
  },
  {
    image: "/doc4.jpg",
    name: "Dr. Robert Wilson",
    yearsOfExperience: 13,
    specialty: "Endocrinologist",
    rating: 4.7,
    description:
      "Dr. Robert Wilson focuses on treating endocrine disorders and diabetes, with over a decade of clinical and research experience.",
  },
  {
    image: "/doc3.jpg",
    name: "Dr. Linda Roberts",
    yearsOfExperience: 7,
    specialty: "Gastroenterologist",
    rating: 4.5,
    description:
      "Dr. Linda Roberts is a gastroenterologist who specializes in diagnosing and treating digestive system disorders.",
  },
  {
    image: "/hp8.jpg",
    name: "Dr. Kevin Harris",
    yearsOfExperience: 15,
    specialty: "Rheumatologist",
    rating: 4.8,
    description:
      "Dr. Kevin Harris is a leading expert in treating arthritis and autoimmune disorders, with 15 years of experience.",
  },
  {
    image: "/hp6.jpg",
    name: "Dr. Anna White",
    yearsOfExperience: 4,
    specialty: "Ophthalmologist",
    rating: 4.2,
    description:
      "Dr. Anna White is a skilled ophthalmologist providing treatments for vision problems and eye diseases.",
  },
  {
    image: "/doc6.jpg",
    name: "Dr. James Parker",
    yearsOfExperience: 14,
    specialty: "Nephrologist",
    rating: 4.6,
    description:
      "Dr. James Parker is a nephrologist with extensive experience in treating kidney diseases and providing dialysis treatment.",
  },
  {
    image: "/doc5.jpg",
    name: "Dr. Olivia Turner",
    yearsOfExperience: 8,
    specialty: "Psychiatrist",
    rating: 4.5,
    description:
      "Dr. Olivia Turner specializes in mental health and has a compassionate approach towards helping patients with psychological issues.",
  },
  {
    image: "/doc4.jpg",
    name: "Dr. Charles Lewis",
    yearsOfExperience: 9,
    specialty: "Pulmonologist",
    rating: 4.4,
    description:
      "Dr. Charles Lewis has been treating respiratory diseases for nearly a decade, specializing in asthma and chronic lung conditions.",
  },
  {
    image: "/doc3.jpg",
    name: "Dr. Rachel Miller",
    yearsOfExperience: 3,
    specialty: "Allergist",
    rating: 4.1,
    description:
      "Dr. Rachel Miller focuses on treating allergies and immune system disorders, offering personalized care for her patients.",
  },
  {
    image: "/doc2.jpg",
    name: "Dr. Steven Garcia",
    yearsOfExperience: 16,
    specialty: "General Surgeon",
    rating: 4.9,
    description:
      "Dr. Steven Garcia is a general surgeon with over 16 years of experience, specializing in minimally invasive surgical procedures.",
  },
  {
    image: "/doc1.jpg",
    name: "Dr. Karen Davis",
    yearsOfExperience: 7,
    specialty: "Anesthesiologist",
    rating: 4.3,
    description:
      "Dr. Karen Davis provides anesthesia and pain management services, ensuring patients are comfortable during medical procedures.",
  },
];

// Helper function to display stars based on rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 >= 0.5; // Check for half star
  const totalStars = 5; // Max 5 stars

  // Generate full stars
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Image
        key={i}
        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
        alt="Full Star"
        className="w-4 h-4 inline"
      />
    );
  }

  // Add half star if applicable
  if (halfStar) {
    stars.push(
      <Image
        key="half"
        src="https://cdn-icons-png.flaticon.com/128/16730/16730242.png"
        alt="Half Star"
        className="w-4 h-4 inline"
      />
    );
  }

  // Add empty stars for remaining
  // for (let i = stars.length; i < totalStars; i++) {
  //   stars.push(<img key={i + 'empty'} src="https://cdn-icons-png.flaticon.com/128/5530/5530416.png" alt="Empty Star" className="w-4 h-4 inline" />);
  // }

  return stars;
};

const Page = () => {
  return (
    <div>
      <div className='grid grid-cols-1 bg-cover bg-left' style={{ backgroundImage: "url('/pageheader.jpg')" }}>
        <div className='flex justify-center items-center py-16 md:py-24'>
            <div className=''>
            <h1 className='text-3xl md:text-5xl font-bold py-4 md:py-6 text-blue-600'>From Our Doctor</h1>
            <div className='text-center flex justify-center items-center'>
            <p className='text-blue-600 text-center text-lg font-semibold'>Home&nbsp; - &nbsp;</p>
            <Link href='/' className='text-lg font-semibold'>Doctor</Link>
            </div>
            </div>
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-20 py-4 md:py-12">
      {doctors.map((doctor, index) => (
        <div key={index} className="border p-4 rounded shadow">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width="200"
            height="200"
            className="w-full h-44 object-cover rounded"
          />
          <h3 className="text-xl font-semibold mt-2">{doctor.name}</h3>
          <p className="text-gray-600">
            {doctor.yearsOfExperience} years of experience
          </p>
          <p className="text-gray-600">Specialist: {doctor.specialty}</p>
          <div className="text-yellow-500">
            {renderStars(doctor.rating)} {/* Display the stars */}
          </div>
          <p className="mt-2 text-gray-700">{doctor.description}</p>
          <div className="my-4">
            <Link
              href="/pages/doctordetail"
              className="bg-blue-700 rounded-sm text-white px-6 py-2"
            >
              See More
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Page;
