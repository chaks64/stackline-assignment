import React, { useMemo } from "react";
import { Chart as ChartJS, ChartOptions, registerables } from "chart.js";
import 'chartjs-adapter-date-fns';
import { Line } from "react-chartjs-2";
import { useAppSelector } from "../app/hooks";
import { getSalesDataByDay } from "../utils/salesData";
import { SalesContainer } from "../StyledComponents";

const verticalLinePlugin = {
  id: "verticalLinePlugin",
  afterDraw: (chart: any) => {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const ctx = chart.ctx;
      const x = chart.tooltip._active[0].element.x;
      const topY = chart.scales.y.top;
      const bottomY = chart.scales.y.bottom;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = "#007bff";
      ctx.stroke();
      ctx.restore();
    }
  },
};

ChartJS.register(...registerables);
ChartJS.register(verticalLinePlugin);

const Sales: React.FC = () => {
  const salesData = useAppSelector((app) => app.product.sales);

  const { labels, retailSales, wholesaleSales, maxSales, minSales } = useMemo(
    () => getSalesDataByDay(salesData),
    [salesData]
  );

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Retail Sales",
        data: retailSales,
        borderColor: "#509ced",
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        tension: 0.5,
      },
      {
        label: "Wholesale Sales",
        data: wholesaleSales,
        borderColor: "#90979e",
        backgroundColor: "rgba(108, 117, 125, 0.5)",
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        offset: true,
        border: {
          display: true,
        },
        grid: {
          display: false,
        },
        type: "time",
        time: {
          unit: "month",
          displayFormats: {
            month: "MMM",
          },
          tooltipFormat: "MMM d, yyyy",
        },
        title: {
          display: false,
        },
      },
      y: {
        max: maxSales + (maxSales - minSales) / 2,
        min: minSales - (maxSales - minSales) / 2,
        offset: true,
        display: false,
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    maintainAspectRatio: false,
  };

  return (
    <SalesContainer>
      <Line options={options} data={chartData} />
    </SalesContainer>
  );
};

export default Sales;
