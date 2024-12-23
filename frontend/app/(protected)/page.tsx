import { Completed } from "@/components/completed";
import { CurrentStreak } from "@/components/current-streak";
import { Failed } from "@/components/failed";
import { FilterDropdownMenu } from "@/components/filter-dropdown-menu";
import { SearchBar } from "@/components/search-bar";
import { Total } from "@/components/total";
import { getAllHabits } from "@/modules/habits/api/get-all-habits";
import { HabitCalendar } from "@/modules/habits/components/habit-calendar";
import { HabitList } from "@/modules/habits/components/habit-list";

export default async function Home() {
  const { data: habits } = await getAllHabits();

  return (
    <>
      <section className="w-full flex justify-between p-8  gap-8">
        <div className="flex gap-8">
          <ul className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <SearchBar />
              <FilterDropdownMenu />
            </div>
            <HabitList habits={habits ?? []} />
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <CurrentStreak amountOfDays={40} />
            <Completed amountOfDays={40} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Failed amountOfDays={40} />
            <Total amountOfDays={80} />
          </div>
          <HabitCalendar />
        </div>
      </section>
    </>
  );
}
