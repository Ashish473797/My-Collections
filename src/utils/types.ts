import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "default";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  value?: string;
};

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export type FAQProps = {
  faqs: FAQ[];
};

export type CartItem = {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

export type CartState = {
    items: CartItem[];
}

export type Product = {
    id: number;
    name: string;
    image: string;
    costPrice: number;
    sellingPrice: number;
}

export type ProductsState = {
    products: Product[];
    loading: boolean;
    error: string | null;
}