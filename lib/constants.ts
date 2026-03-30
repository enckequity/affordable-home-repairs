// ============================================================
// Affordable Home Repairs LLC — Single source of truth
// ============================================================

export const COMPANY = {
  name: "Affordable Home Repairs LLC",
  owner: "Andy Watts",
  phone: "(850) 496-2984",
  phoneRaw: "8504962984",
  email: "andywatts1@yahoo.com",
  address: "3394 Highway 90 E, Crestview, FL 32539",
  tagline: "A job done right the first time, EVERY time.",
  yearsExperience: 27,
  hours: {
    "Wednesday - Friday": "7:00 AM - 7:00 PM",
    "Saturday - Tuesday": "By Appointment",
  },
  googleMapsUrl:
    "https://www.google.com/maps/place/3394+Highway+90+E,+Crestview,+FL+32539",
  siteUrl: "https://affordable-home-repairs.vercel.app",
} as const;

// ------------------------------------------------------------
// Services
// ------------------------------------------------------------
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide-react icon name
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "handyman",
    title: "Handyman Services",
    description:
      "From leaky faucets to squeaky doors, no job is too small. We handle the everyday fixes that keep Florida Panhandle homes running smoothly so you can focus on what matters.",
    icon: "Wrench",
  },
  {
    id: "carpentry",
    title: "Carpentry",
    description:
      "Custom trim, shelving, deck repairs, and structural woodwork built to withstand the humid Gulf Coast climate. Quality craftsmanship with 27 years of hands-on experience.",
    icon: "Hammer",
  },
  {
    id: "painting",
    title: "Interior & Exterior Painting",
    description:
      "Clean lines, proper prep, and premium paints that hold up against Crestview's heat and humidity. We protect your surfaces and leave your home looking brand new.",
    icon: "Paintbrush",
  },
  {
    id: "cabinet-refinishing",
    title: "Cabinet Refinishing",
    description:
      "Transform your kitchen or bathroom without a full remodel. We sand, prime, and refinish your existing cabinets for a fraction of replacement cost — a favorite with Crestview homeowners.",
    icon: "PaintBucket",
    featured: true,
  },
  {
    id: "roof-repair",
    title: "Roof Repair",
    description:
      "Patching leaks, replacing damaged shingles, and sealing flashing before Florida storm season hits. We keep your roof tight and your home dry year-round.",
    icon: "Home",
  },
  {
    id: "drywall",
    title: "Drywall Repair",
    description:
      "Holes, cracks, and water damage patched seamlessly. Whether it's a doorknob dent or hurricane-related damage, we restore your walls to a smooth, paint-ready finish.",
    icon: "Square",
  },
  {
    id: "doors-windows",
    title: "Door & Window Work",
    description:
      "Installation, replacement, and repair of interior and exterior doors and windows. Proper sealing keeps out Gulf Coast moisture and keeps your energy bills down.",
    icon: "DoorOpen",
  },
  {
    id: "property-maintenance",
    title: "Property Maintenance",
    description:
      "Ongoing upkeep for rental properties, vacation homes, and commercial buildings across the Emerald Coast. We keep your investment in top shape between tenants or seasons.",
    icon: "Building2",
  },
];

// ------------------------------------------------------------
// Testimonials
// ------------------------------------------------------------
export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Andy painted two bathrooms, a bedroom, and a hallway. Even did touch-ups around the house without us asking. The man goes the extra mile.",
    name: "Dave",
    location: "Crestview",
  },
  {
    quote:
      "Had some storm damage to our porch and part of the roof. Andy came out next day, gave us an honest price, and had it fixed by the weekend. Can't ask for more than that.",
    name: "Michelle",
    location: "Fort Walton Beach",
  },
  {
    quote:
      "We got quotes from three companies to refinish our kitchen cabinets. Andy was the most affordable and the only one who actually showed up when he said he would. They look amazing now.",
    name: "Carlos",
    location: "Niceville",
  },
  {
    quote:
      "I manage a few rental properties near Eglin and Andy handles all the turnover repairs. Drywall patches, door replacements, paint — he's fast and I never have to go back and check his work.",
    name: "Tammy",
    location: "Valparaiso",
  },
  {
    quote:
      "Real good communication from start to finish. Texted me photos before he started and after he was done. Price was exactly what he quoted, no surprises. Will definitely use him again.",
    name: "James",
    location: "Destin",
  },
];

// ------------------------------------------------------------
// Stats
// ------------------------------------------------------------
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 27, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
  { value: 1, suffix: "", label: "Day Response Time" },
];

// ------------------------------------------------------------
// Service Areas
// ------------------------------------------------------------
export const SERVICE_AREAS: string[] = [
  "Crestview",
  "Niceville",
  "Fort Walton Beach",
  "Destin",
  "Baker",
  "Valparaiso",
  "Shalimar",
  "Mary Esther",
  "Eglin AFB",
  "Hurlburt Field",
  "Navarre",
  "DeFuniak Springs",
  "Freeport",
  "Santa Rosa Beach",
  "Miramar Beach",
  "Mossy Head",
  "Auburn",
  "Cannon Town",
  "Bagdad",
  "Deerland",
];

// ------------------------------------------------------------
// Navigation
// ------------------------------------------------------------
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Gallery", href: "/#gallery" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

// ------------------------------------------------------------
// FAQ
// ------------------------------------------------------------
export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire Florida Panhandle including Crestview, Niceville, Fort Walton Beach, Destin, Navarre, DeFuniak Springs, and the surrounding Okaloosa, Walton, and Santa Rosa county communities. We're also happy to work with military families near Eglin AFB and Hurlburt Field.",
  },
  {
    question: "How do I get a free estimate?",
    answer:
      "Give us a call at (850) 496-2984 or send an email to andywatts1@yahoo.com. We'll schedule a time to come look at the job — usually within a day or two — and give you an honest quote on the spot. No pressure, no hidden fees.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Affordable Home Repairs LLC is a fully licensed and insured home repair business operating in the state of Florida. We carry liability insurance so you and your property are protected.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "Most small to medium jobs are completed within 1-3 days. Larger projects like full cabinet refinishing or multi-room painting typically take 3-5 days. We'll give you a clear timeline before we start and stick to it.",
  },
  {
    question: "Do you work on weekends?",
    answer:
      "Our regular hours are Wednesday through Friday, 7 AM to 7 PM. We're available Saturday through Tuesday by appointment for customers who need flexibility. Just give us a call and we'll work something out.",
  },
  {
    question: "How long has Andy been doing home repairs?",
    answer:
      "Andy Watts has over 27 years of experience in home repair, carpentry, painting, and general contracting. He personally oversees every job — you won't get handed off to a random subcontractor.",
  },
  {
    question: "Do you offer military discounts?",
    answer:
      "Absolutely. We're proud to serve the military community around Eglin AFB and Hurlburt Field. Active duty, veterans, and military families receive a discount on all services. Just mention it when you call for your estimate.",
  },
  {
    question: "What if I'm not happy with the work?",
    answer:
      "Your satisfaction is our top priority. If something isn't right, we'll come back and make it right at no extra charge. That's the benefit of working with a local, owner-operated business — Andy stands behind every job.",
  },
];
