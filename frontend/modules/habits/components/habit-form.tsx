"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Habit, NewHabit, newHabitSchema } from "@/types/habit";
import { createHabitAction } from "../actions/create-habit";
import { ErrorToastMessage } from "@/components/error-toast-message";
import { useToast } from "@/hooks/use-toast";
import { SucessToastMessage } from "@/components/sucess-toast-message";
import { updateHabitAction } from "../actions/update-habit";

type HabitFormProps = {
  onSuccess?: () => void;
  onError?: () => void;
  defaultValues?: Habit;
};

export function HabitForm({
  onSuccess,
  onError,
  defaultValues,
}: HabitFormProps) {
  const form = useForm<NewHabit>({
    resolver: zodResolver(newHabitSchema),
    defaultValues: {
      name: defaultValues?.name ?? "",
      description: defaultValues?.description ?? "",
      priority: defaultValues?.priority ?? 1,
    },
  });

  const { toast } = useToast();

  const onSubmit = async (values: NewHabit) => {
    let response = null;

    if (defaultValues) {
      response = await updateHabitAction(defaultValues.id, values);
    }
    if (!defaultValues) {
      response = await createHabitAction(values);
    }

    if (response?.success) {
      toast({
        description: <SucessToastMessage message={response.success} />,
        className: "bg-secondary opacity-90",
        duration: 2000,
      });
      onSuccess?.();
    }
    if (response?.error) {
      toast({
        description: <ErrorToastMessage message={response.error} />,
        className: "bg-secondary opacity-90",
        duration: 2000,
      });
      onError?.();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Habit name</FormLabel>
              <FormControl>
                <Input placeholder="Exercise" {...field} />
              </FormControl>
              <FormDescription>Name this habit</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormDescription>Description for your new habit</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={`${field.value}`}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a priority for your habit" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">LOW</SelectItem>
                  <SelectItem value="2">MEDIUM</SelectItem>
                  <SelectItem value="3">HIGH</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">
            {defaultValues ? " Update" : "Add"} habit
          </Button>
        </div>
      </form>
    </Form>
  );
}
