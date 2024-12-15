import { fetchScraps } from "@/http/fetch-scraps"
import { CollectCard } from "./collect-card"

export async function LatestCollections() {
  const latestCollections = await fetchScraps()
  const latestCollectionsList = latestCollections.response

  return (
    <section className="bg-white border border-zinc-300 rounded-2xl px-4 py-6 h-fit">
      <h4 className="text-base font-semibold ">Últimas coletas</h4>
      <ul className="flex flex-col gap-1">
        {latestCollectionsList.map((collect, index) => (
          <li key={index}>
            <CollectCard
              date={collect.CreatedAt}
              collectId={collect.Id}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
