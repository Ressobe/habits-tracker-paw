import { CircleCheck } from "lucide-react";

type SucessToastMessageProps = {
  message: string;
};

export function SucessToastMessage({ message }: SucessToastMessageProps) {
  return (
    <div className="flex items-center gap-4 text-sm">
      <CircleCheck className="text-green-500 w-8 h-8" />
      <span>{message}</span>
    </div>
  );
}
