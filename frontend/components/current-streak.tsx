import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";

type CurrentStreakProps = {
  amountOfDays: number;
};

export function CurrentStreak({ amountOfDays }: CurrentStreakProps) {
  return (
    <Card>
      <CardContent className="flex items-center p-10 gap-4">
        <Flame className="w-14 h-14 text-orange-500" />
        <div className="flex flex-col">
          <span className="font-bold text-xl">Current Streak</span>
          <span className="text-muted-foreground">{amountOfDays} days</span>
        </div>
      </CardContent>
    </Card>
  );
}
