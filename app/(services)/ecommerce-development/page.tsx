import React from "react";
import { ServicePageData } from "@/lib/types";
import { baseURL } from "@/API/baseURL";
import EcommerceDevelopment from "@/components/EcommerceDevelopment";
export const dynamic = "force-dynamic";

async function fetchServiceData(): Promise<ServicePageData> {
  const service = "ecommerce-development";

  const res = await fetch(`${baseURL}/service`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: service }),
    cache: "no-store", // ✅ ensures always fresh SSR data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch service data");
  }

  return res.json();
}

export default async function Page() {
  const servicePageData: ServicePageData = await fetchServiceData();

  return <EcommerceDevelopment servicePageData={servicePageData} />;
}
