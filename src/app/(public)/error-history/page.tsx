import { ErrosArea } from "@/components/error-history/erros-area"

export default function ErrorHistory() {
  return (
    <div className="px-8 py-8 flex-1 flex flex-col m-auto w-full h-screen">
      <h1 className="text-2xl font-semibold mb-10">Histórico de erros</h1>
      <ErrosArea />
    </div>
  )
}
