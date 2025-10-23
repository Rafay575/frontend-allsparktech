import React from "react";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import CustomerSupport from "@/components/CustomerSupport";

export default async function Page() {
  const queryClient = new QueryClient();
  const service = "customer-support";
  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CustomerSupport service={service} />
    </HydrationBoundary>
  );
}