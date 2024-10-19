import React from 'react';
import {Layout} from 'antd';
import './App.css';
import { Logo } from './components/Logo/Logo.tsx';
import logo from "../src/assets/images/logo/stackline_logo.svg"
import ProductDashboard from "./components/ProductDashboard/ProductDashboard.tsx";
const App: React.FC = () => {
    return (
        <>
        <Layout>
            <Logo imgSrc={logo}></Logo>
            <ProductDashboard/>
            </Layout>
        </>
    );
};
export default App;
