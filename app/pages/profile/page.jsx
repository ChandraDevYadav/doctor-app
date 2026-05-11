"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaStar, FaRegCalendarCheck, FaUserFriends, FaHeartbeat } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ProfilePage = () => {
  const doctor = {
    name: 'Dr. Emily Johnson',
    specialty: 'Cardiologist',
    imageUrl: '/hp1.jpg',
    bio: 'Dr. Emily Johnson is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. She is dedicated to providing the best care and staying up-to-date with the latest advances in heart health.',
    location: '123 Health Street, Medical City, CA',
    contact: {
      phone: '(123) 456-7890',
      email: 'emily.johnson@healthcare.com',
    },
    stats: [
      { label: 'Total Patients', value: '1,200+', icon: <FaUserFriends />, color: 'bg-blue-500' },
      { label: 'Appointments', value: '450', icon: <FaRegCalendarCheck />, color: 'bg-green-500' },
      { label: 'Success Rate', value: '99%', icon: <FaHeartbeat />, color: 'bg-red-500' },
    ],
    reviews: [
      { id: 1, reviewer: 'John Doe', rating: 5, comment: 'Dr. Emily is amazing! She truly cares about her patients.' },
      { id: 2, reviewer: 'Jane Smith', rating: 4, comment: 'Very knowledgeable and friendly. Highly recommend!' },
      { id: 3, reviewer: 'Mike Lee', rating: 5, comment: 'Excellent doctor with a compassionate approach.' },
    ],
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-muted'} />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className='relative h-64 md:h-80 overflow-hidden'>
        <div className='absolute inset-0 bg-primary/10 backdrop-blur-xl z-0' />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-background z-10' />
        <div className='container mx-auto px-6 h-full flex items-end pb-12 relative z-20'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='flex flex-col md:flex-row items-center gap-8'
          >
            <div className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-tr from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition' />
              <Image
                width='160'
                height='160'
                src={doctor.imageUrl}
                alt={doctor.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background relative z-10 object-cover"
              />
            </div>
            <div className='text-center md:text-left space-y-2'>
              <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight'>{doctor.name}</h1>
              <p className='text-xl text-primary font-medium'>{doctor.specialty}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {doctor.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card p-6 rounded-3xl border shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white text-xl mb-4 shadow-lg`}>
                    {stat.icon}
                  </div>
                  <h4 className="text-muted-foreground text-sm font-medium">{stat.label}</h4>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            <div className='space-y-6'>
              <h2 className="text-3xl font-bold tracking-tight">Biography</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{doctor.bio}</p>
            </div>

            <div className='space-y-6'>
              <h2 className="text-3xl font-bold tracking-tight">Patient Reviews</h2>
              <div className='space-y-6'>
                {doctor.reviews.map((review, i) => (
                  <motion.div 
                    key={review.id} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-muted/30 rounded-3xl space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary'>
                          {review.reviewer[0]}
                        </div>
                        <p className="text-lg font-bold">{review.reviewer}</p>
                      </div>
                      <div className="flex gap-1">{renderStars(review.rating)}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic">"{review.comment}"</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card border rounded-[2rem] p-8 shadow-xl relative overflow-hidden"
            >
              <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2' />
              
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className='w-10 h-10 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all'>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className='text-xs text-muted-foreground'>Phone</p>
                    <p className='font-medium'>{doctor.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className='w-10 h-10 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all'>
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className='text-xs text-muted-foreground'>Email</p>
                    <p className='font-medium'>{doctor.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className='w-10 h-10 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all'>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className='text-xs text-muted-foreground'>Location</p>
                    <p className='font-medium text-sm'>{doctor.location}</p>
                  </div>
                </div>
              </div>

              <div className='mt-10 space-y-4'>
                <Button className="w-full py-7 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Book Appointment
                </Button>
                <Button variant="outline" className="w-full py-7 rounded-2xl text-lg font-bold border-2">
                  Send Message
                </Button>
              </div>
            </motion.div>

            <div className='bg-primary/5 rounded-[2rem] p-8 border border-primary/10'>
              <h4 className='font-bold mb-4 flex items-center gap-2'>
                <span className='w-2 h-2 bg-green-500 rounded-full' />
                Currently Available
              </h4>
              <p className='text-sm text-muted-foreground'>
                Dr. Johnson is currently accepting new patients for online and in-person consultations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
