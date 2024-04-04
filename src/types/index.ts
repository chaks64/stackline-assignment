export interface Review {
  score: number;
  review: string;
  customer: string;
}

export interface Sales {
  unitsSold: number;
  weekEnding: string;
  retailSales: number;
  retailerMargin: number;
  wholesaleSales: number;
}

export interface ProductDetails {
    id: string;
    tags: string[];
    brand: string;
    image: string;
    sales: Sales[];
    title: string;
    details: string[];
    reviews: Review[];
    retailer: string;
    subtitle: string;
}