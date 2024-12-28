"use client";

import { useForm, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { NewPassword, newPasswordSchema } from "@/types/auth";
import { ActionReponse } from "@/types/server";

export function NewPasswordForm() {
  const form = useForm<NewPassword & ActionReponse>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",

      sucessMessage: "",
      errorMessage: "",
    },
  });
  const { isSubmitting } = useFormState({
    control: form.control,
  });

  const onSubmit = async (values: NewPassword) => {
    console.log(values);

    // if (response.success) {
    //   form.setValue("sucessMessage", "sucess");
    //   form.setValue("errorMessage", "");
    // }
    //
    // if (response.error) {
    //   form.setValue("errorMessage", "error");
    //   form.setValue("sucessMessage", "");
    // }
  };

  return (
    <CardWrapper
      headerLabel="Enter new password"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isSubmitting}
                      placeholder="********"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New password confirm</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isSubmitting}
                      placeholder="********"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            variant="secondary"
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            Reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
