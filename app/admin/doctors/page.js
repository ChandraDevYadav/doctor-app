"use client";

import { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import { 
  CheckCircle2, 
  XCircle, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  MoreVertical,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AdminDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }
      const res = await fetch(`http://localhost:5000/api/v1/admin/doctors?page=${page}&status=${statusFilter}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 401 || res.status === 403) {
        window.location.href = "/login";
        return;
      }
      const data = await res.json();
      if (data.status === "success") {
        setDoctors(data.data.doctors);
        setTotal(data.total);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [page, statusFilter]);

  const handleApprove = async (id, status) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/v1/admin/doctors/${id}/approve`, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
      const data = await res.json();
      if (data.status === "success") {
        fetchDoctors(); // Refresh list
      }
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Doctor Management</h1>
            <p className="text-muted-foreground">Approve or manage professional doctors on your platform.</p>
          </div>
          <div className="flex gap-2">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search doctors..." 
                className="bg-card border rounded-xl py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 ring-primary/20 w-full sm:w-64"
              />
            </div>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-card border rounded-xl px-4 py-2 text-sm outline-none cursor-pointer hover:bg-muted transition-colors"
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50 border-b">
                  <th className="p-4 font-bold text-sm">Doctor</th>
                  <th className="p-4 font-bold text-sm">Specialization</th>
                  <th className="p-4 font-bold text-sm">Experience</th>
                  <th className="p-4 font-bold text-sm">Status</th>
                  <th className="p-4 font-bold text-sm text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <AnimatePresence mode="popLayout">
                  {doctors.map((doctor, i) => (
                    <motion.tr 
                      key={doctor._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Image 
                            src={doctor.userId.profileImage || "/default.jpg"} 
                            alt="" 
                            width={40} 
                            height={40} 
                            className="rounded-full bg-muted object-cover"
                          />
                          <div>
                            <p className="font-bold text-sm">{doctor.userId.name}</p>
                            <p className="text-xs text-muted-foreground">{doctor.userId.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm bg-primary/5 text-primary px-3 py-1 rounded-full font-medium">
                          {doctor.specialization}
                        </span>
                      </td>
                      <td className="p-4 text-sm">{doctor.experience} Years</td>
                      <td className="p-4">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          doctor.isApproved === "approved" ? "bg-green-500/10 text-green-600" :
                          doctor.isApproved === "pending" ? "bg-amber-500/10 text-amber-600" :
                          "bg-red-500/10 text-red-600"
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            doctor.isApproved === "approved" ? "bg-green-600" :
                            doctor.isApproved === "pending" ? "bg-amber-600" :
                            "bg-red-600"
                          }`} />
                          {doctor.isApproved}
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-2">
                          {doctor.isApproved !== "approved" && (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => handleApprove(doctor._id, "approved")}
                              className="h-8 rounded-lg border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                            >
                              <CheckCircle2 className="w-4 h-4 mr-1" /> Approve
                            </Button>
                          )}
                          {doctor.isApproved !== "rejected" && (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => handleApprove(doctor._id, "rejected")}
                              className="h-8 rounded-lg border-red-500 text-red-600 hover:bg-red-500 hover:text-white"
                            >
                              <XCircle className="w-4 h-4 mr-1" /> Reject
                            </Button>
                          )}
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t flex items-center justify-between bg-muted/20">
            <p className="text-sm text-muted-foreground font-medium">
              Showing <span className="text-foreground">{(page-1)*10 + 1}</span> to <span className="text-foreground">{Math.min(page*10, total)}</span> of <span className="text-foreground">{total}</span> doctors
            </p>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="rounded-lg h-9 w-9 p-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                disabled={page * 10 >= total}
                onClick={() => setPage(page + 1)}
                className="rounded-lg h-9 w-9 p-0"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
