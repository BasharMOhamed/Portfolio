"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues } from "./contact.schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormProps, FormField as Formfield } from "./contact.types";
import { submitContactForm } from "./contact.service";

const formFields: Formfield[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your name",
    component: "input",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "your@email.com",
    type: "email",
    component: "input",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Your message...",
    component: "textarea",
  },
];

export const ContactForm = ({
  onSubmitSuccess,
  onSubmitError,
}: ContactFormProps) => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await submitContactForm(values);
      onSubmitSuccess?.();
      form.reset();
    } catch (error) {
      onSubmitError?.(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        {formFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {field.component === "textarea" ? (
                    <Textarea placeholder={field.placeholder} {...formField} />
                  ) : (
                    <Input
                      placeholder={field.placeholder}
                      type={field.type}
                      {...formField}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};
