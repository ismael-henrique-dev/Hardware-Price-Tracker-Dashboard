"use client"

import { Scrap } from "@/@types/sraplings"
import { DatePickerDemo } from "@/components/collection-history/calendar-filter"
import { SelectDemo } from "@/components/collection-history/select-filter"
import { DataTable } from "@/components/collection-history/table"
import { columns } from "@/components/collection-history/table-collums"
import { fetchScraps } from "@/http/fetch-scraps"
import { useState, useEffect } from "react"

export default function CollectionHistory() {
  const [scrapsList, setScrapsList] = useState<Scrap[]>([])
  const [filteredList, setFilteredList] = useState<Scrap[]>([])

  useEffect(() => {
    async function loadScraps() {
      const scrapsData = await fetchScraps()
      setScrapsList(scrapsData.response.ScrapList)
      setFilteredList(scrapsData.response.ScrapList)
    }
    loadScraps()
  }, [])

  return (
    <div className="p-8 flex flex-col m-auto w-full h-screen">
      <h1 className="text-2xl font-semibold mb-10">Histórico de coletas</h1>
      <div className="flex flex-col gap-3">
        <section className="w-full flex gap-3">
          <DatePickerDemo
            list={scrapsList}
            updateFilteredList={setFilteredList}
          />
          <SelectDemo list={scrapsList} updateFilteredList={setFilteredList} />
        </section>

        <DataTable columns={columns} data={filteredList} />
      </div>
    </div>
  )
}
