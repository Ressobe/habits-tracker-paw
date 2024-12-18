import { Card, CardContent } from "@/components/ui/card";
import { NotepadText } from "lucide-react";

type TotalProps = {
  amountOfDays: number;
};

export function Total({ amountOfDays }: TotalProps) {
  return (
    <Card>
      <CardContent className="flex items-center p-10 gap-4">
        <NotepadText className="w-14 h-14" />
        <div className="flex flex-col">
          <span className="font-bold text-xl">Total</span>
          <span className="text-sm text-muted-foreground">
            {amountOfDays} days
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
