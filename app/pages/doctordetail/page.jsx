'use client'
import React, { useState } from "react";
import Doctor from "@/app/components/Doctor/Doctor";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

const doctorData = {
  image: "/doc.jpg",
  name: "Dr. John Doe",
  yearsOfExperience: 10,
  specialty: "Cardiologist",
  rating: 4.5,
  description:
    "Dr. John Doe is an experienced cardiologist who has been treating patients with heart conditions for over a decade. With a passion for cardiovascular health, Dr. Doe has worked in various renowned hospitals and clinics, helping countless patients manage and overcome complex heart conditions. " +
    "His expertise includes performing advanced diagnostic tests, personalized treatment plans, and surgical procedures. In addition to his clinical work, Dr. Doe is involved in research, contributing to the development of new therapies for heart disease. " +
    "Patients appreciate his empathetic approach, attention to detail, and commitment to providing the highest level of care. Outside of work, Dr. Doe frequently speaks at medical conferences and participates in health outreach programs to raise awareness about heart health.",
};

// Helper function to map rating to stars
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Image
        key={i}
        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
        alt="Full Star"
        className="w-5 h-5 inline-block"
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
        className="w-5 h-5 inline-block"
      />
    );
  }

  // Add empty stars to make it a total of 5 stars
  for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
    stars.push(
      <Image
        key={i + "empty"}
        src="/empty-star.png"
        alt="Empty Star"
        className="w-5 h-5 inline-block"
      />
    );
  }

  return stars;
};

const DoctorDetailPage = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [date, setDate] = useState(null); // Declare the state for the date

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  // Submit function to log data and reset the states
  const handleSubmit = () => {
    console.log("Selected Date:", date ? format(date, "PPP") : "No date selected");
    console.log("Selected Time Slot:", selectedSlot ? selectedSlot : "No time slot selected");

    // Reset the selected date and time slot
    setSelectedSlot(null);
    setDate(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-24 py-4 gap-8">
        {/* Doctor Image */}
        <div className="flex justify-center items-center">
          <Image
            src={doctorData.image}
            alt={doctorData.name}
            className="w-full h-auto rounded-lg shadow-lg"
            width="1000"
            height="800"
          />
        </div>

        {/* Doctor Details */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold pt-2 md:pt-20">
            {doctorData.name}
          </h1>
          <p className="text-xl text-gray-600">
            <strong>Specialty:</strong> {doctorData.specialty}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Years of Experience:</strong> {doctorData.yearsOfExperience}
          </p>
          <p className="text-lg text-gray-600 flex items-center">
            <strong>Rating:</strong>
            <span className="ml-2">{renderStars(doctorData.rating)}</span>
          </p>
          <p className="text-md text-gray-700">{doctorData.description}</p>
          <AlertDialog>
            <AlertDialogTrigger className="bg-blue-600 w-full py-4 text-white rounded-md font-semibold">
              Book An Appointment
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className='text-xl'>Book An Appointment</AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="p-8">
                    <h2 className="text-lg text-black text-start font-semibold mb-4">
                      Select a Time Slot
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {timeSlots.map((slot, index) => (
                        <button
                          key={index}
                          className={`px-4 py-2 border rounded-lg text-center cursor-pointer 
            ${selectedSlot === slot ? "bg-blue-500 text-white border-blue-500" : "bg-gray-100 border-gray-300"}`}
                          onClick={() => handleSlotClick(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>

                    {/* Display selected slot */}
                    {selectedSlot && (
                      <div className="mt-6">
                        <p className="text-lg">
                          Selected Time Slot: <strong>{selectedSlot}</strong>
                        </p>
                      </div>
                    )}
                  </div>
                  {/* Popover for date selection */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center underline pb-3 mt-8">
        See More Doctors
      </h1>
      <Doctor />
    </div>
  );
};

export default DoctorDetailPage;
