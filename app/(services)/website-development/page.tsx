import React from "react";
import WebDevelopment from "@/components/WebDevelopment";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "High-Performance Website Development Services in USA",
  description: "All Spark Technologies offers expert website development services in USA to boost your online presence and sales.",
  alternates: {
    canonical: "https://allsparktechnologies.com/website-development",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "website-development";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WebDevelopment service={service} />
    </HydrationBoundary>
  );
}