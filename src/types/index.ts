export type ServiceCategory = "cabello" | "color" | "unas" | "skincare" | "styling";

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  duration: number; // minutes
  priceFrom: number;
  detail: string;
  featured?: boolean;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  experience: string;
  specialties: string[];
  serviceIds: string[];
  image: string;
  featured?: boolean;
}

export interface TimeSlot {
  time: string; // "09:00"
  available: boolean;
}

export interface BookingDraft {
  serviceIds: string[];
  specialistId: string | null; // null = sin preferencia
  date: string | null; // ISO date YYYY-MM-DD
  time: string | null;
  firstVisit: boolean | null;
  note: string;
  referenceImage: string | null; // data URL
  privacyAccepted?: boolean;
}

export interface Appointment extends BookingDraft {
  id: string;
  code: string; // LM-XXXX
  createdAt: string;
  status: "upcoming" | "past" | "cancelled";
  totalDuration: number;
  totalPrice: number;
}

export type FinderAnswer = {
  intent: "cambio" | "mantenimiento" | "evento" | "cuidado" | "duda";
  time: "menos1h" | "1-2h" | "tiempo";
  firstVisit: boolean;
};
