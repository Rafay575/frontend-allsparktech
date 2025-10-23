import React from "react";
import AiAndMachineLearning from "@/components/AiAndMachineLearning";
export const dynamic = "force-dynamic";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";

export default async function Page() {
  const queryClient = new QueryClient();
  const service = "ai-and-machine-learning";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AiAndMachineLearning service={service} />
    </HydrationBoundary>
  );
}