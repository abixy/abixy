import { LucideIcon } from "lucide-react";

export interface CoinDesign {
  id: string;
  name: string;
  imageUrl: string;
  icon: LucideIcon;
  tags: string[];
  description: string;
  customizableText: {
    top: {
      maxLength: number;
      placeholder: string;
    };
    bottom: {
      maxLength: number;
      placeholder: string;
    };
  };
}

export interface PackOption {
  quantity: number;
  pricePerCoin: number;
  totalPrice: number;
}

export interface CartItem {
  designId: string;
  designName: string;
  imageUrl: string;
  topText: string;
  bottomText: string;
  packSize: number;
  pricePerCoin: number;
  totalPrice: number;
}
