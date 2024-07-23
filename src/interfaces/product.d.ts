export interface Product {
    id: string;
    name: string;
    price: string;
    discountPrice?: string | null;
    discountPercentage?: string | null;
    moreColors: boolean;
    images: string[];
  }