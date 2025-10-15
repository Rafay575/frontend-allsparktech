import React from "react";
import { ServicePageData } from "@/lib/types";
import { baseURL } from "@/API/baseURL";
import CustomSoftwareDevelopment from "@/components/CustomSoftwareDevelopment";
export const dynamic = "force-dynamic";

async function fetchServiceData(): Promise<ServicePageData> {
  const service = "custom-software-development";

  const res = await fetch(`${baseURL}/service`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: service }),
    cache: "no-store", // ✅ Always fetch fresh data (no caching)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch service data");
  }

  return res.json();
}

export default async function Page() {
  const servicePageData: ServicePageData = await fetchServiceData();

  return <CustomSoftwareDevelopment servicePageData={servicePageData} />;
}
