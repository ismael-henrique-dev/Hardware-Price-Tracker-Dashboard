import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar variant="inset" collapsible="icon" className="bg-green-700">
      <SidebarHeader>
        <h1>asa</h1>
      </SidebarHeader>
      <SidebarInset>
        <h3>asasa</h3>
      </SidebarInset>
      <SidebarContent className="bg-green-700">
        <h3>asasa</h3>
      </SidebarContent>
      <SidebarFooter>
        <SidebarInset>
          <h3>asasa</h3>
        </SidebarInset>
      </SidebarFooter>
    </Sidebar>
  )
}
