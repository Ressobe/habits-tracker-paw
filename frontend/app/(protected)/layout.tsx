import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { getUserInfo } from "@/api/user/get-user-info"

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const user = await getUserInfo();
  if (!user) return null;

  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
