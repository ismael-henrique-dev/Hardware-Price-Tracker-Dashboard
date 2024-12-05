import { ChartArea } from "@/components/dashboard/chart"
import { CollectCard } from "@/components/dashboard/collect-card"
import { SummaryCard } from "@/components/dashboard/summary-card"

export default function Dashboard() {
  return (
    <div className="p-8">
    
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </div>

     
      <div className="grid grid-cols-3 gap-8">
       
        <section className="col-span-2 bg-white border border-zinc-300 rounded-lg p-6">
          <ChartArea />
        </section>

        <section className="bg-white border border-zinc-300 rounded-lg px-4 py-6">
          <h4 className="text-base font-semibold ">Últimas coletas</h4>
          <ul className="flex flex-col gap-6">
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
