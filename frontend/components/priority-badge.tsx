import { Badge } from "./ui/badge";

type PriorityBadgeProps = {
  priority: number;
};

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  switch (priority) {
    case 1:
      return (
        <Badge className="text-blue-500 font-bold" variant="outline">
          LOW
        </Badge>
      );
    case 2:
      return (
        <Badge className="text-orange-500 font-bold" variant="outline">
          MEDIUM
        </Badge>
      );
    case 3:
      return (
        <Badge className="text-red-500 font-bold" variant="outline">
          HIGH
        </Badge>
      );
  }
}
