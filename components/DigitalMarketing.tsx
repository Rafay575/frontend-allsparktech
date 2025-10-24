"use client";
import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";
import NewServicePage from "./NewServicePage";
import {ServicePageData} from "@/lib/types"
import { getServiceDataQuery } from "@/utils/queries";
import { useQuery } from "@tanstack/react-query";


export default function DigitalMarketing({ service }: { service: string }) {
  const { data: servicePageData, isLoading, isError } = useQuery(getServiceDataQuery(service));

  if (isLoading) return <div>Loading...</div>;
  if (isError || !servicePageData) return <div>Failed to load service data.</div>;

  return ( 
    <> 
      <Topnav />
      <Navbar2 />
      <NewServicePage servicePageData={servicePageData as ServicePageData} />
      <Footer />
    </>
  );
}