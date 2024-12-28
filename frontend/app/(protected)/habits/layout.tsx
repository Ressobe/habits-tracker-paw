import { FilterDropdownMenu } from "@/components/filter-dropdown-menu";
import { SearchBar } from "@/components/search-bar";
import { getAllHabits } from "@/modules/habits/api/get-all-habits";
import { HabitList } from "@/modules/habits/components/habit-list";

export default async function HabitsLayout({ children }: { children: React.ReactNode }) {
  const { data: habits } = await getAllHabits();

  return (
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
      {children}
    </section>
  );
}
