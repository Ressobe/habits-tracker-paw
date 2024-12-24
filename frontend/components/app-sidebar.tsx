import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Home, Key, Settings2, Tag, Trees, UserPen } from "lucide-react"
import { NavUser } from "./nav-user"
import { User } from "@/types/user"
import { SettingsDialog } from "./settings-dialog2";
import { HabitSheet } from "@/modules/habits/components/habit-sheet";
import { CategoryDialog } from "@/modules/categories/components/category-dialog";
import { EditUserForm } from "./edit-user-form";
import { NewPasswordForm } from "./auth/new-password-form";
import { Category } from "@/types/category";
import { CategoriesList } from "@/modules/categories/components/categories-list";

type AppSidebarProps = {
  user: User;
  categories: Category[];
};

export function AppSidebar({ user, categories }: AppSidebarProps) {

  const data = [
    { name: "account", icon: <UserPen />, component: <EditUserForm /> },
    { name: "categories", icon: <Tag />, component: <CategoriesList categories={categories} /> },
    { name: "password", icon: <Key />, component: <NewPasswordForm /> },
  ];


  return (
    <Sidebar>
      <SidebarHeader className="flex">
        <h1 className="flex items-center gap-2 font-bold text-2xl p-2">
          <Trees className="w-8 h-8 text-green-500" /> Habits tracker
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="">
                    <Home />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings2 />  Manage Habits
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <HabitSheet />
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <CategoryDialog />
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>

              </SidebarMenuItem>

              <SidebarMenuItem>
                <SettingsDialog data={data} />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
