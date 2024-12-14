import { TriangleAlert } from "lucide-react";

type FormErrorProps = {
  message?: string;
};

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  return (
    <div className="bg-destructive/40 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive brightness-110">
      <TriangleAlert className="w-6 h-6" />
      <p>{message}</p>
    </div>
  );
}
