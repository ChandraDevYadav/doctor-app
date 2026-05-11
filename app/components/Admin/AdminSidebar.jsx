"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  UserRoundCheck, 
  CalendarCheck, 
  TrendingUp, 
  Settings, 
  LogOut 
} from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Overview", icon: LayoutDashboard, href: "/admin" },
  { name: "Doctors", icon: UserRoundCheck, href: "/admin/doctors" },
  { name: "Users", icon: Users, href: "/admin/users" },
  { name: "Appointments", icon: CalendarCheck, href: "/admin/appointments" },
  { name: "Analytics", icon: TrendingUp, href: "/admin/analytics" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-card border-r flex flex-col sticky top-0">
      <div className="p-6 border-b">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">A</div>
          <span className="text-xl font-bold tracking-tight">AdminPanel</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t space-y-2">
        <Link href="/admin/settings">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted transition-all">
            <Settings className="w-5 h-5" />
            Settings
          </div>
        </Link>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-all">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
