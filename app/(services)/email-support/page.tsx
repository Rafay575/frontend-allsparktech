import React from "react";
export const dynamic = "force-dynamic";


import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import EmailSupport from "@/components/EmailSupport";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Email Support Services for Fast and Personalized Responses",
  description: "Fast, friendly, and professional email support services that strengthen your customer trust.",
  alternates: {
    canonical: "https://allsparktechnologies.com/email-support",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "email-support";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EmailSupport service={service} />
    </HydrationBoundary>
  );
}