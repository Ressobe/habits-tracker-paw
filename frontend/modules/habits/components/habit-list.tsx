'use client';

import { Habit } from "@/types/habit";
import { HabitItem } from "./habit-item";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

type HabitListProps = {
  habits: Habit[];
};

export function HabitList({ habits }: HabitListProps) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const categoryFilter = searchParams.get("category");
  const priorityFilter = searchParams.get("priority");
  const statusFilter = searchParams.get("status");

  const pathname = usePathname();

  const filteredHabits = habits.filter((habit) => {
    let isValid = true;

    if (!habit.name.toLowerCase().includes(search.toLowerCase())) {
      isValid = false;
    }

    if (categoryFilter && habit.category?.id !== categoryFilter) {
      isValid = false;
    }

    if (priorityFilter && habit.priority !== Number(priorityFilter)) {
      isValid = false;
    }

    if (statusFilter) {
      // const isCompleted = statusFilter === "completed";
      // if (habit.status !== isCompleted) {
      //   isValid = false;
      // }
    }

    return isValid;
  });

  return (
    <ul className="space-y-6">
      {filteredHabits.map((item) => (
        <li key={item.id}>
          <Link href={`/habits/${item.id}`}>
            <HabitItem habit={item} selected={pathname === `/habits/${item.id}`} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
