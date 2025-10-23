import React from "react";
import DigitalMarketing from "@/components/DigitalMarketing";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";

export default async function Page() {
  const queryClient = new QueryClient();
  const service = "digital-marketing";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DigitalMarketing service={service} />
    </HydrationBoundary>
  );
}