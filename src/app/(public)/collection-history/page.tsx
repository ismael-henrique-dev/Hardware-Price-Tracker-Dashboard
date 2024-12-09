import { DatePickerDemo } from "@/components/collection-history/calendar-filter"
import { SelectDemo } from "@/components/collection-history/select-filter"
import { DataTable } from "@/components/collection-history/table"
import { columns } from "@/components/collection-history/table-collums"
import { Input } from "@/components/ui/input"

export default function CollectionHistory() {
  return (
    <div className="px-8 flex flex-col m-auto w-full">
      <h1 className="text-2xl font-semibold mb-10">Histórico de coletas</h1>
      <div className="flex flex-col gap-3">
        <section className="w-full flex gap-9">
          <DatePickerDemo />
          <SelectDemo />
          <SelectDemo />
          <Input variant="outline" className=" flex-1" />
        </section>
        <DataTable columns={columns} data={[]} />
      </div>
    </div>
  )
}
