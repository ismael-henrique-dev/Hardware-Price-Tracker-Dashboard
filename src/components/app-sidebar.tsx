import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,

} from "@/components/ui/sidebar"
import {
  ChartPie,
  CircleAlert,
  DatabaseBackup,
  Home,
  LogOut,
} from "lucide-react"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar
      variant="inset"
      collapsible="icon"
      className="bg-green-700 h-screen"
    >
      <SidebarContent className="bg-green-700">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="text-3xl">
              <SidebarMenuButton
                className="hover:bg-green-900 text-3xl h-10"
                asChild
              >
                <Link href="#" className="flex gap-3 text-zinc-50">
                  <ChartPie className="size-6 w-24 " size={32} />
                  <span className="text-xl font-semibold ">Dashboard</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton
                className="hover:bg-green-900 text-3xl h-10"
                asChild
              >
                <Link href="#" className="flex gap-3 text-zinc-50">
                  <ChartPie className="size-6 w-24 " size={32} />
                  <span className="text-xl font-semibold ">Dashboard</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton
                className="hover:bg-green-900 text-3xl h-10"
                asChild
              >
                <Link href="#" className="flex gap-3 text-zinc-50">
                  <ChartPie className="size-6 w-24 " size={32} />
                  <span className="text-base">Dashboard</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton
                className="hover:bg-green-900 text-3xl h-10"
                asChild
              >
                <Link href="#" className="flex gap-3 text-zinc-50">
                  <ChartPie className="size-6 w-24 " size={32} />
                  <span className="text-xl font-semibold ">Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-green-700">
        <SidebarMenuButton>
          <Link
            href="/logout"
            className="text-white text-lg flex items-center gap-2 justify-center"
          >
            <LogOut size={20} />
            Log-out
          </Link>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  )
}
// export function AppSidebar() {
//   return (
//     <Sidebar
//       variant="inset"
//       collapsible="icon"
//       className="bg-green-700 h-screen"
//     >
//       {/* Cabeçalho */}
//       <SidebarHeader className="flex items-center justify-center py-4 bg-green-700">
//         <span className="text-white font-bold text-lg">Menu</span>
//       </SidebarHeader>

//       {/* Ícones colapsados */}
//       <SidebarInset className="flex flex-col items-center bg-green-600">
//         <SidebarMenuItem>
//           <Link href="/dashboard" title="Dashboard">
//             <ChartPie className="text-white" size={24} />
//           </Link>
//         </SidebarMenuItem>
//         <Link href="/collection-history" title="Coletas">
//           <DatabaseBackup className="text-white" size={24} />
//         </Link>
//         <Link href="/error-history" title="Relatório de erros">
//           <CircleAlert className="text-white" size={24} />
//         </Link>
//       </SidebarInset>

//       {/* Conteúdo expandido */}
//       <SidebarContent className="bg-green-700 flex flex-col gap-4 p-4">
//         <Link
//           href="/dashboard"
//           className="text-white text-lg flex items-center gap-2"
//         >
//           <ChartPie size={20} />
//           Dashboard
//         </Link>
//         <Link
//           href="/coletas"
//           className="text-white text-lg flex items-center gap-2"
//         >
//           <DatabaseBackup size={20} />
//           Coletas
//         </Link>
//         <Link
//           href="/erros"
//           className="text-white text-lg flex items-center gap-2"
//         >
//           <CircleAlert size={20} />
//           Relatório de erros
//         </Link>
//       </SidebarContent>

//       {/* Rodapé */}
//       <SidebarFooter className="mt-auto py-4 px-4 text-green-900">
//         <Link
//           href="/logout"
//           className="text-white text-lg flex items-center gap-2 justify-center"
//         >
//           <LogOut size={20} />
//           Log-out
//         </Link>
//       </SidebarFooter>
//     </Sidebar>
//   )
// }
