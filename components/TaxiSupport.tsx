"use client";
import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";
import NewServicePage from "./NewServicePage";
import { ServicePageDataProps } from "@/lib/types"



export default function TaxiSupport({ servicePageData }: ServicePageDataProps) {
    return (
        <>
            <Topnav />
            <Navbar2 />
            <h1 className="hidden">Taxi Support.</h1>
            <NewServicePage servicePageData={servicePageData} />
            <Footer />
        </>
    );
}