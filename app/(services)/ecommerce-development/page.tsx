import React from 'react'
import {ServicePageData} from "@/lib/types"

import axios from 'axios';
import { baseURL } from '@/API/baseURL';
import EcommerceDevelopment from '@/components/EcommerceDevelopment';
async function fetchServiceData() {
  const service = "ecommerce-development";
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

  return <EcommerceDevelopment servicePageData={servicePageData}   />
}
