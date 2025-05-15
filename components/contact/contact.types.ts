import { ContactFormValues } from "./contact.schema";

export interface ContactFormProps {
  onSubmitSuccess?: () => void;
  onSubmitError?: (error: unknown) => void;
}

export type FormField = {
  name: keyof ContactFormValues;
  label: string;
  placeholder: string;
  type?: string;
  component?: "input" | "textarea";
};
