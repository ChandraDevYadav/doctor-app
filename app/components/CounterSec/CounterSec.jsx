"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getStats } from "../../services/contentService";

const CounterSec = () => {
  const [stats, setStats] = useState({
    patients: 500,
    doctors: 150,
    experience: 20,
    diagnosis: 100,
  });

  const [patientCount, setPatientCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [diagnosisCount, setDiagnosisCount] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getStats();
      if (data) {
        setStats({
          patients: data.patients || 500,
          doctors: data.doctors || 150,
          experience: data.experience || 20,
          diagnosis: data.diagnosis || 100,
        });
      }
    };
    fetchStats();
  }, []);

  useEffect(() => {
    if (!stats) return;

    const animateCount = (targetValue, setter, duration = 2500) => {
      let start = 0;
      const incrementTime = Math.max(10, Math.ceil(duration / targetValue));
      const step = Math.ceil(targetValue / (duration / incrementTime));

      const timer = setInterval(() => {
        start += step;
        if (start >= targetValue) {
          setter(targetValue);
          clearInterval(timer);
        } else {
          setter(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    };

    const cleanupPatients = animateCount(stats.patients, setPatientCount, 3000);
    const cleanupDoctors = animateCount(stats.doctors, setDoctorCount, 2500);
    const cleanupExp = animateCount(stats.experience, setExperienceCount, 2000);
    const cleanupDiag = animateCount(stats.diagnosis, setDiagnosisCount, 3000);

    return () => {
      cleanupPatients();
      cleanupDoctors();
      cleanupExp();
      cleanupDiag();
    };
  }, [stats]);

  return (
    <div className="bg-[#0071ef] py-10 px-6 md:py-16 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Counter 1: Patients */}
        <div className="flex justify-center items-center gap-4 md:gap-6">
          <Image src="/c1.png" alt="Patients" width="50" height="50" className="object-cover" />
          <div>
            <p className="text-3xl md:text-4xl mt-4 font-semibold text-white">{patientCount}+</p>
            <p className="text-white text-sm md:text-base">Patients Every Day</p>
          </div>
        </div>

        {/* Counter 2: Doctors */}
        <div className="flex justify-center items-center gap-4 md:gap-6">
          <Image src="/c2.png" alt="Doctors" width="50" height="50" className="object-cover" />
          <div>
            <p className="text-3xl md:text-4xl mt-4 font-semibold text-white">{doctorCount}+</p>
            <p className="text-white text-sm md:text-base">Doctors Available</p>
          </div>
        </div>

        {/* Counter 3: Years of Experience */}
        <div className="flex justify-center items-center gap-4 md:gap-6">
          <Image src="/c3.png" alt="Experience" width="50" height="50" className="object-cover" />
          <div>
            <p className="text-3xl md:text-4xl mt-4 font-semibold text-white">{experienceCount}+</p>
            <p className="text-white text-sm md:text-base">Years of Experience</p>
          </div>
        </div>

        {/* Counter 4: Diagnosis Variety */}
        <div className="flex justify-center items-center gap-4 md:gap-6">
          <Image src="/c4.png" alt="Diagnosis" width="50" height="50" className="object-cover" />
          <div>
            <p className="text-3xl md:text-4xl mt-4 font-semibold text-white">{diagnosisCount}+</p>
            <p className="text-white text-sm md:text-base">Diagnosis Variety</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSec;
