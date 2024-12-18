import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

type CompletedProps = {
  amountOfDays: number;
};

export function Completed({ amountOfDays }: CompletedProps) {
  return (
    <Card>
      <CardContent className="flex items-center p-10 gap-4">
        <Check className="w-14 h-14 text-green-500" />
        <div className="flex flex-col">
          <span className="font-bold text-xl">Completed</span>
          <span className="text-muted-foreground">{amountOfDays} days</span>
        </div>
      </CardContent>
    </Card>
  );
}
