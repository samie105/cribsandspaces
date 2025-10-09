'use server';

import { sendContactEmail } from '@/server/services/emailService';
import type { ContactFormData } from '@/server/templates/emailTemplates';

export async function submitContactForm(formData: ContactFormData) {
  try {
    const result = await sendContactEmail(formData);
    
    if (result.success) {
      return {
        success: true,
        message: 'Message sent successfully!',
      };
    } else {
      return {
        success: false,
        message: 'Failed to send message. Please try again.',
        error: result.error,
      };
    }
  } catch (error) {
    console.error('Error in submitContactForm:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
