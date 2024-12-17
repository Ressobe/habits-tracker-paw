"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Category,
  CreateCategory,
  createCategorySchema,
} from "@/types/category";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Pencil, X } from "lucide-react";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";

type EditCategoryFormProps = {
  category: Category;
};

export function EditCategoryForm({ category }: EditCategoryFormProps) {
  const [inputDisabled, setInputDisabled] = useState(true);

  const form = useForm<CreateCategory>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      name: category.name,
    },
  });
  const { isSubmitting } = useFormState({
    control: form.control,
  });

  const onSubmit = (values: CreateCategory) => {
    console.log(values);
  };

  const reset = () => {
    form.reset();
    setInputDisabled(true);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="text-sm md:text-lg flex items-center align-middle gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} type="text" disabled={inputDisabled} />
                </FormControl>
              </FormItem>
            )}
          />
          {inputDisabled && (
            <Button
              onClick={() => setInputDisabled(false)}
              variant="ghost"
              size="sm"
            >
              <Pencil className="w-6 h-6" />
            </Button>
          )}
          {!inputDisabled && (
            <>
              <Button
                onClick={reset}
                variant="ghost"
                size="sm"
                disabled={isSubmitting}
              >
                <X className="w-6 h-6" />
              </Button>
              <Button
                type="submit"
                variant="ghost"
                size="sm"
                disabled={isSubmitting}
              >
                <Check className="w-6 h-6" />
              </Button>
            </>
          )}
        </div>
      </form>
    </Form>
  );
}
