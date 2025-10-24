import React from "react";
import DigitalMarketing from "@/components/DigitalMarketing";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Digital Marketing Services in USA for ROI Driven Results",
  description: "Boost your brand online with All Spark Technologies. Smart digital marketing services for USA businesses.",
  alternates: {
    canonical: "https://allsparktechnologies.com/digital-marketing",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "digital-marketing";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DigitalMarketing service={service} />
    </HydrationBoundary>
  );
}