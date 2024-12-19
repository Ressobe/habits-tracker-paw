import { SucessToastMessage } from "@/components/sucess-toast-message";
import { deleteHabitAction } from "../actions/delete-habit";
import { ErrorToastMessage } from "@/components/error-toast-message";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

type DeleteHabitForm = {
  habitId: string;
  onCancel?: () => void;
};

export function DeleteHabitForm({ onCancel, habitId }: DeleteHabitForm) {
  const { toast } = useToast();

  const handleSubmit = async () => {
    const response = await deleteHabitAction(habitId);
    if (response.success) {
      toast({
        description: <SucessToastMessage message={response.success} />,
        className: "bg-secondary opacity-90",
        duration: 2000,
      });
    }
    if (response.error) {
      toast({
        description: <ErrorToastMessage message={response.error} />,
        className: "bg-secondary opacity-90",
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex gap-4">
      <Button type="button" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit" onClick={handleSubmit}>
        Delete
      </Button>
    </div>
  );
}
