import { redirect } from "next/navigation"

export default function Home() {
  redirect("/dashboard")
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Home</h1>
    </div>
  )
}
