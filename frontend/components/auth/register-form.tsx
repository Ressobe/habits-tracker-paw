"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/auth/form-error";
import { FormSucess } from "@/components/auth/form-sucess";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Register, registerSchema } from "@/types/auth";
import { registerAction } from "@/actions/register";

export function RegisterForm() {
  const form = useForm<
    Register & { sucessMessage: string; errorMessage: string }
  >({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      name: "",
      confirmPassword: "",
      password: "",
      sucessMessage: "",
      errorMessage: "",
    },
  });
  const { isSubmitting } = useFormState({
    control: form.control,
  });

  const onSubmit = async (values: Register) => {
    const response = await registerAction(values);

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
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
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
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="text-sm md:text-lg">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isSubmitting}
                      placeholder="john"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="text-sm md:text-lg">
                  <FormLabel>Confirm Password</FormLabel>
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
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
