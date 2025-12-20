// This file contains functions to interact with the admin-related APIs.
import api from "@/lib/api";

// Announcements API
export const getAnnouncements = async () => {
  const res = await api.get("/content/");
  return res.data;
};

export const createAnnouncement = async (data: { title: string; content: string }) => {
  const res = await api.post("/content/", data);
  return res.data;
};

export const deleteAnnouncement = async (id: string) => {
  const res = await api.delete(`/content/${id}`);
  return res.data;
};

// Staff API
export const getStaff = async () => {
  const res = await api.get("/staff/");
  return res.data;
};

export const createStaff = async (data: { name: string; position: string; contact: string; email?: string }) => {
  const res = await api.post("/staff/", data);
  return res.data;
};

export const updateStaff = async (id: string, data: { name: string; position: string; contact: string; email?: string }) => {
  const res = await api.put(`/staff/${id}`, data);
  return res.data;
};

export const deleteStaff = async (id: string) => {
  const res = await api.delete(`/staff/${id}`);
  return res.data;
};

// Forms API
export const getDisabledForms = async () => {
  const res = await api.get("/forms/disabled");
  return res.data;
};

export const updateDisabledForm = async (id: string, status: string) => {
  const res = await api.put(`/forms/disabled/${id}`, { status });
  return res.data;
};

export const deleteDisabledForm = async (id: string) => {
  const res = await api.delete(`/forms/disabled/${id}`);
  return res.data;
};
