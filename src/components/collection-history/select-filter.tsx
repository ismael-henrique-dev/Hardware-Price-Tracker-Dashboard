"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Scrap } from "@/http/fetch-scraps"
import { useState } from "react"

interface SelectDemoProps {
  list: Scrap[]
  updateFilteredList: (filteredList: Scrap[]) => void
}

export function SelectDemo({ list, updateFilteredList }: SelectDemoProps) {
  const [store, setStore] = useState<string | null>(null)

  const handleSelect = (value: string | null) => {
    if (value === store) {
      setStore(null)
      updateFilteredList(list)
    } else {
      setStore(value)
      if (value) {
        const newFilteredList = list.filter((scrap) => scrap.Scraped === value)
        updateFilteredList(newFilteredList)
      }
    }
  }

  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione uma loja" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{store || "Selecione uma loja"}</SelectLabel>
          <SelectItem value="TeraByte">TeraByte</SelectItem>
          <SelectItem value="Pichau">Pichau</SelectItem>
          <SelectItem value="Kabum">Kabum</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
