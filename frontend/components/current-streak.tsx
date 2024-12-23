import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";

type CurrentStreakProps = {
  amountOfDays: number;
};

export function CurrentStreak({ amountOfDays }: CurrentStreakProps) {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="flex items-center p-6 md:p-10 gap-4">
        <Flame className="w-10 h-10 lg:w-12 lg:h-12 text-orange-500" />
        <div className="flex flex-col">
          <span className="font-bold lg:text-xl">Streak</span>
          <span className="text-sm lg:text-md text-muted-foreground">
            {amountOfDays} days
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
