import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { HabitDropdownMenu } from "./habit-dropdown-menu";
import { Badge } from "@/components/ui/badge";

type HabitItemProps = {
  name: string;
  categoryName: string;
  selected?: boolean;
};

export function HabitItem({ name, categoryName, selected }: HabitItemProps) {
  return (
    <Card className={clsx(selected && "bg-secondary")}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>{name}</CardTitle>
          <CardDescription className="flex gap-x-2">
            <Badge variant="outline">{categoryName}</Badge>
            <Badge variant="outline">HIGH</Badge>
          </CardDescription>
        </div>
        <HabitDropdownMenu />
      </CardHeader>
      <CardContent>
        <Button variant="secondary"> Mark as completed</Button>
      </CardContent>
    </Card>
  );
}
