"use client"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Scrap } from "@/http/fetch-scraps"
import { useState } from "react"

interface DatePickerDemoProps {
  list: Scrap[] 
  updateFilteredList: (filteredList: Scrap[]) => void
}

export function DatePickerDemo({
  list,
  updateFilteredList,
}: DatePickerDemoProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    if (selectedDate) {
      const newFilteredList = list.filter(
        (scrap) =>
          new Date(scrap.CreatedAt).toDateString() === selectedDate.toDateString()
      )
      updateFilteredList(newFilteredList) 
    } else {
      updateFilteredList(list) 
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className="w-[280px] justify-start text-left font-normal"
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Selecione uma data</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
