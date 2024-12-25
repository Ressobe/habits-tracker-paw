'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
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
import { useSearchParams, useRouter } from "next/navigation";
import { useCategoriesStore } from "@/stores/use-categories-store";

export function FilterDropdownMenu() {
  const categories = useCategoriesStore((state) => state.categories) ?? [];
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "";
  const priority = searchParams.get("priority") || "";
  const status = searchParams.get("status") || "";

  const updateQueryParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set(key, value);
    else params.delete(key);

    router.push(`?${params.toString()}`);
  };

  const resetFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("category");
    params.delete("priority");
    params.delete("status");

    router.push(`?${params.toString()}`);
  };

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
            <Button
              size="sm"
              variant="ghost"
              onClick={() => updateQueryParam("category", "")}
            >
              Clear
            </Button>
          </div>
          <Select
            value={category}
            onValueChange={(value) => updateQueryParam("category", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((item) => (
                <SelectItem key={item.id} value={`${item.id}`}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col items-start p-2">
          <div className="flex w-full justify-between items-center py-1">
            <span className="text-sm text-muted-foreground">Priority</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => updateQueryParam("priority", "")}
            >
              Clear
            </Button>
          </div>
          <Select
            value={priority}
            onValueChange={(value) => updateQueryParam("priority", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">LOW</SelectItem>
              <SelectItem value="2">MEDIUM</SelectItem>
              <SelectItem value="3">HIGH</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col items-start p-2">
          <div className="flex w-full justify-between items-center py-1">
            <span className="text-sm text-muted-foreground">Status</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => updateQueryParam("status", "")}
            >
              Clear
            </Button>
          </div>
          <Select
            value={status}
            onValueChange={(value) => updateQueryParam("status", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="not_completed">Not completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DropdownMenuSeparator />
        <div className="flex justify-between p-2">
          <Button variant="outline" onClick={resetFilters}>
            Reset
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
