import React from "react";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import CustomerSupport from "@/components/CustomerSupport";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Customer Support Services for Reliable and Human-Centered Care",
  description: "Reliable 24/7 customer support services from All Spark Technologies to keep your customers happy.",
  alternates: {
    canonical: "https://allsparktechnologies.com/customer-support",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "customer-support";
  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CustomerSupport service={service} />
    </HydrationBoundary>
  );
}