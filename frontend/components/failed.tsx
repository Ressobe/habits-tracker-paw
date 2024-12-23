import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

type FailedProps = {
  amountOfDays: number;
};

export function Failed({ amountOfDays }: FailedProps) {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="flex items-center p-10 gap-4">
        <X className="w-10 h-10 lg:w-12 lg:h-12 text-red-500" />
        <div className="flex flex-col">
          <span className="font-bold lg:text-xl">Failed</span>
          <span className="text-sm lg:text-md text-muted-foreground">
            {amountOfDays} days
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
