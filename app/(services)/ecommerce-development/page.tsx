import React from "react";
import EcommerceDevelopment from "@/components/EcommerceDevelopment";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ecommerce Development Services in USA for Business Growth",
  description: "Grow online sales with All Spark Technologies. Expert ecommerce development services for modern brands.",
  alternates: {
    canonical: "https://allsparktechnologies.com/ecommerce-development",
  }
}

export default async function Page() {
  const queryClient = new QueryClient();
  const service = "ecommerce-development";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EcommerceDevelopment service={service} />
    </HydrationBoundary>
  );
}