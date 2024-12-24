"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Category,
  createCategorySchema,
  UpdateCategory,
} from "@/types/category";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Pencil, X } from "lucide-react";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { updateCategoryAction } from "../actions/update-category";
import { useToast } from "@/hooks/use-toast";
import { SucessToastMessage } from "@/components/sucess-toast-message";
import { ErrorToastMessage } from "@/components/error-toast-message";

type EditCategoryFormProps = {
  category: Category;
};

export function EditCategoryForm({ category }: EditCategoryFormProps) {
  const [inputDisabled, setInputDisabled] = useState(true);

  const form = useForm<UpdateCategory>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      name: category.name,
    },
  });
  const { isSubmitting } = useFormState({
    control: form.control,
  });

  const { toast } = useToast();

  const onSubmit = async (values: UpdateCategory) => {
    const response = await updateCategoryAction(category.id, values);
    if (response.success) {
      toast({
        description: <SucessToastMessage message={response.success} />,
        className: "bg-secondary opacity-90",
        duration: 2000,
      });
      setInputDisabled(true);
    }
    if (response.error) {
      toast({
        description: <ErrorToastMessage message={response.error} />,
        className: "bg-secondary opacity-90",
        duration: 2000,
      });
    }
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
                  <Input {...field} type="text" disabled={inputDisabled} className="flex-1" />
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
