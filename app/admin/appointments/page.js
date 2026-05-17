"use client";

import { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import { 
  Calendar, 
  Clock, 
  User, 
  Stethoscope, 
  ChevronLeft, 
  ChevronRight,
  Search,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }
      const res = await fetch(`http://localhost:5000/api/v1/admin/appointments?page=${page}&status=${statusFilter}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 401 || res.status === 403) {
        window.location.href = "/login";
        return;
      }
      const data = await res.json();
      if (data.status === "success") {
        setAppointments(data.data.appointments);
        setTotal(data.total);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [page, statusFilter]);

  const handleUpdateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/v1/admin/appointments/${id}/status`, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        fetchAppointments(); // Refresh list
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:items-center sm:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Appointment Logs</h1>
            <p className="text-muted-foreground">Track all medical consultations across the platform.</p>
          </div>
          <div className="flex gap-2">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-card border rounded-xl px-4 py-2 text-sm outline-none cursor-pointer hover:bg-muted transition-colors"
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence mode="popLayout">
            {appointments.map((apt, i) => (
              <motion.div
                key={apt._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-8 flex-1">
                  {/* Patient Info */}
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Patient</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm">{apt.patientId?.name}</span>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Doctor</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                        <Stethoscope className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm">{apt.doctorId?.userId?.name}</span>
                    </div>
                  </div>

                  {/* Date/Time */}
                  <div className="flex gap-6">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Date</p>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Calendar className="w-4 h-4 text-primary" />
                        {new Date(apt.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Slot</p>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Clock className="w-4 h-4 text-primary" />
                        {apt.timeSlot}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-t md:border-t-0 pt-4 md:pt-0">
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                    apt.status === "completed" ? "bg-green-500/10 text-green-600" :
                    apt.status === "cancelled" ? "bg-red-500/10 text-red-600" :
                    apt.status === "confirmed" ? "bg-blue-500/10 text-blue-600" :
                    "bg-amber-500/10 text-amber-600"
                  }`}>
                    {apt.status}
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                    apt.paymentStatus === "paid" ? "bg-blue-500/10 text-blue-600" : "bg-muted text-muted-foreground"
                  }`}>
                    {apt.paymentStatus}
                  </div>
                  
                  {apt.status === "pending" && (
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleUpdateStatus(apt._id, "confirmed")} className="h-8 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                        Accept
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleUpdateStatus(apt._id, "cancelled")} className="h-8 border-red-500 text-red-600 hover:bg-red-500 hover:text-white rounded-lg">
                        Cancel
                      </Button>
                    </div>
                  )}
                  {apt.status !== "pending" && (
                    <Button variant="ghost" size="sm" className="font-bold text-xs">View Details</Button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between py-6">
          <p className="text-sm text-muted-foreground">Showing {appointments.length} of {total} appointments</p>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="rounded-xl px-6 h-10"
            >
              Previous
            </Button>
            <Button 
              variant="outline" 
              disabled={page * 10 >= total}
              onClick={() => setPage(page + 1)}
              className="rounded-xl px-6 h-10"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
