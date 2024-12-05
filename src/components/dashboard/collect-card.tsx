import { Clock } from "lucide-react"

interface ICollectCardProps {
  date: string
  collectId: string
}

export function CollectCard({ date, collectId }: ICollectCardProps) {
  return (
    <div className="flex flex-col justify-start px-3 py-5 gap-1 ">
      <div className="flex items-center gap-2">
        <Clock />
        <span className="text-gray-500 mr-2">{date}</span>
      </div>
      <span className="text-sm text-gray-400">{collectId}</span>
    </div>
  )
}
