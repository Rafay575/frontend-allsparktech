import { baseURL } from "@/API/baseURL";
import { ServicePageData } from "@/lib/types";

export const getHomeDataQuery = () => ({
  queryKey: ["homeData"],
  queryFn: async () => {
    const res = await fetch(`${baseURL}/homedata`);
    if (!res.ok) throw new Error("Failed to fetch home data");
    return res.json();
  },
});
export const getAboutDataQuery = () => ({
  queryKey: ["aboutData"],
  queryFn: async () => {
    const res = await fetch(`${baseURL}/aboutdata`); 
    if (!res.ok) throw new Error("Failed to fetch about data");
    return res.json();
  },
});
export const getContactDataQuery = () => ({
  queryKey: ["contactData"],
  queryFn: async () => {
    const res = await fetch(`${baseURL}/contactdata`);
    if (!res.ok) throw new Error("Failed to fetch contact data");
    return res.json();
  },
});

export const getBlogDataQuery = () => ({
  queryKey: ["blogPageData"],
  queryFn: async () => {
    const res = await fetch(`${baseURL}/blogdata`);
    if (!res.ok) throw new Error("Failed to fetch blog page data");
    return res.json();
  },
});

export const getBlogsQuery = () => ({
  queryKey: ["blogs"],
  queryFn: async () => {
    const res = await fetch(`${baseURL}/blogs`);
    if (!res.ok) throw new Error("Failed to fetch blogs");
    return res.json();
  },
});

export const getServiceDataQuery = (service: string) => ({
  queryKey: ["serviceData", service],
  queryFn: async (): Promise<ServicePageData> => {
    const res = await fetch(`${baseURL}/service`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: service }),

    });
    if (!res.ok) throw new Error("Failed to fetch service data");
    return res.json();
  },
});