import React from "react";
import CustomSoftwareDevelopment from "@/components/CustomSoftwareDevelopment";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Custom Software Development Company in USA",
  description: "Build powerful custom software with All Spark Technologies. Top development services in USA for smart business growth.",
  alternates: {
    canonical: "https://allsparktechnologies.com/custom-software-development",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "custom-software-development";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CustomSoftwareDevelopment service={service} />
    </HydrationBoundary>
  );
}

