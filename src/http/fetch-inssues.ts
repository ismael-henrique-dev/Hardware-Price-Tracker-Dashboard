import { FetchInssuesResponse } from "@/@types/inssues"
import { api } from "@/services/api"

export async function fetchInssues(): Promise<FetchInssuesResponse> {
  try {
    const { data } = await api.get(`/api/issues/1`)

    return data
  } catch (error) {
    throw new Error(`Erro ao buscar os inssues: ${error}`)
  }
}
