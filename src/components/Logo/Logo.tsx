import {LogoProps} from "./LogoProps.types.tsx";
import "./Logo.css"
import {Header} from "antd/es/layout/layout";
import React from "react";

export const Logo:React.FC<LogoProps> = ({imgAlt,imgSrc,height,width}) =>{
    return (
        <Header className="custom-header">
            <div className="logo">
                <img src={imgSrc} alt={imgAlt} height={height} width={width} />
            </div>
        </Header>

    )
}