import { getSalesDataByDay } from './salesData';

describe('getSalesDataByDay', () => {
	it('correctly processes sales data', () => {
		const salesData = [
			{ weekEnding: '2024-01-01', retailSales: 200, wholesaleSales: 300 },
			{ weekEnding: '2024-01-08', retailSales: 250, wholesaleSales: 350 },
		];

		const result = getSalesDataByDay(salesData);

		expect(result.labels).toEqual(['2024-01-01', '2024-01-08']);
		expect(result.retailSales).toEqual([200, 250]);
		expect(result.wholesaleSales).toEqual([300, 350]);
		expect(result.maxSales).toEqual(350);
		expect(result.minSales).toEqual(200);
	});
});
