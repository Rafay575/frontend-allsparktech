import React from "react";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import LiveChatSupport from "@/components/LiveChatSupport";

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