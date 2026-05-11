"use client";

import { Button } from "@/components/ui/button";
import { ChevronsRight, Calendar, User, Phone, Stethoscope, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AppointmentForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    date: "",
  });
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await fetch("http://localhost:5000/api/v1/patients/doctors");
      const data = await res.json();
      if (data.status === "success") setDoctors(data.data.doctors);
    };
    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const doctorId = doctors[0]?._id;
      if (!doctorId) {
        alert("No doctors available to book!");
        return;
      }

      const res = await fetch("http://localhost:5000/api/v1/patients/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          doctorId,
          date: formData.date,
          timeSlot: "10:00 AM",
          notes: `Name: ${formData.name}, Phone: ${formData.phone}, Dept: ${formData.department}`,
        }),
      });
      const data = await res.json();
      if (data.status === "success") {
        setIsSuccess(true);
      } else {
        alert("Booking failed: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during booking.");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-background rounded-[3rem] overflow-hidden shadow-2xl border">
          
          {/* Info Side */}
          <div className="relative p-12 lg:p-20 flex flex-col justify-center bg-primary text-primary-foreground">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90" />
            <div className="relative z-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20"
              >
                <Calendar className="w-8 h-8" />
              </motion.div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Schedule Your <br /> Consultation
                </h2>
                <p className="text-primary-foreground/70 text-lg">
                  Get personalized care from top experts. Select your preferred time and department.
                </p>
              </div>

              <div className="space-y-6 pt-8">
                {[
                  { day: "Monday - Friday", time: "8:00 AM - 9:00 PM" },
                  { day: "Saturday", time: "9:00 AM - 6:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-medium">{item.day}</span>
                    <span className="text-sm bg-white/10 px-3 py-1 rounded-full">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 lg:p-20 bg-card relative min-h-[600px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4 mb-10">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= i ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                          {i}
                        </div>
                        {i === 1 && <div className={`w-12 h-1 bg-muted rounded-full overflow-hidden`}><div className={`h-full bg-primary transition-all duration-500 ${step > 1 ? "w-full" : "w-0"}`} /></div>}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {step === 1 ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                          <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                              type="text"
                              required
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full bg-muted/50 border rounded-2xl py-4 pl-12 pr-4 focus:ring-2 ring-primary/20 outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
                          <div className="relative group">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                              type="tel"
                              required
                              placeholder="+1 (234) 567-890"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full bg-muted/50 border rounded-2xl py-4 pl-12 pr-4 focus:ring-2 ring-primary/20 outline-none transition-all"
                            />
                          </div>
                        </div>
                        <Button type="button" onClick={nextStep} className="w-full rounded-2xl py-8 text-lg font-bold gap-2">
                          Continue <ArrowRight className="w-5 h-5" />
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">Department</label>
                          <div className="relative group">
                            <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <select
                              required
                              value={formData.department}
                              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                              className="w-full bg-muted/50 border rounded-2xl py-4 pl-12 pr-4 focus:ring-2 ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                            >
                              <option value="">Select Specialization</option>
                              <option value="Cardiology">Cardiology</option>
                              <option value="Dermatology">Dermatology</option>
                              <option value="Pediatrics">Pediatrics</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">Select Date</label>
                          <div className="relative group">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                              type="date"
                              required
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              className="w-full bg-muted/50 border rounded-2xl py-4 pl-12 pr-4 focus:ring-2 ring-primary/20 outline-none transition-all cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Button type="button" variant="outline" onClick={prevStep} className="w-1/3 rounded-2xl py-8 gap-2 border-2">
                            <ArrowLeft className="w-5 h-5" /> Back
                          </Button>
                          <Button type="submit" disabled={loading} className="w-2/3 rounded-2xl py-8 text-lg font-bold gap-2 shadow-xl shadow-primary/20">
                            {loading ? "Processing..." : "Confirm Booking"} <CheckCircle2 className="w-5 h-5" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6 py-12"
                >
                  <div className="w-24 h-24 bg-green-100 dark:bg-green-500/20 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold">Appointment Confirmed!</h3>
                  <p className="text-muted-foreground text-lg max-w-sm mx-auto">
                    Thank you for choosing Swasthya. We have sent the confirmation details to your phone.
                  </p>
                  <Button onClick={() => { setIsSuccess(false); setStep(1); setFormData({name:"", phone:"", department:"", date:""}) }} className="rounded-full px-10 py-6 text-lg font-bold bg-green-600 hover:bg-green-700 text-white">
                    Book Another
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
