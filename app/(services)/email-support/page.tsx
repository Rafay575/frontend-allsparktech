import React from "react";
export const dynamic = "force-dynamic";


import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import EmailSupport from "@/components/EmailSupport";

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