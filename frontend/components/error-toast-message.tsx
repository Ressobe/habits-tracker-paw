import { X } from "lucide-react";

type ErrorToastMessage = {
  message: string;
};

export function ErrorToastMessage({ message }: ErrorToastMessage) {
  return (
    <div className="flex items-center gap-4 text-lg">
      <X className="text-red-500 w-12 h-12" />
      <span>{message}</span>
    </div>
  );
}
