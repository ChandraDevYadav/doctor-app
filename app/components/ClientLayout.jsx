"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import MobileNavbar from "./Navbar/MobileNavbar";
import Footer from "./Footer/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdminOrLogin = pathname?.startsWith("/admin") || pathname?.startsWith("/login");

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
