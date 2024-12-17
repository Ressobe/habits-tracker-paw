import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { SlidersHorizontal } from "lucide-react";

export function FilterDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <SlidersHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Filters</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col items-start p-2">
          <div className="flex w-full justify-between items-center py-1">
            <span className="text-sm text-muted-foreground">Category</span>
            <Button size="sm" variant="ghost">
              Clear
            </Button>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Category1</SelectItem>
              <SelectItem value="dark">Category2</SelectItem>
              <SelectItem value="system">Category3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col items-start p-2">
          <div className="flex w-full justify-between items-center py-1">
            <span className="text-sm text-muted-foreground">Priority</span>
            <Button size="sm" variant="ghost">
              Clear
            </Button>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">LOW</SelectItem>
              <SelectItem value="dark">MEDIUM</SelectItem>
              <SelectItem value="system">HIGH</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col items-start p-2">
          <div className="flex w-full justify-between items-center py-1">
            <span className="text-sm text-muted-foreground">Status</span>
            <Button size="sm" variant="ghost">
              Clear
            </Button>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Completed</SelectItem>
              <SelectItem value="dark">Not completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DropdownMenuSeparator />
        <div className="flex justify-between p-2">
          <Button variant="outline">Reset</Button>
          <Button variant="secondary">Apply</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
