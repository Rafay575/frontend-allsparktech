"use client";
import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Footer2 from "@/components/Footer2";
import NewServicePage from "./NewServicePage";
import {ServicePageDataProps} from "@/lib/types"




export default function CustomSoftwareDevelopment({ servicePageData }: ServicePageDataProps) {
    return (
        <>
            <Topnav />
            <Navbar2 />
            <h1 className="hidden">Custom Software Development.</h1>
            <NewServicePage servicePageData={servicePageData} /> 
            <Footer2 />
        </>
    );
}