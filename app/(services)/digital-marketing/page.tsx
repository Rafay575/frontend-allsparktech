import React from "react";
import DigitalMarketing from "@/components/DigitalMarketing";
import { ServicePageData } from "@/lib/types";
import { baseURL } from "@/API/baseURL";
export const dynamic = "force-dynamic";

async function fetchServiceData(): Promise<ServicePageData> {
  const service = "digital-marketing";

  const res = await fetch(`${baseURL}/service`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: service }),
    cache: "no-store", // ✅ ensures fresh SSR data every request
  });

  if (!res.ok) {
    throw new Error("Failed to fetch service data");
  }

  return res.json();
}

export default async function Page() {
  const servicePageData: ServicePageData = await fetchServiceData();
  return <DigitalMarketing servicePageData={servicePageData} />;
}
