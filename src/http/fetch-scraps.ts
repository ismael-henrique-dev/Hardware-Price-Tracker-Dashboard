import { FetchScrapsResponse } from "@/@types/sraplings"
import { api } from "@/services/api"

export async function fetchScraps(): Promise<FetchScrapsResponse> {
  try {
    const { data } = await api.get(`/api/scrap/date/365`)

    return data
  } catch (error) {
    throw new Error(`Erro ao buscar os scraps: ${error}`)
  }
}
