// Simulated availability
export function getDayAvailability(date: Date): { available: boolean; reason?: string } {
  const day = date.getDay(); // 0 Sun
  if (day === 0) return { available: false, reason: "Cerrado domingo" };
  if (day === 1) return { available: false, reason: "Cerrado lunes" };
  // random closure for demo: 5th of month
  if (date.getDate() === 5) return { available: false, reason: "Completo" };
  return { available: true };
}

export function getSlotsForDate(dateStr: string, specialistId: string | null, duration: number): string[] {
  // duration affects start times; longer services have fewer late slots
  const base = ["09:00", "09:30", "10:30", "11:00", "12:00", "12:30", "14:30", "15:00", "16:00", "16:30", "18:00", "18:30"];
  // deterministic pseudo-random based on date + specialist
  let seed = 0;
  for (let i = 0; i < dateStr.length; i++) seed += dateStr.charCodeAt(i);
  if (specialistId) for (let i = 0; i < specialistId.length; i++) seed += specialistId.charCodeAt(i);
  const filtered = base.filter((_, i) => {
    // simple hash
    const h = Math.abs(Math.sin(seed + i * 99) * 10000) % 1;
    if (duration > 120 && ["18:00", "18:30", "16:30"].includes(base[i])) return false;
    if (duration > 90 && base[i] === "18:30") return false;
    return h > 0.35;
  });
  // ensure at least 4 slots
  if (filtered.length < 4) return base.slice(0, 5);
  return filtered;
}

export function formatDateLong(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("es-MX", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}
export function formatDateShort(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("es-MX", { day: "numeric", month: "short" });
}

export function formatPrice(mxn: number): string {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(mxn);
}
