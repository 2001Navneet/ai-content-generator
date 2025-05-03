// app/dashboard/history/page.tsx
import { getHistoryData } from "@/lib/queries";
import HistoryTable from "../_components/HistoryTable";

export default async function HistoryPage() {
  const data = await getHistoryData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <HistoryTable data={data} />
    </div>
  );
}
