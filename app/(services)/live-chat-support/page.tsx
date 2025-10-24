import React from "react";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import LiveChatSupport from "@/components/LiveChatSupport";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Live Chat Support Services for Instant and Real-Time Help",
  description: "Engage customers in real time with All Spark Technologies’ live chat support for instant help.",
  alternates: {
    canonical: "https://allsparktechnologies.com/live-chat-support",
  }
}
export default async function Page() {
  const queryClient = new QueryClient();
  const service = "live-chat-support";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LiveChatSupport service={service} />
    </HydrationBoundary>
  );
}