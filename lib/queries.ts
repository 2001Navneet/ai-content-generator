// lib/queries.ts
import { db } from "@/public/utils/db";
import { AIOutput as schema, AIOutput } from "@/public/utils/schema";

export async function getHistoryData() {
  const data = await db.select().from(AIOutput);
  console.log("Data from DB:", data); // Log the data to see what is being returned

  return data;
}
