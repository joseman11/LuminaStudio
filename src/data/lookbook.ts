export interface LookItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: "vertical" | "horizontal" | "square";
  size: "large" | "medium" | "small";
}

export const lookbook: LookItem[] = [
  {
    id: "1",
    title: "Bob pulido, nuca limpia",
    category: "Corte",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1000&fit=crop",
    aspect: "vertical",
    size: "large",
  },
  {
    id: "2",
    title: "Rubio ceniza, raíz difuminada",
    category: "Color",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=600&fit=crop",
    aspect: "horizontal",
    size: "medium",
  },
  {
    id: "3",
    title: "Recogido bajo, raya al medio",
    category: "Styling",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=800&fit=crop",
    aspect: "vertical",
    size: "medium",
  },
  {
    id: "4",
    title: "Piel descansada, sábado mañana",
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=600&fit=crop",
    aspect: "square",
    size: "small",
  },
  {
    id: "5",
    title: "Manicura leche, uña corta",
    category: "Uñas",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=800&fit=crop",
    aspect: "vertical",
    size: "small",
  },
  {
    id: "6",
    title: "Melenón con capas invisibles",
    category: "Corte",
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=1000&h=700&fit=crop",
    aspect: "horizontal",
    size: "large",
  },
  {
    id: "7",
    title: "Castaño brillo, gloss frío",
    category: "Color",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=900&fit=crop",
    aspect: "vertical",
    size: "medium",
  },
  {
    id: "8",
    title: "Espacio Lúmina — luz de tarde",
    category: "Espacio",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
    aspect: "horizontal",
    size: "medium",
  },
];
