'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

const CounterSec = () => {
    // State and logic for counter 1 (Patients Every Day)
    const [patientCount, setPatientCount] = useState(0);
    const totalPatients = 500; 
    const durationPatients = 3000;

    useEffect(() => {
      let start = 0;
      const incrementTime = Math.ceil(durationPatients / totalPatients);

      const timer = setInterval(() => {
        start += 1;
        setPatientCount(start);
        if (start === totalPatients) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }, [totalPatients, durationPatients]);

    // State and logic for counter 2 (Doctors)
    const [doctorCount, setDoctorCount] = useState(0);
    const totalDoctors = 150; 
    const durationDoctors = 2500;

    useEffect(() => {
      let start = 0;
      const incrementTime = Math.ceil(durationDoctors / totalDoctors);

      const timer = setInterval(() => {
        start += 1;
        setDoctorCount(start);
        if (start === totalDoctors) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }, [totalDoctors, durationDoctors]);

    // State and logic for counter 3 (Years of Experience)
    const [experienceCount, setExperienceCount] = useState(0);
    const totalExperience = 20; 
    const durationExperience = 2000;

    useEffect(() => {
      let start = 0;
      const incrementTime = Math.ceil(durationExperience / totalExperience);

      const timer = setInterval(() => {
        start += 1;
        setExperienceCount(start);
        if (start === totalExperience) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }, [totalExperience, durationExperience]);

    // State and logic for counter 4 (Diagnosis Variety)
    const [diagnosisCount, setDiagnosisCount] = useState(0);
    const totalDiagnosis = 100;
    const durationDiagnosis = 3000;

    useEffect(() => {
      let start = 0;
      const incrementTime = Math.ceil(durationDiagnosis / totalDiagnosis);

      const timer = setInterval(() => {
        start += 1;
        setDiagnosisCount(start);
        if (start === totalDiagnosis) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }, [totalDiagnosis, durationDiagnosis]);

    return (
      <div className='bg-[#0071ef] py-10 px-6 md:py-16 md:px-20 lg:px-40'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Counter 1: Patients */}
          <div className='flex justify-center items-center gap-4 md:gap-6'>
            <Image src='/c1.png' alt='Patients' width='50' height='50' className="object-cover" />
            <div>
              <p className="text-3xl md:text-4xl mt-4 font-semibold text-white">{patientCount}</p>
              <p className='text-white text-sm md:text-base'>Patients Every Day</p>
            </div>
          </div>

          {/* Counter 2: Doctors */}
          <div className='flex justify-center items-center gap-4 md:gap-6'>
            <Image src='/c2.png' alt='Doctors' width='50' height='50' className="object-cover" />
            <div>
              <p className="text-3xl md:text-4xl mt-4 font-semibold text-white">{doctorCount}</p>
              <p className='text-white text-sm md:text-base'>Doctors Available</p>
            </div>
          </div>

          {/* Counter 3: Years of Experience */}
          <div className='flex justify-center items-center gap-4 md:gap-6'>
            <Image src='/c3.png' alt='Experience' width='50' height='50' className="object-cover" />
            <div>
              <p className="text-3xl md:text-4xl mt-4 font-semibold text-white">{experienceCount}</p>
              <p className='text-white text-sm md:text-base'>Years of Experience</p>
            </div>
          </div>

          {/* Counter 4: Diagnosis Variety */}
          <div className='flex justify-center items-center gap-4 md:gap-6'>
            <Image src='/c4.png' alt='Diagnosis' width='50' height='50' className="object-cover" />
            <div>
              <p className="text-3xl md:text-4xl mt-4 font-semibold text-white">{diagnosisCount}</p>
              <p className='text-white text-sm md:text-base'>Diagnosis Variety</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CounterSec;
