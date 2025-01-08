import React from "react";
import { getCategory } from "@/libs/server";

export default async function categoryPage() {
  const catQuery = await getCategory();

  console.log("CATEGORY", catQuery);
  return <div>page</div>;
}
