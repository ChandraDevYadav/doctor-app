"use client";

import { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import { 
  User, 
  Mail, 
  ShieldCheck, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  UserCog
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }
      const res = await fetch(`http://localhost:5000/api/v1/admin/users?page=${page}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 401 || res.status === 403) {
        window.location.href = "/login";
        return;
      }
      const data = await res.json();
      if (data.status === "success") {
        setUsers(data.data.users);
        setTotal(data.total);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">Manage patients and registered accounts on the platform.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {users.map((user, i) => (
              <motion.div
                key={user._id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="rounded-full bg-muted/50">
                    <UserCog className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <Image 
                      src={user.profileImage || "/default.jpg"} 
                      alt="" 
                      width={64} 
                      height={64} 
                      className="rounded-2xl bg-muted object-cover border-2 border-primary/10"
                    />
                    {user.isVerified && (
                      <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-lg border-2 border-card">
                        <ShieldCheck className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight">{user.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${
                        user.role === "doctor" ? "bg-green-500/10 text-green-600" :
                        user.role === "admin" ? "bg-rose-500/10 text-rose-600" :
                        "bg-blue-500/10 text-blue-600"
                      }`}>
                        {user.role}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">Last Active</span>
                    <span className="text-xs font-medium">Just now</span>
                  </div>
                  <Button variant="secondary" size="sm" className="rounded-xl font-bold text-xs">Manage User</Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between py-6">
          <p className="text-sm text-muted-foreground font-medium">Total {total} Users</p>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="rounded-xl px-6 h-10 border-2"
            >
              Previous
            </Button>
            <Button 
              variant="outline" 
              disabled={page * 10 >= total}
              onClick={() => setPage(page + 1)}
              className="rounded-xl px-6 h-10 border-2"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
