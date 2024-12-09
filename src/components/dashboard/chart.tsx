"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const chartData = [
  { month: "Jul", succeeded: 120, failed: 30 },
  { month: "Ago", succeeded: 90, failed: 60 },
  { month: "Set", succeeded: 100, failed: 80 },
  { month: "Out", succeeded: 40, failed: 10 },
  { month: "Nov", succeeded: 80, failed: 100 },
]

interface PayloadItem {
  fill: string
  value: number
}

interface CustomTooltipProps {
  active?: boolean
  payload?: PayloadItem[]
  label?: string
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
    <div className="flex-1 w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
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
      </ResponsiveContainer>
    </div>
  )
}
