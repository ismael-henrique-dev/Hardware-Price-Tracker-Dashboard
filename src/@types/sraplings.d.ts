export interface Scrap {
  Id: number
  CreatedAt: string
  Scraped: string
}

export interface FetchScrapsResponse {
  Description: string
  response: {
    ScrapList: Scrap[]
  }
  config: {
    PasDays: string
  }
}