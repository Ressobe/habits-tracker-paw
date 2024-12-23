import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  UserPen,
  Key,
  Settings,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { EditUserForm } from "./edit-user-form";
import { NewPasswordForm } from "./auth/new-password-form";
import { capitalize } from "@/lib/utils";

const data = {
  nav: [
    { name: "account", icon: UserPen, content: EditUserForm },
    { name: "password", icon: Key, content: NewPasswordForm },
  ],
};

export function SettingsDialog() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeView = searchParams.get("view") || "account";

  const updateView = (viewName: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("view", viewName);
    router.push(`?${params.toString()}`);
  };

  const renderContent = (viewName: string) => {
    const view = data.nav.find(item => item.name === viewName);
    if (!view) return null;
    return (
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-2xl font-semibold">{capitalize(view?.name)}</h2>
        {<view.content />}
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex items-center gap-x-2" asChild>
        <SidebarMenuButton                >
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </SidebarMenuButton>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <DialogDescription className="sr-only">
          Customize your settings here.
        </DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar collapsible="none" className="hidden md:flex">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {data.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={item.name === activeView}
                        >
                          <button
                            onClick={() => updateView(item.name)}
                            className="w-full flex items-center gap-2 px-2 py-1"
                          >
                            <item.icon className="h-4 w-4" />
                            <span>{capitalize(item.name)}</span>
                          </button>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex h-[480px] flex-1 flex-col overflow-hidden">
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    Settings
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{capitalize(activeView)}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </header>
            <div className="flex-1 overflow-y-auto">
              {renderContent(activeView)}
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}

export default SettingsDialog;
