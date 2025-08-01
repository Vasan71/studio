
"use server";

import { routeLead } from "@/ai/flows/lead-router";
import { z } from "zod";

const leadSchema = z.object({
  requestContent: z.string().min(10, { message: "Request content must be at least 10 characters long." }),
});

export async function getLeadRouting(prevState: any, formData: FormData) {
  const validatedFields = leadSchema.safeParse({
    requestContent: formData.get("requestContent"),
  });

  if (!validatedFields.success) {
    return {
      message: 'error',
      data: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await routeLead({ requestContent: validatedFields.data.requestContent });
    
    // Add a null check for the result from the AI
    if (!result) {
        throw new Error("AI service returned an empty response.");
    }

    return { message: 'success', data: result, errors: undefined };
  } catch (error) {
    console.error("AI routing failed:", error);
    const fieldErrors: Record<string, string[]> = { _form: ['The AI service failed to process the request. Please try again.'] };
    return { message: 'error', data: null, errors: fieldErrors };
  }
}
