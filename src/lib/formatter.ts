import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/pt-br"
dayjs.extend(relativeTime)
dayjs.locale("pt-br")

export const formatDate = (errorDate: string) => {
  const date = dayjs(errorDate)
  const now = dayjs()

 
  if (date.isSame(now, "day")) {
    return `Hoje - ${date.format("H:mm")}`
  }

  return date.format("DD MMM YY, h:mma")
}

export const formatRelativeDate = (date: string) => dayjs(date).fromNow()