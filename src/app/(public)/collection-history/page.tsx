import { DatePickerDemo } from "@/components/collection-history/calendar-filter"
import { SelectDemo } from "@/components/collection-history/select-filter"
import { DataTable } from "@/components/collection-history/table"
import { columns } from "@/components/collection-history/table-collums"
import { Input } from "@/components/ui/input"
import { fetchScraps } from "@/http/fetch-scraps"

export default async function CollectionHistory() {
  const scrapsData = await fetchScraps()
  const list = scrapsData.response.ScrapList

  return (
    <div className="p-8 flex flex-col m-auto w-full h-screen">
      <h1 className="text-2xl font-semibold mb-10">Histórico de coletas</h1>
      <div className="flex flex-col gap-3">
        <section className="w-full flex gap-9">
          <DatePickerDemo />
          <SelectDemo />
          <SelectDemo />
          <Input variant="outline" className=" flex-1" />
        </section>
        <DataTable columns={columns} data={list} />
      </div>
    </div>
  )
}
