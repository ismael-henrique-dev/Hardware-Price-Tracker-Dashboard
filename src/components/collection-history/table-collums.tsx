"use client"

import { Scrap } from "@/@types/sraplings"
import { formatRelativeDate } from "@/lib/formatter"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Scrap>[] = [
  {
    accessorKey: "Id",
    header: "Id da coleta",
  },
  {
    accessorKey: "CreatedAt",
    header: "Data",
    cell: ({ row }) => formatRelativeDate(row.original.CreatedAt),
  },
  {
    accessorKey: "Scraped",
    header: "Loja",
  },
]
