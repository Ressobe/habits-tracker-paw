"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormItem,
  FormField,
  FormMessage,
  FormDescription,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreateCategory, createCategorySchema } from "@/types/category";
import { createCategoryAction } from "../actions/create-category";
import { useToast } from "@/hooks/use-toast";
import { SucessToastMessage } from "@/components/sucess-toast-message";
import { ErrorToastMessage } from "@/components/error-toast-message";

type CategoryFormProps = {
  close?: () => void;
};

export function CategoryForm({ close }: CategoryFormProps) {
  const { toast } = useToast();

  const form = useForm<CreateCategory>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: CreateCategory) => {
    const response = await createCategoryAction(values);
    if (response.success) {
      toast({
        description: <SucessToastMessage message={response.success} />,
        className: "bg-secondary opacity-90",
        duration: 2000,
      });
      close?.();
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
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="text-sm md:text-lg">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormDescription>Category name (required)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex justify-end gap-2">
            <Button onClick={() => close?.()} type="button" variant="secondary">
              Cancel
            </Button>
            <Button type="submit">Create category</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
