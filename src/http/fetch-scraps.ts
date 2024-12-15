import { api } from "@/services/api"

interface Scrap {
  Id: number
  CreatedAt: string
  Scraped: string
}

interface FetchScrapsResponse {
  Description: string
  response: Scrap[]
  config: {
    PasDays: string
  }
}

// vou ternar nas ULTIMAS COLETAS

export async function fetchScraps(): Promise<FetchScrapsResponse> {
  try {
    const { data } = await api.get(`/api/scrap/date/1`)
    console.log(data)

    return data
  } catch (error) {
    throw new Error(`Erro ao buscar os inssues: ${error}`)
  }
}
