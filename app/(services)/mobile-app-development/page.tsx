import React from "react";
import MobileAppDevelopment from "@/components/MobileAppDevelopment";
import { ServicePageData } from "@/lib/types";
import { baseURL } from "@/API/baseURL";
export const dynamic = "force-dynamic";

async function fetchServiceData(): Promise<ServicePageData> {
  const service = "mobile-app-development";

  try {
    const res = await fetch(`${baseURL}/service`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: service }),
      cache: "no-store", // 🚀 ensures SSR with fresh data every request
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

  return <MobileAppDevelopment servicePageData={servicePageData} />;
}
