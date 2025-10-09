'use server';

import { sendQuoteEmail } from '@/server/services/emailService';
import type { QuoteFormData } from '@/server/templates/emailTemplates';

export async function submitQuoteForm(formData: QuoteFormData) {
  try {
    const result = await sendQuoteEmail(formData);
    
    if (result.success) {
      return {
        success: true,
        message: 'Quote request submitted successfully!',
      };
    } else {
      return {
        success: false,
        message: 'Failed to send quote request. Please try again.',
        error: result.error,
      };
    }
  } catch (error) {
    console.error('Error in submitQuoteForm:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
