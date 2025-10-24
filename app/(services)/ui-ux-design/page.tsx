import UiUxDesign from "@/components/UiUxDesign";
export const dynamic = "force-dynamic";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "UI UX Design Services in USA for Innovative User Experiences",
  description: "All Spark Technologies creates stunning UI UX designs that improve user experience and boost engagement.",
  alternates: {
    canonical: "https://allsparktechnologies.com/ui-ux-design",
  }
}

export default async function Page() {
  const queryClient = new QueryClient();
  const service = "ui-ux-design";

  await queryClient.prefetchQuery(getServiceDataQuery(service));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UiUxDesign service={service} />
    </HydrationBoundary>
  );
}