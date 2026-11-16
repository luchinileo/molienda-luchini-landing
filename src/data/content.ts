// Todo el texto de la landing vive acá: cambiar el contenido no obliga a tocar los componentes.

export const BUSINESS_NAME = "Molienda Luchini";

export const NAV_LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#menu", label: "Menú" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#visitanos", label: "Visitanos" },
] as const;

export const FEATURES = [
  {
    title: "Tostado en casa",
    text: "Tostamos cada semana en lotes chicos para que el café llegue a tu taza en su mejor momento.",
  },
  {
    title: "Pastelería del día",
    text: "Medialunas, budines y cookies que salen del horno cada mañana. Lo que no se vende, se dona.",
  },
  {
    title: "Un lugar para quedarte",
    text: "Wi-Fi rápido, enchufes en todas las mesas y música baja. Traé tu libro o tu notebook.",
  },
] as const;

export type MenuItem = { name: string; description: string; price: number };

export const MENU: ReadonlyArray<{ category: string; items: ReadonlyArray<MenuItem> }> = [
  {
    category: "Café",
    items: [
      { name: "Espresso", description: "Corto, intenso, de origen Colombia.", price: 2800 },
      { name: "Flat white", description: "Doble espresso con leche texturizada.", price: 3900 },
      { name: "Filtrado V60", description: "Origen rotativo, notas frutales.", price: 4200 },
      { name: "Cold brew", description: "Infusionado 18 horas en frío.", price: 4500 },
    ],
  },
  {
    category: "Para acompañar",
    items: [
      { name: "Medialuna de manteca", description: "Hojaldrada, receta de la casa.", price: 1600 },
      { name: "Budín de limón", description: "Húmedo, con glaseado cítrico.", price: 2900 },
      { name: "Tostado de campo", description: "Pan de masa madre, jamón y queso.", price: 5800 },
      { name: "Cookie de chocolate", description: "Chips de chocolate amargo y sal.", price: 2200 },
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote: "El mejor flat white del barrio. Vengo todas las mañanas antes de ir a trabajar.",
    author: "Lucía, vecina",
  },
  {
    quote: "Se puede trabajar tranquilo, el Wi-Fi anda bien y nadie te apura.",
    author: "Martín, diseñador freelance",
  },
  {
    quote: "Las medialunas son de otro planeta. Y el trato, impecable.",
    author: "Sofía, cliente de los sábados",
  },
] as const;

export const HOURS = [
  { days: "Lunes a viernes", time: "8:00 – 20:00" },
  { days: "Sábados", time: "9:00 – 21:00" },
  { days: "Domingos", time: "10:00 – 18:00" },
] as const;

export const CONTACT = {
  address: "Av. Maipú 640, Ushuaia",
  phone: "(2901) 55-0123",
  phoneHref: "tel:+542901550123",
} as const;

// WhatsApp usa el número internacional sin "+" y con el 9 de celular argentino.
export const SOCIAL = [
  { network: "instagram", label: "Instagram", handle: "@moliendaluchini", href: "https://instagram.com/moliendaluchini" },
  { network: "facebook", label: "Facebook", handle: "Molienda Luchini", href: "https://facebook.com/moliendaluchini" },
  { network: "whatsapp", label: "WhatsApp", handle: "(2901) 55-0123", href: "https://wa.me/5492901550123" },
] as const;

export type SocialNetwork = (typeof SOCIAL)[number]["network"];

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}
