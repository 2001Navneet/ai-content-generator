// components/HistoryTable.tsx
"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export default function HistoryTable({ data }: { data: any[] }) {
  return (
    <table className="w-full table-auto border">
      <thead>
        <tr>
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">AI Response</th>
          <th className="border px-4 py-2">Date</th>
          <th className="border px-4 py-2">Words</th>
          <th className="border px-4 py-2">Copy</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td className="border px-4 py-2">{row.templateSlug}</td>
            <td className="border px-4 py-2">{row.aiResponse}</td>
            <td className="border px-4 py-2">{row.createdAt}</td>
            <td className="border px-4 py-2">
              {" "}
              {row.airesponse?.toString().trim().split(/\s+/).length ?? 0}
            </td>
            <td className="border px-4 py-2">
              <Button
                onClick={() => navigator.clipboard.writeText(row.formData)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Copy
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
