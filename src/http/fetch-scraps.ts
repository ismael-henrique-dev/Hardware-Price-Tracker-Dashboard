import { api } from "@/services/api"

export interface Scrap {
  Id: number
  CreatedAt: string
  Scraped: string
}

interface FetchScrapsResponse {
  Description: string
  response: {
    ScrapList: Scrap[]
  }
  config: {
    PasDays: string
  }
}

export async function fetchScraps(): Promise<FetchScrapsResponse> {
  try {
    const { data } = await api.get(`/api/scrap/date/365`)  

    return data
  } catch (error) {
    throw new Error(`Erro ao buscar os scraps: ${error}`)
  }
}
