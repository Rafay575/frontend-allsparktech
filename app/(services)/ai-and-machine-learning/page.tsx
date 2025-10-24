import React from "react";
import AiAndMachineLearning from "@/components/AiAndMachineLearning";
export const dynamic = "force-dynamic";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "AI & Machine Learning Company in USA | All Spark",
  description: "Transform your business with AI & ML services by All Spark Technologies. Smarter, faster, future-ready solutions.",
  alternates: {
    canonical: "https://allsparktechnologies.com/ai-and-machine-learning",
  }
}
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