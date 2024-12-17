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

export function SettingsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Settings /> Settings
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Settings for your account</DialogDescription>
        </DialogHeader>
        <Tabs
          defaultValue="account"
          className="flex items-center justify-between"
        >
          <TabsList className="flex flex-col  h-20 items-start bg-white w-fit">
            <TabsTrigger value="account" className="w-full">
              Account
            </TabsTrigger>
            <TabsTrigger value="password" className="w-full">
              Password
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <EditUserForm />
          </TabsContent>
          <TabsContent value="password">Change your password here.</Update>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
