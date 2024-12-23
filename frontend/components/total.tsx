import { Card, CardContent } from "@/components/ui/card";
import { NotepadText } from "lucide-react";

type TotalProps = {
  amountOfDays: number;
};

export function Total({ amountOfDays }: TotalProps) {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="flex items-center p-10 gap-4">
        <NotepadText className="w-10 h-10" />
        <div className="flex flex-col">
          <span className="font-bold lg:text-xl">Total</span>
          <span className="text-sm lg:text-md text-muted-foreground">
            {amountOfDays} days
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
