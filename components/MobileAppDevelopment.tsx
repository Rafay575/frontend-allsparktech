"use client";
import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";
import NewServicePage from "./NewServicePage";
import {ServicePageDataProps} from "@/lib/types"



export default function MobileAppDevelopment({ servicePageData }: ServicePageDataProps) {
    return (
        <>
            <Topnav />
            <Navbar2 />
            <h1 className="hidden">Mobile App Development.</h1>
            <NewServicePage servicePageData={servicePageData} /> 
            <Footer />
        </>
    );
}