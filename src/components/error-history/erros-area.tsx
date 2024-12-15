import { fetchInssuesByDate } from "@/http/fetch-inssues-by-date"
import { AccordionError } from "./accordion-error"

export async function ErrosArea() {
  const inssuesResponse = await fetchInssuesByDate()
  const inssuesList = inssuesResponse.response

  return (
    <section className="flex flex-col gap-6 flex-1 pb-8">
      {inssuesList.map((inssue) => (
        <AccordionError
          key={inssue.Id}
          errorName={inssue.Reason}
          errorCollectStore={inssue.At}
          errorId={inssue.Id}
          errorDate={inssue.When}
        />
      ))}
    </section>
  )
}
