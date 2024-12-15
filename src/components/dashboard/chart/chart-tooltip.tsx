"use client"

import { CustomTooltipProps } from "@/@types/chart"

export const CustomTooltip = ({
  active,
  payload,
  label,
}: CustomTooltipProps) => {
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
