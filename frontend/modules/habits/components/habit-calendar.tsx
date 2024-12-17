import { Calendar } from "@/components/ui/calendar";

export function HabitCalendar() {
  return (
    <Calendar
      className="w-full h-full flex border rounded"
      classNames={{
        months:
          "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
        month: "space-y-4 w-full flex flex-col",
        table: "w-full h-full border-collapse space-y-1",
        head_row: "",
        row: "w-full mt-2",
      }}
    />
  );
}
