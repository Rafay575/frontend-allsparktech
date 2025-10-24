import React from "react";
import Seo from "@/components/Seo";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "SEO Services Providing Agency in USA for Online Growth",
  description: "Rank higher and drive traffic with All Spark Technologies, a trusted SEO services company in USA.",
  alternates: {
    canonical: "https://allsparktechnologies.com/seo",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "seo";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Seo service={service} />
    </HydrationBoundary>
  );
}