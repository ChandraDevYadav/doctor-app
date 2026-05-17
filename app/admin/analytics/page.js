"use client";

import { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from "recharts";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { API_BASE_URL } from "../../config/api";

export default function AdminAnalytics() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "/login";
          return;
        }
        const res = await fetch(`${API_BASE_URL}/api/v1/admin/analytics`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.status === 401 || res.status === 403) {
          window.location.href = "/login";
          return;
        }
        const data = await res.json();
        setAnalytics(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAnalytics();
  }, []);

  const barData = analytics?.appointmentsByStatus.map(item => ({
    status: item._id,
    count: item.count
  })) || [];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Deep Analytics</h1>
          <p className="text-muted-foreground">Advanced data visualization for your healthcare network.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Appointment Distribution */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card p-6 rounded-3xl border shadow-sm"
          >
            <h3 className="font-bold text-lg mb-8">Appointment Distribution</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="status" />
                  <YAxis />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="count" fill="#3b82f6" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Revenue Trend Line */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card p-6 rounded-3xl border shadow-sm"
          >
            <h3 className="font-bold text-lg mb-8">Monthly Revenue Trend</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={analytics?.monthlyRevenue}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="_id" 
                    tickFormatter={(val) => {
                      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                      return months[val - 1];
                    }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={4} dot={{r: 6}} activeDot={{r: 8}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <div className="bg-primary/5 p-8 rounded-[2rem] border border-primary/10 flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-2xl">A</div>
          <h2 className="text-2xl font-bold">Smart AI Insights</h2>
          <p className="text-muted-foreground max-w-xl">Our AI suggests that cardiac appointments are up by 20% this month. Consider onboarding more cardiologists to meet the demand.</p>
          <Button className="rounded-xl px-8">Generate Full Report</Button>
        </div>
      </div>
    </AdminLayout>
  );
}
