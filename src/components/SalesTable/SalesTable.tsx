import React from 'react';
import {Button, Card, Input, Table} from "antd";
import type {ColumnsType} from "antd/es/table";
import {SearchOutlined} from "@ant-design/icons";
import {SalesData} from "./SalesTable.types.tsx";

// @ts-ignore
const getColumnSearchProps = (dataIndex: keyof SalesData): ColumnsType<SalesData>[number] => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
            <Input
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys[0]}
                onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => confirm()}
                style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
                type="primary"
                onClick={() => confirm()}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90, marginRight: 8 }}
            >
                Search
            </Button>
            <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
                Reset
            </Button>
        </div>
    ),
    filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes((value as string).toLowerCase()),
})

const SalesTable: React.FC<{data,onChange}> = ({data, onChange}) => {
    const columns: ColumnsType<SalesData> = [
        {
            title: 'Week Ending',
            dataIndex: 'weekEnding',
            key: 'weekEnding',
            sorter: (a, b) => a.weekEnding.localeCompare(b.weekEnding),
            ...getColumnSearchProps('weekEnding'),
        },
        {
            title: 'Retail Sales',
            dataIndex: 'retailSales',
            key: 'retailSales',
            sorter: (a, b) => a.retailSales - b.retailSales,
            render: (value: number) => value.toLocaleString(),
            ...getColumnSearchProps('retailSales'),
        },
        {
            title: 'Wholesale Sales',
            dataIndex: 'wholesaleSales',
            key: 'wholesaleSales',
            sorter: (a, b) => a.wholesaleSales - b.wholesaleSales,
            render: (value: number) => value.toLocaleString(),
            ...getColumnSearchProps('wholesaleSales'),
        },
        {
            title: 'Units Sold',
            dataIndex: 'unitsSold',
            key: 'unitsSold',
            sorter: (a, b) => a.unitsSold - b.unitsSold,
            render: (value: number) => value.toLocaleString(),
            ...getColumnSearchProps('unitsSold'),
        },
        {
            title: 'Retailer Margin',
            dataIndex: 'retailerMargin',
            key: 'retailerMargin',
            sorter: (a, b) => a.retailerMargin - b.retailerMargin,
            render: (value: number) => value.toLocaleString(),
            ...getColumnSearchProps('retailerMargin'),
        },
    ]
    return (
       <>
           <Card title="Sales Data" className="sales-data-card">
               <Table columns={columns} dataSource={data} onChange={onChange} />
           </Card>
       </>
    );
};

export default SalesTable;
