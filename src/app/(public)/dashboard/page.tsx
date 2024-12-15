import { ChartArea } from "@/components/dashboard/chart"
import { LatestCollections } from "@/components/dashboard/latest-collections"
import { SummaryCard } from "@/components/dashboard/summary-card"

export default function Dashboard() {
  return (
    <div className="px-8 flex-1 flex flex-col m-auto w-full">
      <h1 className="text-2xl font-semibold mb-10">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <SummaryCard
          variant="total"
          title="Total de coletas"
          value={1200}
          percentage={10.1}
        />
        <SummaryCard
          variant="success"
          title="Sucedidas"
          value={900}
          percentage={10.1}
        />
        <SummaryCard
          variant="fail"
          title="Falharam"
          value={200}
          percentage={10.1}
        />
        {/* <SummaryCard
          variant="scheduled"
          title="Agendadas"
          value={100}
          percentage={10.1}
        /> */}
      </div>

      <div className="grid grid-cols-3 gap-8">
        <section className="col-span-2 bg-white border border-zinc-300 rounded-2xl p-6 flex-1">
          <ChartArea />
        </section>
        <LatestCollections />
      </div>
    </div>
  )
}
