"use client"

import { useState, useEffect } from 'react'

import './ProductDashboard.css'
import ProductDetails from "../ProductDetails/ProductDetails.tsx";
import LineChart from '../LineChart/LineChart.tsx';
import SalesTable from "../SalesTable/SalesTable.tsx";
import {TableProps} from "antd";

import {getSalesdata} from "../../store/sales/sales.thunk.ts";
import { useAppDispatch, useAppSelector} from "../../store/store.ts";
import {Sale} from "../../store/sales/sales.model.ts";
import {SalesData} from "./ProductDashboard.types.ts";



export default function ProductDashboard() {
    const products = useAppSelector((state=>state.sales.product))
    const [data, setData] = useState<Sale[]>(products[0]?.sales)
    const [filteredData, setFilteredData] = useState<Sale[]>(products[0]?.sales)
    const dispatch = useAppDispatch()
    useEffect(() => {
        setFilteredData(products[0]?.sales || [])
        setData(products[0]?.sales)
    }, [products])
    useEffect(() => {
        dispatch(getSalesdata())
    }, []);
    const onChange: TableProps<SalesData>['onChange'] = (_pagination, _filters, _sorter, extra) => {
        const currentDataSource = extra.currentDataSource as SalesData[]
        setFilteredData(currentDataSource)
    }


    return (
        <div className="dashboard">
            <aside className="sidebar">
                <ProductDetails
                    imageSrc={products[0]?.image}
                    title={products[0]?.brand}
                    description={products[0]?.subtitle}
                    tags={products[0]?.tags}
                    dealType="Lightning Deal"
                />
            </aside>
            <main className="main-content">
                <LineChart data={filteredData} />
                <SalesTable data={data} onChange={onChange} />
            </main>
        </div>
    )
}