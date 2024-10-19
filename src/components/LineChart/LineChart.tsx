import { Card } from 'antd'
import { ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import moment from 'moment'
import {useEffect, useState} from "react";

type SalesData = {
    weekEnding: string
    retailSales: number
    wholesaleSales: number
}

type LineChartProps = {
    data: SalesData[]
}
// const transformedData = data?.map((item) => ({
//     ...item,
//     month: moment(item.weekEnding).format("MM"), // Extracting month and year
// }));

// Function to aggregate the data by month
const aggregateDataByMonth = (data: any[]) => {
    if (!data || data.length === 0) {
        return [];
    }

    const aggregated = data.reduce((acc: any, current) => {
        const month = moment(current.weekEnding).format("YYYY-MM");
        if (!acc[month]) {
            acc[month] = {
                month,
                retailSales: 0,
                wholesaleSales: 0,
                unitsSold: 0,
                retailerMargin: 0,
            };
        }
        acc[month].retailSales += current.retailSales;
        acc[month].wholesaleSales += current.wholesaleSales;
        acc[month].unitsSold += current.unitsSold;
        acc[month].retailerMargin += current.retailerMargin;
        return acc;
    }, {});

    return Object.values(aggregated);
};

export default function LineChart({ data }: LineChartProps) {
    const monthlyData = aggregateDataByMonth(data);
    console.log('monthlyData', monthlyData);
    return (
        <Card title="Sales Chart" className="sales-chart-card">
            <div className="sales-chart">
                <ResponsiveContainer width="100%" height={400}>
                    <RechartsLineChart data={monthlyData} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month"
                               // Custom formatting for months
                               tickFormatter={(month) => {
                                   const formattedMonth = moment(month, "YYYY-MM");
                                   return formattedMonth.isValid() ? formattedMonth.format("MMM") : month;
                               }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="retailSales" stroke="#8884d8" name="Retail Sales" />
                        <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" name="Wholesale Sales" />
                    </RechartsLineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}