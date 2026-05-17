import { API_BASE_URL } from "../config/api";

const API_BASE = `${API_BASE_URL}/api/v1/content`;

export const getDepartments = async () => {
  try {
    const res = await fetch(`${API_BASE}/departments`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch departments");
    const data = await res.json();
    return data.data.departments;
  } catch (error) {
    console.error("Error fetching departments:", error);
    return null;
  }
};

export const getServices = async () => {
  try {
    const res = await fetch(`${API_BASE}/services`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch services");
    const data = await res.json();
    return data.data.services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return null;
  }
};

export const getSpecializations = async () => {
  try {
    const res = await fetch(`${API_BASE}/specializations`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch specializations");
    const data = await res.json();
    return data.data.specializations;
  } catch (error) {
    console.error("Error fetching specializations:", error);
    return null;
  }
};

export const getFeedbackStories = async () => {
  try {
    const res = await fetch(`${API_BASE}/feedback-stories`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch feedback stories");
    const data = await res.json();
    return data.data.stories;
  } catch (error) {
    console.error("Error fetching feedback stories:", error);
    return null;
  }
};

export const getStats = async () => {
  try {
    const res = await fetch(`${API_BASE}/stats`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch stats");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching stats:", error);
    return null;
  }
};
