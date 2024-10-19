import React from 'react';
import { Layout } from 'antd';
import './App.css';
import { Logo } from './components/Logo/Logo.tsx';
import {brandURL} from "./constants/constants.ts";
const App: React.FC = () => {
    return (
        <Layout>
            <Logo imgSrc={brandURL}></Logo>
        </Layout>
    );
};
export default App;
