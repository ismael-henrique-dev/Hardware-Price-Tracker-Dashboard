"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Collect = {
  id: string
  data: string
  hora: string
  status: "pending" | "processing" | "success" | "failed"
}

export const columns: ColumnDef<Collect>[] = [
  {
    accessorKey: "id",
    header: "Id da coleta",
  },
  {
    accessorKey: "data",
    header: "Data",
  },
  {
    accessorKey: "hora",
    header: "Hora",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
