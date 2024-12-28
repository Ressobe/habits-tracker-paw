'use client';

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
import { markAsCompletedHabitAction } from "../actions/mark-as-completed-habit";
import { useToast } from "@/hooks/use-toast";
import { SucessToastMessage } from "@/components/sucess-toast-message";
import { ErrorToastMessage } from "@/components/error-toast-message";

type HabitItemProps = {
  habit: Habit;
  selected?: boolean;
};

export function HabitItem({ habit, selected }: HabitItemProps) {
  const { toast } = useToast();

  const onClickComplete = async () => {
    const response = await markAsCompletedHabitAction(habit.id);
    if (response.success) {
      toast({
        description: <SucessToastMessage message={response.success} />,
        className: "bg-secondary opacity-90",
        duration: 2000,
      });
    }

    if (response.error) {
      toast({
        description: <ErrorToastMessage message={response.error} />,
        className: "bg-secondary opacity-90",
        duration: 2000,
      });
    }
  };

  return (
    <Card className={clsx(selected && "bg-secondary", "transition-all")}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>{habit.name}</CardTitle>
          <CardDescription className="flex gap-x-2">
            {habit.category && <Badge variant="outline">{habit.category.name}</Badge>}
            <PriorityBadge priority={habit.priority} />
          </CardDescription>
        </div>
        <HabitDropdownMenu habit={habit} />
      </CardHeader>
      <CardContent>
        <Button disabled={habit.isTodayDone} onClick={onClickComplete}>Complete</Button>
      </CardContent>
    </Card>
  );
}
