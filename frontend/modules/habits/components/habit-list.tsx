import { Habit } from "@/types/habit";
import { HabitItem } from "./habit-item";

type HabitListProps = {
  habits: Habit[];
};

export function HabitList({ habits }: HabitListProps) {
  return (
    <ul className="space-y-6">
      {habits.map((item) => (
        <li key={item.id}>
          <HabitItem habit={item} />
        </li>
      ))}
    </ul>
  );
}
