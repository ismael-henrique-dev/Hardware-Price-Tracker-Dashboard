import { api } from "@/services/api"

interface Inssue {
  Id: string
  When: string
  Reason: string
  At: string
}

interface FetchInssuesByDateResponse {
  DescriptioN: string
  response: Inssue[]
  config: {
    pasDays: string
  }
}

export async function fetchInssuesByDate(): Promise<FetchInssuesByDateResponse> {
  try {
    const { data } = await api.get(`api/issues/date/30`)

    return data
  } catch (error) {
    throw new Error(`Erro ao buscar os inssues: ${error}`)
  }
}
