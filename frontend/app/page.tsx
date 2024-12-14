import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HabitCalendar } from "@/modules/habits/components/habit-calendar";
import { HabitItem } from "@/modules/habits/components/habit-item";
import { HabitSheet } from "@/modules/habits/components/habit-sheet";
import {
  ArrowRight,
  Book,
  Bookmark,
  Check,
  Flame,
  Settings,
  X,
} from "lucide-react";

export default function Home() {
  return (
    <section className="w-full flex flex-col gap-8 justify-center p-8">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Hello Bartek</h1>
          <span className="text-muted-foreground text-sm">
            Checkout your todays habits
          </span>
        </div>
        <div className="flex items-center gap-2">
          <HabitSheet />
          <Button variant="outline">
            <Bookmark />
            Category
          </Button>
          <Button variant="outline">
            <Settings /> Settings
          </Button>
        </div>
      </div>
      <div className="flex w-full gap-16">
        <ul className="space-y-6 w-1/3">
          <SearchBar />
          <HabitItem name="Exercise" />
          <HabitItem name="Journal" selected />
          <HabitItem name="Cold shower" />
          <HabitItem name="Meditate" />
        </ul>
        <div className="flex flex-col w-full gap-8">
          <div className="grid grid-cols-2 gap-4 ">
            <CurrentStreak />
            <Completed />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Failed />
            <Skiped />
            <Total />
          </div>
          <HabitCalendar />
        </div>
      </div>
    </section>
  );
}

function CurrentStreak() {
  return (
    <Card className="h-min">
      <CardContent className="flex items-center p-10 gap-4">
        <Flame className="w-14 h-14" />
        <div className="flex flex-col">
          <span>Current Streak</span>
          <span>7 days</span>
        </div>
      </CardContent>
    </Card>
  );
}

function Completed() {
  return (
    <Card>
      <CardContent className="flex items-center p-10 gap-4">
        <Check className="w-14 h-14 text-green-500" />
        <div className="flex flex-col">
          <span>Completed</span>
          <span>40 days</span>
        </div>
      </CardContent>
    </Card>
  );
}

function Skiped() {
  return (
    <Card>
      <CardContent className="flex items-center p-10 gap-4">
        <ArrowRight className="w-14 h-14" />
        <div className="flex flex-col">
          <span>Skiped</span>
          <span>40 days</span>
        </div>
      </CardContent>
    </Card>
  );
}

function Failed() {
  return (
    <Card>
      <CardContent className="flex items-center p-10 gap-4">
        <X className="w-14 h-14 text-red-500" />
        <div className="flex flex-col">
          <span>Failed</span>
          <span>40 days</span>
        </div>
      </CardContent>
    </Card>
  );
}

function Total() {
  return (
    <Card>
      <CardContent className="flex items-center p-10 gap-4">
        <Book className="w-14 h-14" />
        <div className="flex flex-col">
          <span>Total</span>
          <span>80 days</span>
        </div>
      </CardContent>
    </Card>
  );
}
