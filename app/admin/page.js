"use client";

import { useEffect, useState } from "react";
import AdminLayout from "../components/Admin/AdminLayout";
import { 
  Users, 
  UserRoundCheck, 
  CalendarCheck, 
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { motion } from "framer-motion";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "/login";
          return;
        }
        const res = await fetch("http://localhost:5000/api/v1/admin/analytics", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("token");
          window.location.href = "/login";
          return;
        }
        const data = await res.json();
        if (data.status === "success") {
          setAnalytics(data.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading Analytics...</div>;

  const stats = [
    { label: "Total Users", value: analytics?.totalUsers, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", trend: "+12%" },
    { label: "Doctors", value: analytics?.totalDoctors, icon: UserRoundCheck, color: "text-green-500", bg: "bg-green-500/10", trend: "+5%" },
    { label: "Appointments", value: analytics?.totalAppointments, icon: CalendarCheck, color: "text-amber-500", bg: "bg-amber-500/10", trend: "+18%" },
    { label: "Revenue", value: `$${analytics?.totalRevenue}`, icon: DollarSign, color: "text-rose-500", bg: "bg-rose-500/10", trend: "+25%" },
  ];

  const pieData = analytics?.appointmentsByStatus.map((item) => ({
    name: item._id,
    value: item.count
  })) || [];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground">Monitor your platform's performance and growth.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-6 rounded-2xl border shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded-full">
                  <ArrowUpRight className="w-3 h-3" />
                  {stat.trend}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Area Chart */}
          <div className="lg:col-span-2 bg-card p-6 rounded-2xl border shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-lg">Revenue Growth</h3>
              <select className="bg-muted border-none rounded-lg text-xs font-medium py-2 px-3 outline-none">
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analytics?.monthlyRevenue}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="_id" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: "#94a3b8", fontSize: 12}}
                    tickFormatter={(val) => {
                      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                      return months[val - 1];
                    }}
                  />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: "#94a3b8", fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Status Pie Chart */}
          <div className="bg-card p-6 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-lg mb-8">Appointments by Status</h3>
            <div className="h-[300px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-2xl font-bold">{analytics?.totalAppointments}</p>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Total</p>
              </div>
            </div>
            <div className="space-y-3 mt-4">
              {pieData.map((item, i) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                    <span className="text-sm font-medium capitalize">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
