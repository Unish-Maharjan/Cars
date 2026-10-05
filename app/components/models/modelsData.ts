export interface ModelSpec {
  range: string;
  acceleration: string;
  battery: string;
  topSpeed: string;
}

export interface CarModel {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  isPng: boolean;
  spec: ModelSpec;
  href: string;
}

export const MODELS: CarModel[] = [
  {
    id: "01",
    name: "AURA",
    category: "ELECTRIC SEDAN",
    description:
      "Our flagship pure electric sedan — engineered for ultra-long-range cruising, intelligent suspension, and a bespoke acoustic cabin.",
    price: "$89,500",
    image: "/images/car.png",
    isPng: true,
    spec: {
      range: "610 KM",
      acceleration: "3.8 SEC",
      battery: "100 KWH",
      topSpeed: "200 KM/H",
    },
    href: "/#configure",
  },
  {
    id: "02",
    name: "AURA CROSS",
    category: "ELECTRIC SUV",
    description:
      "Dual-motor all-wheel drive with elevated ride height, versatile cargo utility, and adaptive terrain torque distribution.",
    price: "$96,500",
    image: "/images/carfar.jpg",
    isPng: false,
    spec: {
      range: "540 KM",
      acceleration: "4.2 SEC",
      battery: "105 KWH",
      topSpeed: "210 KM/H",
    },
    href: "/#configure",
  },
  {
    id: "03",
    name: "AURA GT",
    category: "ELECTRIC PERFORMANCE",
    description:
      "Track-calibrated tri-motor powertrain with dynamic torque vectoring, carbon elements, and active aerodynamic surfaces.",
    price: "$128,000",
    image: "/images/cardriving.jpg",
    isPng: false,
    spec: {
      range: "580 KM",
      acceleration: "2.9 SEC",
      battery: "115 KWH",
      topSpeed: "260 KM/H",
    },
    href: "/#configure",
  },
  {
    id: "04",
    name: "AURA TOURING",
    category: "ELECTRIC GRAND TOURER",
    description:
      "Sculpted for long-distance precision — low-drag aerodynamic efficiency with supreme high-speed directional stability.",
    price: "$104,000",
    image: "/images/carside.jpg",
    isPng: false,
    spec: {
      range: "650 KM",
      acceleration: "3.5 SEC",
      battery: "110 KWH",
      topSpeed: "225 KM/H",
    },
    href: "/#configure",
  },
];
