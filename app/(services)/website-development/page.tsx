import React from "react";
import WebDevelopment from "@/components/WebDevelopment";
export const dynamic = "force-dynamic";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";

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