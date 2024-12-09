import { CalendarCheck2, CircleCheckBig, CircleX, Database } from "lucide-react"

type SummaryCardVariants = "total" | "success" | "fail" | "scheduled"

type SummaryCardProps = {
  variant: SummaryCardVariants
  title: string
  value: number
  percentage: number
}

export function SummaryCard({
  variant,
  title,
  percentage,
  value,
}: SummaryCardProps) {
  return (
    <div className="bg-white  border border-zinc-300 rounded-2xl p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">{title}</span>
        {variant === "total" && <Database className="text-black size-5" />}
        {variant === "success" && (
          <CircleCheckBig className="text-green-500 size-5" />
        )}
        {variant === "fail" && <CircleX className="text-red-500 size-5" />}
        {variant === "scheduled" && (
          <CalendarCheck2 className="text-black size-5" />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <strong className="text-2xl font-bold">{value}</strong>
        <p className="text-xs">{percentage}% do mês passado</p>
      </div>
    </div>
  )
}
