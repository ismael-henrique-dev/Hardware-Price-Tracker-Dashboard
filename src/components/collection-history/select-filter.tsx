"use client"

import { Scrap } from "@/@types/sraplings"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useState } from "react"

interface SelectDemoProps {
  list: Scrap[]
  updateFilteredList: (filteredList: Scrap[]) => void
}

export function SelectDemo({ list, updateFilteredList }: SelectDemoProps) {
  const [store, setStore] = useState<string>("Todas")

  const handleSelect = (value: string | undefined) => {
    if (value === "Todas") {
      console.log(`Store: ${value} | value: ${value}`)
      setStore(value)
      updateFilteredList(list)
    } else {
      setStore(value as string)
      if (value) {
        const newFilteredList = list.filter((scrap) => scrap.Scraped === value)
        updateFilteredList(newFilteredList)
      }
    }
  }

  return (
    <Select value={store || ""} onValueChange={handleSelect}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione uma loja">
          {store || "Selecione uma loja"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Loja</SelectLabel>
          <SelectItem value="Todas">Todas</SelectItem>
          <SelectItem value="TeraByte">TeraByte</SelectItem>
          <SelectItem value="Pichau">Pichau</SelectItem>
          <SelectItem value="Kabum">Kabum</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
