"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import MobileNavbar from "./Navbar/MobileNavbar";
import Footer from "./Footer/Footer";
import { Loader2 } from "lucide-react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  
  // Define routes that require authentication
  const protectedRoutes = ["/pages/profile", "/"];
  
  // Admin routes (except login/register) require both auth and admin role
  const isAdminRoute = pathname?.startsWith("/admin") && !pathname?.includes("/login") && !pathname?.includes("/register");
  const isProtectedRoute = protectedRoutes.includes(pathname) || isAdminRoute;

  const isAdminOrLogin = pathname?.startsWith("/admin") || pathname?.startsWith("/login") || pathname?.startsWith("/register");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    
    if (isProtectedRoute) {
      if (!token || !userStr) {
        setIsAuthenticated(false);
        router.push("/login");
        return;
      }
      
      try {
        const user = JSON.parse(userStr);
        if (isAdminRoute && user.role !== "admin") {
          setIsAuthenticated(false);
          router.push("/"); // Redirect non-admins away from admin routes
          return;
        }
        setIsAuthenticated(true);
      } catch (err) {
        setIsAuthenticated(false);
        router.push("/login");
      }
    } else {
      setIsAuthenticated(true);
    }
  }, [pathname, isProtectedRoute, isAdminRoute, router]);

  if (isProtectedRoute && isAuthenticated === null) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground font-medium animate-pulse">Verifying Access...</p>
      </div>
    );
  }

  if (isProtectedRoute && isAuthenticated === false) {
    return null; // Prevents flashing content while redirecting
  }

  return (
    <>
      {!isAdminOrLogin && <Header />}
      {!isAdminOrLogin && <MobileNavbar />}
      <main className="flex-1">
        {children}
      </main>
      {!isAdminOrLogin && <Footer />}
    </>
  );
}
