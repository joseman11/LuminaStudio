import { Specialist } from "@/types";

export const specialists: Specialist[] = [
  {
    id: "sofia-reyes",
    name: "Sofía Reyes",
    role: "Directora creativa · Corte y Visagismo",
    bio: "Doce años esculpiendo cortes que crecen bien. Precisión tranquila.",
    longBio:
      "Formada en Londres y Barcelona, Sofía entiende el cabello como arquitectura. No sigue tendencias; traduce rasgos y hábitos en un corte que te acompaña. Su lista de espera es larga por una razón: escucha.",
    experience: "12 años · Sassoon, freelance editorial",
    specialties: ["Corte Precisión", "Transformación", "Cabello rizado"],
    serviceIds: ["corte-presicion", "corte-transformacion", "tratamiento-nutricion"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1000&fit=crop&crop=face",
    featured: true,
  },
  {
    id: "marco-duran",
    name: "Marco Durán",
    role: "Colorista senior",
    bio: "Color que no se nota. Luz que parece natural desde el primer día.",
    longBio:
      "Químico de formación, colorista por obsesión. Marco formula cada mezcla como si fuera para su propia cabeza. Especialista en rubios fríos y morenos luminosos sin efecto casco.",
    experience: "9 años · Formación L'Oréal Pro, Wella",
    specialties: ["Balayage", "Corrección", "Gloss"],
    serviceIds: ["color-luz", "color-total", "tratamiento-nutricion"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face",
  },
  {
    id: "ines-calvo",
    name: "Inés Calvo",
    role: "Estilista · Evento y Novias",
    bio: "Peinados que duran, fotos que no envejecen.",
    longBio:
      "Inés trabaja con novias desde 2016. Su método: probar dos caminos, fotografiar, decidir juntas. Nada rígido, todo fotografiable y cómodo para bailar.",
    experience: "8 años · 200+ novias",
    specialties: ["Recogidos", "Ondas", "Novias"],
    serviceIds: ["styling-evento", "styling-novias", "corte-presicion"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop&crop=face",
  },
  {
    id: "yuki-tanaka",
    name: "Yuki Tanaka",
    role: "Terapeuta capilar & facial",
    bio: "Manos lentas. Productos silenciosos. Resultados visibles.",
    longBio:
      "Yuki viene del mundo del spa japonés. Integra masaje craneal, aromaterapia suave y diagnóstico de cuero cabelludo. Su facial esencial es el más reservado los lunes.",
    experience: "10 años · Tokio, Madrid",
    specialties: ["Rituales", "Cuero cabelludo", "Facial"],
    serviceIds: ["tratamiento-nutricion", "tratamiento-scalp", "facial-essencial", "facial-contorno"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop&crop=face",
  },
  {
    id: "carla-mora",
    name: "Carla Mora",
    role: "Manicurista",
    bio: "Uñas cuidadas sin artificio. Duración real, no promesa.",
    longBio:
      "Carla trabaja en seco, sin torno agresivo. Sus manicuras duran porque respeta la cutícula y la forma natural. Fanática del rojo clásico y del nude perfecto.",
    experience: "6 años · Formación E.Mi",
    specialties: ["Manicura seca", "Esmaltado", "Pedicura"],
    serviceIds: ["manicura-lumina", "pedicura-restaurativa"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop&crop=face",
  },
];
