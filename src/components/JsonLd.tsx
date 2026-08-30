export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Lúmina Studio Cuernavaca",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
    "@id": "https://luminacuernavaca.mx",
    url: "https://luminacuernavaca.mx",
    telephone: "+527773105678",
    email: "hola@luminacuernavaca.mx",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Teopanzolco 408, Col. Reforma",
      addressLocality: "Cuernavaca",
      addressRegion: "Morelos",
      postalCode: "62260",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.9212,
      longitude: -99.2342,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "18:00" },
    ],
    priceRange: "$$",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "342" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
