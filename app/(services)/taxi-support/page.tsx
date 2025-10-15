import React from "react";
import { ServicePageData } from "@/lib/types";
import { baseURL } from "@/API/baseURL";
import TaxiSupport from "@/components/TaxiSupport";

export const dynamic = "force-dynamic";

async function fetchServiceData(): Promise<ServicePageData> {
  const service = "taxi-support";

  try {
    const res = await fetch(`${baseURL}/service`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: service }),
      cache: "no-store", // 🚀 ensures fresh SSR data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch service data");
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch service data", error);
    throw new Error("Failed to fetch service data");
  }
}

export default async function Page() {
  const servicePageData: ServicePageData = await fetchServiceData();
  return <TaxiSupport servicePageData={servicePageData} />;
}
