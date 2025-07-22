"use client";

import React, { useEffect, useState } from "react";
import { baseURL } from "@/API/baseURL";

export const MetaTitle = () => {
  const [metaTitle, setMetaTitle] = useState("Default Title");

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const res = await fetch(`${baseURL}/homedata`);
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        setMetaTitle(data?.metadata?.title );
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchTitle();
  }, []);

  console.log(metaTitle)

  return (
    <div>
      <h1 className="absolute hidden">{metaTitle}</h1>
    </div>
  );
};
