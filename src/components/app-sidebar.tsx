import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { ChartPie, CircleAlert, DatabaseBackup } from "lucide-react"
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
                <Link href="/dashboard" className="flex gap-3 text-zinc-50">
                  <ChartPie className="size-6 w-24 " size={32} />
                  <span className="text-base">Dashboard</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton
                className="hover:bg-green-900 text-3xl h-10"
                asChild
              >
                <Link
                  href="/collection-history"
                  className="flex gap-3 text-zinc-50"
                >
                  <DatabaseBackup className="size-6 w-24 " size={32} />
                  <span className="text-base">Coletas</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton
                className="hover:bg-green-900 text-3xl h-10"
                asChild
              >
                <Link href="/error-history" className="flex gap-3 text-zinc-50">
                  <CircleAlert className="size-6 w-24 " size={32} />
                  <span className="text-base">Relatórios de erros</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
