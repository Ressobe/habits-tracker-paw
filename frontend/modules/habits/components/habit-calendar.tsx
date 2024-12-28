import { components } from "@/api/v1";
import { Calendar } from "@/components/ui/calendar";

type HabitCalendarProps = {
  realizationDates: components["schemas"]["RealizationDto"][];
};

export function HabitCalendar({ realizationDates }: HabitCalendarProps) {
  const dates = realizationDates.map((item) => new Date(item.date));

  return (
    <Calendar
      className="w-full h-full flex border rounded"
      selected={dates}
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
