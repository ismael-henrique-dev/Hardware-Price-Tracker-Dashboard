import { api } from "@/services/api"

interface Inssue {
  Id: string
  When: string
  Reason: string
  At: string
}

interface FetchInssuesResponse {
  DescriptioN: string
  response: Inssue[]
  config: {
    page: string
  }
}

export async function fetchInssues(): Promise<FetchInssuesResponse> {
  try {
    const { data } = await api.get(`/api/issues/1`)

    return data
  } catch (error) {
    throw new Error(`Erro ao buscar os inssues: ${error}`)
  }
}
