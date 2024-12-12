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
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Login, loginSchema } from "@/types/auth";
import { Button } from "@/components/ui/button";
import { FormSucess } from "@/components/auth/form-sucess";
import { FormError } from "@/components/auth/form-error";

export function LoginForm() {
  const form = useForm<Login & { sucessMessage: string; errorMessage: string }>(
    {
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "",
        password: "",
        sucessMessage: "",
        errorMessage: "",
      },
    },
  );
  const { isSubmitting } = useFormState({
    control: form.control,
  });

  const onSubmit = async (values: Login) => {
    const serverResponse = {
      success: Math.random() > 0.5,
      error: "Email already in use",
      message: "Login successful! Welcome back.",
    };

    if (serverResponse.success) {
      form.setValue("sucessMessage", "sucess");
      form.setValue("errorMessage", "");
    }

    if (serverResponse.error) {
      form.setValue("errorMessage", "error");
      form.setValue("sucessMessage", "");
    }
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem className="text-sm md:text-lg">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isSubmitting}
                      placeholder="john@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem className="text-sm md:text-lg">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isSubmitting}
                      type="password"
                      placeholder="********"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={form.getValues("errorMessage")} />
          <FormSucess message={form.getValues("sucessMessage")} />
          <Button disabled={isSubmitting}>Login</Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
