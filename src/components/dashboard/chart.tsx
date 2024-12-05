"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { ChartConfig, ChartContainer } from "../ui/chart"

const chartData = [
  { month: "Jul", succeeded: 120, failed: 30 },
  { month: "Ago", succeeded: 90, failed: 60 },
  { month: "Set", succeeded: 100, failed: 80 },
  { month: "Out", succeeded: 40, failed: 10 },
  { month: "Nov", succeeded: 80, failed: 100 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#22c55e",
  },
} satisfies ChartConfig

interface CustomTooltipProps {
  active: boolean
  payload: Record<string, number>[]
  label: string
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-lg p-2 rounded-lg">
        <p className="font-bold text-gray-700">{label}</p>
        <p style={{ color: payload[0].fill }}>Sucedidas: {payload[0].value}</p>
        <p style={{ color: payload[1].fill }}>Falharam: {payload[1].value}</p>
      </div>
    )
  }

  return null
}

export function ChartArea() {
  return (
    <div className="flex flex-col gap-10 h-full">
      <div className="w-full">
        <ChartContainer config={chartConfig} className="h-full">
          <BarChart
            data={chartData}
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
        </ChartContainer>
      </div>
    </div>
  )
}
