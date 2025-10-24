import React from "react";
import MobileAppDevelopment from "@/components/MobileAppDevelopment";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mobile App Development Company in USA | Android & iOS",
  description: "Create high-performing mobile apps with All Spark Technologies. Trusted app development services in USA.",
  alternates: {
    canonical: "https://allsparktechnologies.com/mobile-app-development",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "mobile-app-development";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MobileAppDevelopment service={service} />
    </HydrationBoundary>
  );
}