import { CoinDesign, PackOption } from "../types";
import { Bird, Truck, Castle, Mountain, Waves, Rocket } from "lucide-react";

export const coinDesigns: CoinDesign[] = [
  {
    id: "duck-classic",
    name: "Classic Duck",
    imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=400&fit=crop",
    icon: Bird,
    tags: ["animals", "popular"],
    description: "Our original duck design - a timeless favorite",
    customizableText: {
      top: {
        maxLength: 20,
        placeholder: "ORIGINAL DUCK",
      },
      bottom: {
        maxLength: 20,
        placeholder: "BUCKS",
      },
    },
  },
  {
    id: "jeep-adventure",
    name: "Jeep Adventure",
    imageUrl: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=400&fit=crop",
    icon: Truck,
    tags: ["jeep", "vehicles", "popular"],
    description: "For the off-road enthusiast",
    customizableText: {
      top: {
        maxLength: 20,
        placeholder: "TRAIL",
      },
      bottom: {
        maxLength: 20,
        placeholder: "BLAZER",
      },
    },
  },
  {
    id: "disney-castle",
    name: "Magic Castle",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop",
    icon: Castle,
    tags: ["disney", "fantasy"],
    description: "Inspired by magical adventures",
    customizableText: {
      top: {
        maxLength: 20,
        placeholder: "DREAM",
      },
      bottom: {
        maxLength: 20,
        placeholder: "BIG",
      },
    },
  },
  {
    id: "mountain-explorer",
    name: "Mountain Peak",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    icon: Mountain,
    tags: ["nature", "adventure"],
    description: "For those who seek the summit",
    customizableText: {
      top: {
        maxLength: 20,
        placeholder: "CLIMB",
      },
      bottom: {
        maxLength: 20,
        placeholder: "ON",
      },
    },
  },
  {
    id: "ocean-wave",
    name: "Ocean Wave",
    imageUrl: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=400&fit=crop",
    icon: Waves,
    tags: ["nature", "water"],
    description: "Ride the waves of life",
    customizableText: {
      top: {
        maxLength: 20,
        placeholder: "SURF'S",
      },
      bottom: {
        maxLength: 20,
        placeholder: "UP",
      },
    },
  },
  {
    id: "space-rocket",
    name: "Space Rocket",
    imageUrl: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=400&fit=crop",
    icon: Rocket,
    tags: ["space", "adventure"],
    description: "Reach for the stars",
    customizableText: {
      top: {
        maxLength: 20,
        placeholder: "TO THE",
      },
      bottom: {
        maxLength: 20,
        placeholder: "MOON",
      },
    },
  },
];

export const packOptions: PackOption[] = [
  { quantity: 20, pricePerCoin: 2.0, totalPrice: 40 },
  { quantity: 40, pricePerCoin: 1.75, totalPrice: 70 },
  { quantity: 60, pricePerCoin: 1.5, totalPrice: 90 },
  { quantity: 100, pricePerCoin: 1.25, totalPrice: 125 },
];
