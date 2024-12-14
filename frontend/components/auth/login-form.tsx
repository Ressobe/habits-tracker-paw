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
import { ActionReponse } from "@/types/server";
import { loginAction } from "@/actions/login";
import { redirect } from "next/navigation";

export function LoginForm() {
  const form = useForm<Login & ActionReponse>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { isSubmitting } = useFormState({
    control: form.control,
  });

  const onSubmit = async (values: Login) => {
    const response = await loginAction(values);
    if (response.success) {
      form.setValue("sucessMessage", response.success);
      form.setValue("errorMessage", "");
      redirect("/");
    }

    if (response.error) {
      form.setValue("errorMessage", response.error);
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
              name="username"
              render={({ field }) => (
                <FormItem className="text-sm md:text-lg">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isSubmitting}
                      placeholder="Username"
                      type="text"
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
          <Button
            variant="secondary"
            type="submit"
            className="w-full rounded-lg relative"
            disabled={isSubmitting}
          >
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
