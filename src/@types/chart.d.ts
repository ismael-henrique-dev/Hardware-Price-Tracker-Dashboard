export interface ChartData {
  month: string
  succeeded: number
  failed: number
}

interface PayloadItem {
  fill: string
  value: number
}

export interface CustomTooltipProps {
  active?: boolean
  payload?: PayloadItem[]
  label?: string
}
