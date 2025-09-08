import React from 'react'
import WebDevelopment from '@/components/WebDevelopment';


import axios from 'axios';
import { baseURL } from '@/API/baseURL';
import {ServicePageData} from "@/lib/types"
async function fetchServiceData() {
  const service = "website-development";
  try {
    const res = await axios.post(`${baseURL}/service`, { name: service }, { headers: { "Cache-Control": "no-store" } });
    return res.data;
  } catch (error) {
    console.error("Failed to fetch service data", error);
    throw new Error("Failed to fetch service data");
  }
}

export default async function page() {
    const servicePageData:ServicePageData = await fetchServiceData();
    return (
        <WebDevelopment servicePageData={servicePageData} />
    )
}
