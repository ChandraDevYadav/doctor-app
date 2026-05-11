import { ChevronsRight, Home, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t pt-20 px-4 md:px-20 lg:px-40 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-16 gap-12 relative z-10">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
            <span className="text-2xl font-bold tracking-tight">Swasthya</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Leading the way in medical excellence with a patient-centered approach. Your health is our priority.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm group">
              <Home className="w-5 h-5 text-primary" />
              <span className="group-hover:text-primary transition-colors">Bhattachowk-1, Biratnagar, Nepal</span>
            </li>
            <li className="flex gap-3 text-sm group">
              <Phone className="w-5 h-5 text-primary" />
              <span className="group-hover:text-primary transition-colors">+977-9805912060</span>
            </li>
            <li className="flex gap-3 text-sm group">
              <Mail className="w-5 h-5 text-primary" />
              <span className="group-hover:text-primary transition-colors">info@swasthya.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Our Specialists</h3>
          <ul className="space-y-4">
            {['Dr. Nick Sims', 'Dr. Michael Linden', 'Dr. Max Turner', 'Dr. Amy Adams', 'Dr. Julia Jameson'].map((doctor, index) => (
              <li key={index}>
                <Link className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all text-sm" href="">
                  <ChevronsRight className="w-4 h-4 text-primary/50" />
                  {doctor}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Popular Services</h3>
          <ul className="space-y-4">
            {['Cardiac Clinic', 'Ophthalmology', 'Pediatrics', 'Surgery', 'Rehabilitation'].map((service, index) => (
              <li key={index}>
                <Link className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all text-sm" href="">
                  <ChevronsRight className="w-4 h-4 text-primary/50" />
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Working Hours</h3>
          <div className="bg-background rounded-3xl p-6 shadow-sm border space-y-4">
            {[
              { day: "Mon - Sat", time: "8:00 AM - 10:00 PM" },
              { day: "Sunday", time: "6:00 AM - 8:00 PM" },
            ].map((hour, index) => (
              <div key={index} className="flex justify-between items-center text-sm border-b last:border-0 pb-3 last:pb-0">
                <span className="font-medium">{hour.day}</span>
                <span className="text-primary font-bold">{hour.time}</span>
              </div>
            ))}
            <Button className="w-full mt-4 rounded-xl shadow-lg shadow-primary/10">
              Get Help Now
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-10 border-t gap-4">
        <p className="text-sm text-muted-foreground">
          © 2024 Swasthya. Crafted with ❤️ for better health.
        </p>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Sitemap', 'Help'].map(item => (
            <Link key={item} href="" className="text-xs text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
