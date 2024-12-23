"use client"

import { months } from "@/constants" 
import { fetchInssuesByDate } from "@/http/fetch-inssues-by-date"
import { fetchScraps } from "@/http/fetch-scraps"
import { useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { CustomTooltip } from "./chart-tooltip"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChartData } from "@/@types/chart"

export function Chart() {
  const [chartData, setChartData] = useState<ChartData[]>([])
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const scrapsResponse = await fetchScraps()
        const issuesResponse = await fetchInssuesByDate()

        const scrapInfo = scrapsResponse.response.ScrapList
        const issues = issuesResponse.response

        // fiz isso para fazer as conversões dos nomes dos meses corretanete
        const normalizeMonth = (month: string) =>
          month.charAt(0).toUpperCase() + month.slice(1, 3)

        const scrapByMonth = scrapInfo.reduce((acc, scrap) => {
          const month = normalizeMonth(
            new Date(scrap.CreatedAt).toLocaleString("pt-BR", {
              month: "short",
            })
          )
          acc[month] = (acc[month] || 0) + 1
          return acc
        }, {} as Record<string, number>)

        const errorsByMonth = issues.reduce((acc, issue) => {
          const month = normalizeMonth(
            new Date(issue.When).toLocaleString("pt-BR", { month: "short" })
          )
          acc[month] = (acc[month] || 0) + 1
          return acc
        }, {} as Record<string, number>)

        const formattedData = months.map((month) => ({
          month,
          succeeded: scrapByMonth[month] || 0,
          failed: errorsByMonth[month] || 0,
        }))

        const totalSucceeded = scrapInfo.length
        const totalFailed = issues.length

        params.set("totalSucceeded", totalSucceeded.toString())
        params.set("totalFailed", totalFailed.toString())
        replace(`${pathname}?${params.toString()}`)

        setChartData(formattedData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex-1 w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData.filter((d) => d.succeeded > 0 || d.failed > 0)}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 20,
          }}
        >
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="succeeded"
            fill="#22c55e"
            radius={[8, 8, 0, 0]}
            barSize={44}
          />
          <Bar
            dataKey="failed"
            fill="#ef4444"
            radius={[8, 8, 0, 0]}
            barSize={44}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
