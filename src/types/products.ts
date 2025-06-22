export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  features: string[];
}

export type ProductCategory = 
  | 'Enterprise'
  | 'Professional'
  | 'Security'
  | 'Training';