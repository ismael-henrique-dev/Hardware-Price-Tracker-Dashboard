import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CircleAlert } from "lucide-react"
import { formatDate } from "@/lib/formatter"

interface AccordionErrorProps {
  errorName: string
  errorDate: string
  errorId: string
  errorCollectStore: string
}

export function AccordionError({
  errorCollectStore,
  errorDate,
  errorName,
  errorId,
}: AccordionErrorProps) {
  return (
    <Accordion type="single" collapsible className="w-full shadow-none">
      <AccordionItem value="item-1">
        <AccordionTrigger className="px-6 py-4 border border-zinc-300 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="bg-red-100 text-red-700 rounded-full size-10 flex items-center justify-center">
              <CircleAlert />
            </div>
            <strong className="text-base font-semibold">
              {errorName} - {formatDate(errorDate)}
            </strong>
          </div>
        </AccordionTrigger>
        <AccordionContent className="mt-3 px-6 py-4  border border-zinc-300 rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <strong className="font-semibold">Status:</strong>
              <span className="text-zinc-600">failed</span>
            </div>
            <div className="flex items-center gap-2">
              <strong className="font-semibold">Id da coleta:</strong>
              <span className="text-zinc-600">{errorId}</span>
            </div>
            <div className="flex items-center gap-2">
              <strong className="font-semibold">Loja:</strong>
              <span className="text-zinc-600">{errorCollectStore}</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
