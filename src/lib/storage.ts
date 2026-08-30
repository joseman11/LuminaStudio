"use client";
import { Appointment, BookingDraft } from "@/types";
import { services } from "@/data/services";

const KEY = "lumina_appointments_v2";
const DRAFT_KEY = "lumina_draft_v2";

export function loadAppointments(): Appointment[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveAppointments(list: Appointment[]) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function addAppointment(a: Appointment) {
  const list = loadAppointments();
  list.unshift(a);
  saveAppointments(list);
}

export function cancelAppointment(id: string) {
  const list = loadAppointments().map((a) => (a.id === id ? { ...a, status: "cancelled" as const } : a));
  saveAppointments(list);
}

export function calcTotals(draft: BookingDraft) {
  const selected = services.filter((s) => draft.serviceIds.includes(s.id));
  const totalDuration = selected.reduce((acc, s) => acc + s.duration, 0);
  const totalPrice = selected.reduce((acc, s) => acc + s.priceFrom, 0);
  return { selected, totalDuration, totalPrice };
}

export function generateCode(): string {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `LM-${n}`;
}

export function saveDraft(d: BookingDraft) {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(d));
}
export function loadDraft(): BookingDraft | null {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
