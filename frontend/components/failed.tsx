import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

type FailedProps = {
  amountOfDays: number;
};

export function Failed({ amountOfDays }: FailedProps) {
  return (
    <Card>
      <CardContent className="flex items-center p-10 gap-4">
        <X className="w-14 h-14 text-red-500" />
        <div className="flex flex-col">
          <span className="font-bold text-xl">Failed</span>
          <span className="text-sm text-muted-foreground">
            {amountOfDays} days
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
