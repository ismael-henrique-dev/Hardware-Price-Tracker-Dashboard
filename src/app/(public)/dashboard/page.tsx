import { ChartArea } from "@/components/dashboard/chart"
import { CollectCard } from "@/components/dashboard/collect-card"
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

        <section className="bg-white border border-zinc-300 rounded-2xl px-4 py-6 h-fit">
          <h4 className="text-base font-semibold ">Últimas coletas</h4>
          <ul className="flex flex-col gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>
                <CollectCard
                  date="Ontem - 4:00"
                  collectId="e8a58d8d-f7c8-4441-8d04-d3809f19c5cc"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
