import UiUxDesign from "@/components/UiUxDesign";
export const dynamic = "force-dynamic";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getServiceDataQuery } from "@/utils/queries";

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