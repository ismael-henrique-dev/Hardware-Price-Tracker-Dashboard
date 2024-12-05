import { DataTable } from "@/components/collection-history/table";
import { columns } from "@/components/collection-history/table-collums";

export default function CollectionHistory() {
  return (
    <div>
      <h1>Collection History</h1>
      <DataTable columns={columns}  data={[]} />
    </div>
  )
}
