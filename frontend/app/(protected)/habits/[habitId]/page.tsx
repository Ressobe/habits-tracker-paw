import { Completed } from "@/components/completed";
import { CurrentStreak } from "@/components/current-streak";
import { Failed } from "@/components/failed";
import { Total } from "@/components/total";
import { getHabitDetails } from "@/modules/habits/api/get-habit-details";
import { HabitCalendar } from "@/modules/habits/components/habit-calendar";

type HabitPageProps = {
  params: Promise<{ habitId: string }>;
};

export default async function HabitPage({ params }: HabitPageProps) {
  const p = await params;
  const { data } = await getHabitDetails(p.habitId);

  return (
    <div className="flex flex-col gap-8 h-fit">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <CurrentStreak amountOfDays={data?.streakDays ?? 0} />
        <Completed amountOfDays={data?.completedDays ?? 0} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Failed amountOfDays={data?.failedDays ?? 0} />
        <Total amountOfDays={data?.totalDays ?? 0} />
      </div>
      <HabitCalendar realizationDates={data?.realizations ?? []} />
    </div>
  );
}
