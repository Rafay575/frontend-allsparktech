import React from "react";;
import TaxiSupport from "@/components/TaxiSupport";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Taxi Support Services for Efficient Ride Management.",
  description: "End-to-end taxi support solutions to manage rides, drivers, and customers with ease.",
  alternates: {
    canonical: "https://allsparktechnologies.com/taxi-support",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "taxi-support";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TaxiSupport service={service} />
    </HydrationBoundary>
  );
}