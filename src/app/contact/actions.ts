"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function handleFormSubmission(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Here you would typically send an email, save to a database (Firebase, Airtable), etc.
  // For this example, we'll just simulate a success response.
  console.log("New contact form submission:", validatedFields.data);

  return { message: 'success', errors: undefined };
}
