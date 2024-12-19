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
import { PriorityBadge } from "@/components/priority-badge";
import { Habit } from "@/types/habit";

type HabitItemProps = {
  habit: Habit;
  selected?: boolean;
};

export function HabitItem({ habit, selected }: HabitItemProps) {
  return (
    <Card className={clsx(selected && "bg-secondary")}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>{habit.name}</CardTitle>
          <CardDescription className="flex gap-x-2">
            <Badge variant="outline">{"tu bedzie kategoria"}</Badge>
            <PriorityBadge priority={habit.priority} />
          </CardDescription>
        </div>
        <HabitDropdownMenu habit={habit} />
      </CardHeader>
      <CardContent>
        <Button variant="secondary"> Mark as completed</Button>
      </CardContent>
    </Card>
  );
}
