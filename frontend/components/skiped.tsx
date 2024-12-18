import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type SkipedProps = {
  amountOfDays: number;
};

export function Skiped({ amountOfDays }: SkipedProps) {
  return (
    <Card>
      <CardContent className="flex items-center p-10 gap-4">
        <ArrowRight className="w-14 h-14" />
        <div className="flex flex-col">
          <span className="font-bold text-xl">Skiped</span>
          <span className="text-muted-foreground">{amountOfDays} days</span>
        </div>
      </CardContent>
    </Card>
  );
}
