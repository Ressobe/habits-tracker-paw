import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type SkipedProps = {
  amountOfDays: number;
};

export function Skiped({ amountOfDays }: SkipedProps) {
  return (
    <Card>
      <CardContent className="flex items-center p-10 gap-4">
        <ArrowRight className="w-10 h-10 lg:w-12 lg:h-12" />
        <div className="flex flex-col">
          <span className="font-bold lg:text-xl">Skiped</span>
          <span className="text-sm lg:text-md text-muted-foreground">
            {amountOfDays} days
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
