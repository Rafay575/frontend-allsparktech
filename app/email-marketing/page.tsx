
import React from 'react'
import {ServicePageData} from "@/lib/types"

import axios from 'axios';
import { baseURL } from '@/API/baseURL';
import EmailMarketing from '@/components/EmailMarketing';
async function fetchServiceData() {
  const service = "email-marketing";
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

  return <EmailMarketing servicePageData={servicePageData}   />
}