"use client"

import { useEffect, useState } from "react"
import { fetchScraps, Scrap } from "@/http/fetch-scraps"
import { CollectCard } from "./collect-card"

export function LatestCollections() {
  const [latestCollectionsList, setLatestCollectionsList] = useState<Scrap[]>(
    []
  )

  useEffect(() => {
    async function getScraps() {
      try {
        const latestCollections = await fetchScraps()
        setLatestCollectionsList(latestCollections.response.ScrapList || [])
      } catch (error) {
        console.error("Error fetching scraps:", error)
        setLatestCollectionsList([])
      }
    }

    getScraps()
  }, [])

  return (
    <section className="bg-white border border-zinc-300 rounded-2xl px-4 py-6 h-fit">
      <h4 className="text-base font-semibold">Últimas coletas</h4>
      <ul className="flex flex-col gap-1">
        {latestCollectionsList.slice(0, 4).map((collect, index) => (
          <li key={index}>
            <CollectCard date={collect.CreatedAt} collectId={collect.Id} />
          </li>
        ))}
      </ul>
    </section>
  )
}
