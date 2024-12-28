'use client';

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
import { SettingsDialog } from "./settings-dialog";
import { HabitSheet } from "@/modules/habits/components/habit-sheet";
import { CategoryDialog } from "@/modules/categories/components/category-dialog";
import { EditUserForm } from "./edit-user-form";
import { Category } from "@/types/category";
import { CategoriesList } from "@/modules/categories/components/categories-list";
import { UpdatePasswordForm } from "./update-password-form";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AppSidebarProps = {
  user: User;
  categories: Category[];
};

export function AppSidebar({ user, categories }: AppSidebarProps) {
  const data = [
    { name: "account", icon: <UserPen />, component: <EditUserForm defaultValues={user} /> },
    { name: "categories", icon: <Tag />, component: <CategoriesList categories={categories} /> },
    { name: "password", icon: <Key />, component: <UpdatePasswordForm /> },
  ];

  const pathname = usePathname();

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
                <SidebarMenuButton isActive={pathname.includes("/habits")} asChild>
                  <Link href="/habits">
                    <Home />
                    <span>Dashboard</span>
                  </Link>
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
