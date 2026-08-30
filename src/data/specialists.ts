import { Specialist } from "@/types";

export const specialists: Specialist[] = [
  {
    id: "sofia-reyes",
    name: "Sofía Reyes",
    role: "Directora creativa · Corte y Visagismo",
    bio: "Doce años esculpiendo cortes que crecen bien. Precisión tranquila.",
    longBio:
      "Formada en CDMX y Barcelona, Sofía entiende el cabello como arquitectura. Trabajó 5 años en Casa Parlour (Condesa) antes de abrir Lúmina en Cuernavaca en 2018. No sigue tendencias; traduce rasgos, hábitos y clima en un corte que te acompaña. Su lista de espera es larga por una razón: escucha.",
    experience: "12 años · Academia Sassoon CDMX, editorial",
    specialties: ["Corte Precisión", "Transformación", "Cabello rizado y húmedo"],
    serviceIds: ["corte-presicion", "corte-transformacion", "tratamiento-nutricion"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1000&fit=crop&crop=face",
    featured: true,
  },
  {
    id: "marco-duran",
    name: "Marco Durán",
    role: "Colorista senior",
    bio: "Color que no se nota. Luz que parece natural desde el primer día, incluso con el sol de Morelos.",
    longBio:
      "Químico de formación, colorista por obsesión. Marco formula cada mezcla como si fuera para su propia cabeza. Especialista en balayage para piel cálida y corrección de tonos naranjas por decoloraciones previas. Diplomado L'Oréal Pro CDMX.",
    experience: "9 años · Formación L'Oréal Pro, Wella México",
    specialties: ["Balayage", "Corrección", "Gloss"],
    serviceIds: ["color-luz", "color-total", "tratamiento-nutricion"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face",
  },
  {
    id: "ines-calvo",
    name: "Inés Calvo",
    role: "Estilista · Evento y Novias",
    bio: "Peinados que duran con humedad, fotos que no envejecen.",
    longBio:
      "Inés trabaja con novias desde 2016 en jardines de Cuernavaca, Tepoztlán y Jiutepec. Su método: probar dos caminos, fotografiar con luz natural, decidir juntas. Nada rígido, todo fotografiable y cómodo para bailar con 30°C.",
    experience: "8 años · 200+ novias en Morelos",
    specialties: ["Recogidos", "Ondas con humedad", "Novias"],
    serviceIds: ["styling-evento", "styling-novias", "corte-presicion"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop&crop=face",
  },
  {
    id: "yuki-tanaka",
    name: "Yuki Tanaka",
    role: "Terapeuta capilar & facial",
    bio: "Manos lentas. Productos silenciosos. Resultados visibles.",
    longBio:
      "Yuki se formó en spa japonés en CDMX y se instaló en Cuernavaca por el clima. Integra masaje craneal, aromaterapia suave y diagnóstico de cuero cabelludo afectado por sol y cloro. Su facial esencial es el más reservado los viernes antes de boda.",
    experience: "10 años · Tokio, CDMX, Cuernavaca",
    specialties: ["Rituales", "Cuero cabelludo", "Facial"],
    serviceIds: ["tratamiento-nutricion", "tratamiento-scalp", "facial-essencial", "facial-contorno"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop&crop=face",
  },
  {
    id: "carla-mora",
    name: "Carla Mora",
    role: "Manicurista",
    bio: "Uñas cuidadas sin artificio. Duración real, no promesa, aunque laves trastes diario.",
    longBio:
      "Carla trabaja en seco, sin torno agresivo. Sus manicuras duran porque respeta la cutícula y la forma natural. Fanática del rojo clásico y del nude perfecto. Certificada E.Mi y Organic Nails México.",
    experience: "6 años · Organic Nails, E.Mi",
    specialties: ["Manicura seca", "Esmaltado", "Pedicura spa"],
    serviceIds: ["manicura-lumina", "pedicura-restaurativa"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop&crop=face",
  },
];
