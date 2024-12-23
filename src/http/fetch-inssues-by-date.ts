import { FetchInssuesByDateResponse } from "@/@types/inssues"
import { api } from "@/services/api"

export async function fetchInssuesByDate(): Promise<FetchInssuesByDateResponse> {
  try {
    const { data } = await api.get(`api/issues/date/30`)

    return data
  } catch (error) {
    throw new Error(`Erro ao buscar os inssues: ${error}`)
  }
}
