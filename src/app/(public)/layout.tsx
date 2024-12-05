import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export const metadata: Metadata = {
  title: "Hardware Price Tracker Dashboard",
  description: "Generated by create next app",
}

const mainLocalFontFamily = Inter({
  weight: ["300", "400", "500", "600"],
  variable: "--font-family-main",
})

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${mainLocalFontFamily} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
