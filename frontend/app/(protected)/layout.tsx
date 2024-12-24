import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { getUserInfo } from "@/api/user/get-user-info"
import { getCategories } from "@/modules/categories/api/get-categories";
import { CategoriesProvider } from "@/providers/categories-provider";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const user = await getUserInfo();
  if (!user) return null;

  const categories = await getCategories();

  return (
    <SidebarProvider>
      <AppSidebar user={user} categories={categories ?? []} />
      <main className="w-full">
        <SidebarTrigger />
        <CategoriesProvider categories={categories}>
          {children}
        </CategoriesProvider>
      </main>
    </SidebarProvider>
  )
}
