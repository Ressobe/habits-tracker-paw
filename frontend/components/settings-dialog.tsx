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

export function SettingsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Settings /> Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[350px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Settings for your account</DialogDescription>
        </DialogHeader>
        <Separator />
        <Tabs
          defaultValue="account"
          className="flex items-start justify-start gap-12"
        >
          <TabsList className="flex flex-col items-start bg-white w-fit">
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
          <TabsContent value="account" className="w-full">
            <EditUserForm
              defaultValues={{
                lastName: "Sobina",
                firstName: "Bartek",
              }}
            />
          </TabsContent>
          <TabsContent value="password" className="w-full">
            <UpdatePasswordForm />
          </TabsContent>
          <TabsContent value="categories">
            <h2 className="font-bold text-lg py-4">Your categories</h2>
            <EditCategoryForm
              category={{
                id: "djjdj",
                name: "Category1",
              }}
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
