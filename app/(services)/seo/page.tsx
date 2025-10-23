import React from "react";
import Seo from "@/components/Seo";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";

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