"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ActionReponse } from "@/types/server";
import { UpdateUser, updateUserSchema } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { updateUserAction } from "@/actions/update-user";
import { useToast } from "@/hooks/use-toast";
import { SucessToastMessage } from "./sucess-toast-message";
import { ErrorToastMessage } from "./error-toast-message";

type EditUserFormProps = {
  defaultValues: UpdateUser;
  onSuccess?: () => void;
  onError?: () => void;
};

export function EditUserForm({
  defaultValues,
  onSuccess,
  onError,
}: EditUserFormProps) {
  const form = useForm<UpdateUser & ActionReponse>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      firstName: defaultValues.firstName,
      lastName: defaultValues.lastName,
    },
  });

  const { toast } = useToast();

  const { isSubmitting } = useFormState({
    control: form.control,
  });

  const onSubmit = async (values: UpdateUser) => {
    const response = await updateUserAction(values);
    if (response.success) {
      toast({
        description: <SucessToastMessage message={response.success} />,
        className: "bg-secondary opacity-90",
        duration: 2000,
      });
      onSuccess?.();
    }
    if (response.error) {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="text-sm md:text-lg">
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isSubmitting}
                    placeholder="First name"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="text-sm md:text-lg">
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isSubmitting}
                    placeholder="Last name"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <div className="flex gap-2">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Update</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
