import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";

type HabitItemProps = {
  name: string;
  selected?: boolean;
};

export function HabitItem({ name, selected }: HabitItemProps) {
  return (
    <Card className={clsx(selected && "bg-secondary")}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="secondary"> Mark as completed</Button>
      </CardContent>
    </Card>
  );
}
