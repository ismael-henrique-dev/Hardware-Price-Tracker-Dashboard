export interface Inssue {
  Id: string
  When: string
  Reason: string
  At: string
}

export interface FetchInssuesByDateResponse {
  DescriptioN: string
  response: Inssue[]
  config: {
    pasDays: string
  }
}

export interface FetchInssuesResponse {
  DescriptioN: string
  response: Inssue[]
  config: {
    page: string
  }
}