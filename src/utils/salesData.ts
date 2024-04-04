import { Sales } from "../types";

export const getSalesDataByDay = (
  sales: Sales[]
): {
  labels: string[];
  retailSales: number[];
  wholesaleSales: number[];
  maxSales: number;
  minSales: number;
} => {
  const labels = sales.map((data) => data.weekEnding);
  const retailSales = sales.map((data) => data.retailSales);
  const wholesaleSales = sales.map((data) => data.wholesaleSales);
  const maxSales: number = Math.max(...retailSales, ...wholesaleSales);
  const minSales: number = Math.min(...retailSales, ...wholesaleSales);
  return { labels, retailSales, wholesaleSales, maxSales, minSales };
};
