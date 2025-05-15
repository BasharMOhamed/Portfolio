"use client";

import Header from "@/components/Header";
import { ContactForm } from "./contact/ContactForm";
import { toast } from "sonner";

const Contact = () => {
  const handleSuccess = () => {
    toast.success("Message sent!", {
      description: "We'll get back to you soon.",
    });
  };

  const handleError = (error: unknown) => {
    toast.error("Failed to send message", {
      description: "Please try again.",
    });
  };

  return (
    <section
      id="contact"
      className="w-full py-24 bg-gradient-to-b from-secondary to-primary"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Header className="mb-16 text-4xl font-bold text-white">
            Get in Touch
          </Header>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <ContactForm
            onSubmitSuccess={handleSuccess}
            onSubmitError={handleError}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
