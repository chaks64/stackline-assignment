import React, { useMemo, useState } from "react";
import { Sales } from "../types";
import { tableHeaders } from "../constants/table";
import { useAppSelector } from "../app/hooks";
import { ProductDetailsContainer } from "../StyledComponents";

type SortableKeys = keyof Sales;

const SalesDetails: React.FC = () => {
  const salesData = useAppSelector((app) => app.product.sales);
  const [sorting, setSorting] = useState<{
    key: SortableKeys;
    orderBy: "asc" | "desc";
  } | null>({ key: `weekEnding`, orderBy: "asc" });

  const sortedData = useMemo(() => {
    let sortedItems = [...salesData];

    if (sorting !== null) {
      sortedItems.sort((a, b) => {
        if (a[sorting.key] < b[sorting.key]) {
          return sorting.orderBy === "asc" ? -1 : 1;
        }
        if (a[sorting.key] > b[sorting.key]) {
          return sorting.orderBy === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedItems;
  }, [salesData, sorting]);

  const requestSort = (key: keyof Sales) => {
    let orderBy: "asc" | "desc" = "asc";

    if (sorting && sorting.key === key && sorting.orderBy === "asc") {
      orderBy = "desc";
    }
    setSorting({ key, orderBy });
  };

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${month}-${day}-${year}`;
  };

  return (
    <ProductDetailsContainer>
      <table>
        <thead>
          <tr>
            {Object.keys(tableHeaders).map((key) => (
              <th key={key} onClick={() => requestSort(key as keyof Sales)}>
                <span>
                  {sorting?.key === key
                    ? sorting.orderBy === "asc"
                      ? "▼\u00A0"
                      : "▲\u00A0"
                    : "⇵\u00A0"}
                </span>
                {tableHeaders[key as keyof typeof tableHeaders]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((sale, index) => (
            <tr key={index}>
              <td>{formatDate(sale.weekEnding)}</td>
              <td>{`$${sale.retailSales.toLocaleString()}`}</td>
              <td>{`$${sale.wholesaleSales.toLocaleString()}`}</td>
              <td>{`${sale.unitsSold.toLocaleString()}`}</td>
              <td>{`$${sale.retailerMargin.toLocaleString()}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ProductDetailsContainer>
  );
};

export default SalesDetails;
