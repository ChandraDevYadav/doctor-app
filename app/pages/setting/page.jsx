'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => { // Changed 'page' to 'Page'
  const [profile, setProfile] = useState({
    name: 'Dr. Emily Johnson',
    email: 'emily.johnson@healthcare.com',
    phone: '(123) 456-7890',
    specialty: 'Cardiologist',
  });

  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleNotificationChange = (e) => {
    setNotifications({ ...notifications, [e.target.name]: e.target.checked });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile updated:', profile);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password update logic here
    if (password.newPassword === password.confirmPassword) {
      console.log('Password updated:', password.newPassword);
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <div>
      <div className='grid grid-cols-1 bg-cover bg-left' style={{ backgroundImage: "url('/pageheader.jpg')" }}>
        <div className='flex justify-center items-center py-16 md:py-24'>
            <div className=''>
            <h1 className='text-3xl md:text-5xl font-bold py-4 md:py-6 text-blue-600'>From Our Setting</h1>
            <div className='text-center flex justify-center items-center'>
            <p className='text-blue-600 text-center text-lg font-semibold'>Home&nbsp; - &nbsp;</p>
            <Link href='/' className='text-lg font-semibold'>Setting</Link>
            </div>
            </div>
        </div>
    </div>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Profile Update Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
        <form onSubmit={handleProfileSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Specialty</label>
              <input
                type="text"
                name="specialty"
                value={profile.specialty}
                onChange={handleProfileChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Update Profile
          </button>
        </form>
      </div>

      {/* Password Update Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
        <form onSubmit={handlePasswordSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={password.currentPassword}
                onChange={handlePasswordChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={password.newPassword}
                onChange={handlePasswordChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={password.confirmPassword}
                onChange={handlePasswordChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Change Password
          </button>
        </form>
      </div>

      {/* Notification Preferences Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Notification Preferences</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={notifications.emailNotifications}
                  onChange={handleNotificationChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-sm">Email Notifications</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="smsNotifications"
                  checked={notifications.smsNotifications}
                  onChange={handleNotificationChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-sm">SMS Notifications</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="pushNotifications"
                  checked={notifications.pushNotifications}
                  onChange={handleNotificationChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-sm">Push Notifications</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Page; // Ensure you export the renamed component
