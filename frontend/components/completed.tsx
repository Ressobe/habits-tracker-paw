import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

type CompletedProps = {
  amountOfDays: number;
};

export function Completed({ amountOfDays }: CompletedProps) {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="flex items-center p-6 md:p-10 gap-4">
        <Check className="w-10 h-10 lg:w-12 lg:h-12 text-green-500" />
        <div className="flex flex-col">
          <span className="font-bold lg:text-xl">Completed</span>
          <span className="text-sm lg:text-md text-muted-foreground">
            {amountOfDays} days
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
