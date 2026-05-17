"use client";

import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ModeToggle";
import { useState, useEffect } from "react";
import { LogOut } from "lucide-react";

const Navbar = ({ isScrolled, onBookClick }) => {
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("resetToken");
    window.location.href = "/login";
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Departments", href: "/departments" },
    { name: "About", href: "/about" },
    {
      name: "Doctors",
      href: "/pages/doctor",
      dropdown: [
        { name: "All Doctors", href: "/pages/doctor" },
        { name: "Details", href: "/pages/doctordetail" },
      ],
    },
    {
      name: "Services",
      href: "/service",
      dropdown: [
        { name: "Our Services", href: "/service" },
        { name: "Service Detail", href: "/servicedetail" },
      ],
    },
  ];

  return (
    <motion.div
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b shadow-sm py-2"
          : "bg-background py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 15 }}
            className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20"
          >
            S
          </motion.div>
          <span className="text-2xl font-bold tracking-tight hidden lg:block group-hover:text-primary transition-colors">
            Swasthya
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`px-4 py-2 text-sm font-medium transition-all hover:bg-primary/5 hover:text-primary ${
                        pathname.startsWith(link.href) ? "text-primary bg-primary/5" : ""
                      }`}
                    >
                      {link.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 p-2 animate-in fade-in slide-in-from-top-2">
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link href={item.href} className="w-full cursor-pointer rounded-md">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  variant="ghost"
                  asChild
                  className={`px-4 py-2 text-sm font-medium transition-all hover:bg-primary/5 hover:text-primary ${
                    pathname === link.href ? "text-primary bg-primary/5" : ""
                  }`}
                >
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:flex items-center bg-muted/50 rounded-full px-3 py-1 border focus-within:ring-2 ring-primary/20 transition-all">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none px-2 py-1 text-sm w-24 lg:w-48 placeholder:text-muted-foreground"
            />
          </div>
          
          <div className="flex items-center gap-1 md:gap-2">
            <ModeToggle />
            
            <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-primary/5">
              <ShoppingCart className="h-5 w-5" />
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 w-2.5 h-2.5 bg-destructive rounded-full border-2 border-background"
              />
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full overflow-hidden hover:bg-primary/5 border-2 border-transparent focus-visible:border-primary">
                    {user.profileImage ? (
                      <Image src={user.profileImage} alt={user.name} width={32} height={32} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 p-2">
                  <div className="flex flex-col space-y-1 p-2">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/pages/profile" className="cursor-pointer">My Profile</Link>
                  </DropdownMenuItem>
                  {user.role === "admin" && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin" className="cursor-pointer">Admin Dashboard</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button variant="outline" className="hidden sm:flex rounded-full">
                  Login
                </Button>
              </Link>
            )}

            <Button 
              variant="default" 
              onClick={onBookClick}
              className="hidden lg:flex rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 active:scale-95"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
