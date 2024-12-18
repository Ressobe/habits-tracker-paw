import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EditUserForm } from "./edit-user-form";
import { Separator } from "@/components/ui/separator";
import { UpdatePasswordForm } from "./update-password-form";
import { EditCategoryForm } from "@/modules/categories/components/edit-category-form";
import { CategoryItem } from "@/modules/categories/components/category-item";
import { ScrollArea } from "./ui/scroll-area";

export function SettingsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Settings /> Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[450px] flex flex-col">
        <DialogHeader className="h-fit">
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Settings for your account</DialogDescription>
        </DialogHeader>
        <Tabs
          defaultValue="account"
          className="h-full flex items-start justify-start gap-12"
        >
          <TabsList
            aria-orientation="vertical"
            className="h-fit flex flex-col items-start justify-start bg-white w-fit"
          >
            <TabsTrigger value="account" className="w-full">
              Account
            </TabsTrigger>
            <TabsTrigger value="password" className="w-full">
              Password
            </TabsTrigger>
            <TabsTrigger value="categories" className="w-full">
              Categories
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="w-full h-full">
            <div className="pb-4">
              <h2 className="font-bold text-md">Edit your account</h2>
              <span className="text-muted-foreground text-sm">
                Change your first name and last name
              </span>
            </div>
            <EditUserForm
              defaultValues={{
                lastName: "Sobina",
                firstName: "Bartek",
              }}
            />
          </TabsContent>
          <TabsContent value="password" className="w-full">
            <div className="pb-4">
              <h2 className="font-bold text-md">Update your password</h2>
              <span className="text-muted-foreground text-sm">
                Type your old password and change it
              </span>
            </div>
            <UpdatePasswordForm />
          </TabsContent>
          <TabsContent value="categories">
            <h2 className="font-bold text-lg pb-4">Your categories</h2>
            <ScrollArea className="h-80">
              <ul className="flex flex-col gap-6">
                <CategoryItem
                  category={{ id: "dkdk", name: "CategoryItem1" }}
                />
                <CategoryItem
                  category={{ id: "dkdk", name: "CategoryItem2" }}
                />
                <CategoryItem
                  category={{ id: "dkdk", name: "CategoryItem3" }}
                />
                <CategoryItem
                  category={{ id: "dkdk", name: "CategoryItem4" }}
                />
                <CategoryItem
                  category={{ id: "dkdk", name: "CategoryItem4" }}
                />
                <CategoryItem
                  category={{ id: "dkdk", name: "CategoryItem4" }}
                />
                <CategoryItem
                  category={{ id: "dkdk", name: "CategoryItem4" }}
                />
                <CategoryItem
                  category={{ id: "dkdk", name: "CategoryItem4" }}
                />
                <CategoryItem
                  category={{ id: "dkdk", name: "CategoryItem4" }}
                />
              </ul>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
