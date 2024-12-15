import { Clock } from "lucide-react"

interface ICollectCardProps {
  date: string
  collectId: number
}

export function CollectCard({ date, collectId }: ICollectCardProps) {
  return (
    <div className="flex flex-col justify-start px-3 py-5 gap-1 ">
      <div className="flex items-center gap-2">
        <Clock />
        <strong className="text-black font-semibold">{date}</strong>
      </div>
      <span className="text-sm text-zinc-600">{collectId}</span>
    </div>
  )
}
