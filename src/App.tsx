import React from 'react';
import {Card, Layout} from 'antd';
import './App.css';
import { Logo } from './components/Logo/Logo.tsx';
import {brandURL} from "./constants/constants.ts";
import ProductDashboard from "./components/ProductDashboard/ProductDashboard.tsx";
const App: React.FC = () => {
    return (
        <>
        <Layout>
            <Logo imgSrc={brandURL}></Logo>
            <ProductDashboard/>
            </Layout>
        </>
    );
};
export default App;
