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
  ExternalLink,
  Edit,
  Trash2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiCamera } from "react-icons/fi";

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


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "", username: "", email: "", password: "", petName: "",
    specialization: "", experience: "", fees: "", profileImage: ""
  });
  const [isCreating, setIsCreating] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateDoctor = async (e) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/v1/admin/doctors", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setIsModalOpen(false);
        setFormData({
          name: "", username: "", email: "", password: "", petName: "",
          specialization: "", experience: "", fees: "", profileImage: ""
        });
        setImagePreview(null);
        fetchDoctors();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsCreating(false);
    }
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const openEditModal = (doctor) => {
    setEditFormData({
      id: doctor._id,
      name: doctor.userId.name,
      email: doctor.userId.email,
      specialization: doctor.specialization,
      experience: doctor.experience,
      fees: doctor.fees,
      profileImage: doctor.userId.profileImage || ""
    });
    setImagePreview(doctor.userId.profileImage || null);
    setIsEditModalOpen(true);
  };

  const handleEditDoctor = async (e) => {
    e.preventDefault();
    setIsEditing(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/v1/admin/doctors/${editFormData.id}`, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(editFormData)
      });
      if (res.ok) {
        setIsEditModalOpen(false);
        fetchDoctors();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsEditing(false);
    }
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [doctorToDelete, setDoctorToDelete] = useState(null);

  const confirmDelete = (id) => {
    setDoctorToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteDoctor = async () => {
    if (!doctorToDelete) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/v1/admin/doctors/${doctorToDelete}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        fetchDoctors();
        setIsDeleteModalOpen(false);
        setDoctorToDelete(null);
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
            <Button onClick={() => setIsModalOpen(true)} className="bg-primary text-primary-foreground font-bold rounded-xl h-10">
              + Create Doctor
            </Button>
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
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button size="icon" variant="ghost" className="h-8 w-8">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-32">
                              <DropdownMenuItem className="cursor-pointer" onClick={() => openEditModal(doctor)}>
                                <Edit className="w-4 h-4 mr-2" /> Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50" onClick={() => confirmDelete(doctor._id)}>
                                <Trash2 className="w-4 h-4 mr-2" /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
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

      {/* Create Doctor Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card w-full max-w-2xl rounded-3xl p-8 border shadow-2xl relative"
          >
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-muted-foreground hover:text-foreground">
              <XCircle className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6">Create New Doctor</h2>
            
            <form onSubmit={handleCreateDoctor} className="space-y-6">
              
              {/* Image Upload Area */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative inline-block">
                  <div className="relative group cursor-pointer w-32 h-32 rounded-full border-2 border-dashed border-primary/50 bg-primary/5 flex items-center justify-center overflow-hidden transition-all hover:bg-primary/10">
                    {imagePreview ? (
                      <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                    ) : (
                      <div className="text-center p-4">
                        <div className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-xl font-bold">+</span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">Upload Photo</p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs font-bold">Change</span>
                    </div>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <div className="absolute bottom-1 bg-primary text-primary-foreground p-2.5 rounded-full shadow-lg border-2 border-background pointer-events-none transition-transform group-hover:scale-110">
                    <FiCamera className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name" className="bg-muted/50 border rounded-xl p-3 outline-none focus:ring-2 ring-primary/20" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <input required type="text" placeholder="Username" className="bg-muted/50 border rounded-xl p-3 outline-none focus:ring-2 ring-primary/20" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} />
                <input required type="email" placeholder="Email" className="bg-muted/50 border rounded-xl p-3 outline-none focus:ring-2 ring-primary/20" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <input required type="password" placeholder="Password" className="bg-muted/50 border rounded-xl p-3 outline-none focus:ring-2 ring-primary/20" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
                <input required type="text" placeholder="Pet Name (Security)" className="bg-muted/50 border rounded-xl p-3 outline-none focus:ring-2 ring-primary/20" value={formData.petName} onChange={e => setFormData({...formData, petName: e.target.value})} />
                <input required type="text" placeholder="Specialization" className="bg-muted/50 border rounded-xl p-3 outline-none focus:ring-2 ring-primary/20" value={formData.specialization} onChange={e => setFormData({...formData, specialization: e.target.value})} />
                <input required type="number" placeholder="Experience (Years)" className="bg-muted/50 border rounded-xl p-3 outline-none focus:ring-2 ring-primary/20" value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} />
                <input required type="number" placeholder="Consultation Fees" className="bg-muted/50 border rounded-xl p-3 outline-none focus:ring-2 ring-primary/20" value={formData.fees} onChange={e => setFormData({...formData, fees: e.target.value})} />
              </div>
              <Button type="submit" disabled={isCreating} className="w-full mt-6 h-12 rounded-xl">
                {isCreating ? "Creating..." : "Create Doctor"}
              </Button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Edit Doctor Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card w-full max-w-2xl rounded-3xl p-8 border shadow-2xl relative"
          >
            <button onClick={() => setIsEditModalOpen(false)} className="absolute top-6 right-6 text-muted-foreground hover:text-foreground">
              <XCircle className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6">Edit Doctor</h2>
            
            <form onSubmit={handleEditDoctor} className="space-y-6">
              
              {/* Image Upload Area */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative inline-block">
                  <div className="relative group cursor-pointer w-32 h-32 rounded-full border-2 border-dashed border-primary/50 bg-primary/5 flex items-center justify-center overflow-hidden transition-all hover:bg-primary/10">
                    {imagePreview ? (
                      <Image 
                        src={imagePreview.startsWith('http') || imagePreview.startsWith('data:') || imagePreview.startsWith('/') ? imagePreview : `/${imagePreview}`} 
                        alt="Preview" fill className="object-cover" 
                      />
                    ) : (
                      <div className="text-center p-4">
                        <div className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-xl font-bold">+</span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">Upload Photo</p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs font-bold">Change</span>
                    </div>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setImagePreview(reader.result);
                            setEditFormData({ ...editFormData, profileImage: reader.result });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 bg-primary text-primary-foreground p-1.5 rounded-full shadow-lg border-2 border-background pointer-events-none transition-transform group-hover:scale-110">
                    <FiCamera className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name" className="bg-muted/50 border rounded-xl p-3 outline-none focus:ring-2 ring-primary/20" value={editFormData.name} onChange={e => setEditFormData({...editFormData, name: e.target.value})} />
                <input required type="email" placeholder="Email" className="bg-muted/50 border rounded-xl p-3 outline-none focus:ring-2 ring-primary/20" value={editFormData.email} onChange={e => setEditFormData({...editFormData, email: e.target.value})} />
                <input required type="text" placeholder="Specialization" className="bg-muted/50 border rounded-xl p-3 outline-none focus:ring-2 ring-primary/20" value={editFormData.specialization} onChange={e => setEditFormData({...editFormData, specialization: e.target.value})} />
                <input required type="number" placeholder="Experience (Years)" className="bg-muted/50 border rounded-xl p-3 outline-none focus:ring-2 ring-primary/20" value={editFormData.experience} onChange={e => setEditFormData({...editFormData, experience: e.target.value})} />
                <input required type="number" placeholder="Consultation Fees" className="bg-muted/50 border rounded-xl p-3 outline-none focus:ring-2 ring-primary/20" value={editFormData.fees} onChange={e => setEditFormData({...editFormData, fees: e.target.value})} />
              </div>
              <Button type="submit" disabled={isEditing} className="w-full mt-6 h-12 rounded-xl">
                {isEditing ? "Saving Changes..." : "Save Changes"}
              </Button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card w-full max-w-md rounded-3xl p-8 border shadow-2xl relative text-center"
          >
            <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trash2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Delete Doctor?</h2>
            <p className="text-muted-foreground mb-8">
              Are you sure you want to delete this doctor? This will permanently remove their account, profile, and all associated data. This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="flex-1 h-12 rounded-xl font-bold"
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setDoctorToDelete(null);
                }}
              >
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                className="flex-1 h-12 rounded-xl font-bold bg-red-600 hover:bg-red-700"
                onClick={handleDeleteDoctor}
              >
                Yes, Delete
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AdminLayout>
  );
}
