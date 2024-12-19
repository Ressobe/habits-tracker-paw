import { getUserInfo } from "@/api/user/get-user-info";
import { LogoutButton } from "@/components/auth/logout-button";
import { Completed } from "@/components/completed";
import { CurrentStreak } from "@/components/current-streak";
import { Failed } from "@/components/failed";
import { FilterDropdownMenu } from "@/components/filter-dropdown-menu";
import { HelloMessage } from "@/components/hello-message";
import { SearchBar } from "@/components/search-bar";
import { SettingsDialog } from "@/components/settings-dialog";
import { Skiped } from "@/components/skiped";
import { Total } from "@/components/total";
import { CategoryDialog } from "@/modules/categories/components/category-dialog";
import { getAllHabits } from "@/modules/habits/api/get-all-habits";
import { HabitCalendar } from "@/modules/habits/components/habit-calendar";
import { HabitItem } from "@/modules/habits/components/habit-item";
import { HabitList } from "@/modules/habits/components/habit-list";
import { HabitSheet } from "@/modules/habits/components/habit-sheet";
import { Suspense } from "react";

export default async function Home() {
  const { data: userInfo } = await getUserInfo();
  const { data: habits } = await getAllHabits();

  return (
    <section className="w-full flex flex-col gap-8 justify-center p-8">
      <div className="flex justify-between">
        <Suspense>
          <HelloMessage name={userInfo?.firstName ?? ""} />
        </Suspense>
        <div className="flex items-center gap-2">
          <HabitSheet />
          <CategoryDialog />
          <SettingsDialog />
          <LogoutButton />
        </div>
      </div>
      <div className="flex w-full gap-16">
        <ul className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <SearchBar />
            <FilterDropdownMenu />
          </div>
          <HabitList habits={habits ?? []} />
        </ul>
        <div className="flex flex-col w-full gap-8">
          <div className="grid grid-cols-2 gap-4 ">
            <CurrentStreak amountOfDays={40} />
            <Completed amountOfDays={40} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Failed amountOfDays={40} />
            <Skiped amountOfDays={40} />
            <Total amountOfDays={80} />
          </div>
          <HabitCalendar />
        </div>
      </div>
    </section>
  );
}
