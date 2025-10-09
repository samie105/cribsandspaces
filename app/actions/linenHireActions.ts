"use server";

import { z } from "zod";
import { sendLinenHireEmail } from "../../server/services/emailService";

// Validation schema for linen hire enquiry form
const linenHireFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type LinenHireFormData = z.infer<typeof linenHireFormSchema>;

/**
 * Server action to handle linen hire enquiry form submissions
 * @param formData - The validated form data
 * @returns Success or error result
 */
export async function submitLinenHireForm(formData: LinenHireFormData) {
  try {
    // Validate the form data
    const validatedData = linenHireFormSchema.parse(formData);

    // Send the email
    await sendLinenHireEmail(validatedData);

    return {
      success: true,
      message: "Your enquiry has been sent successfully!",
    };
  } catch (error) {
    console.error("Error submitting linen hire form:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form data and try again.",
        errors: error.issues,
      };
    }

    return {
      success: false,
      message: "Failed to send enquiry. Please try again later.",
    };
  }
}
