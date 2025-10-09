'use server';

import { sendWorkWithUsEmail } from '@/server/services/emailService';
import type { WorkWithUsFormData } from '@/server/templates/emailTemplates';

export async function submitWorkWithUsForm(formData: WorkWithUsFormData) {
  try {
    const result = await sendWorkWithUsEmail(formData);
    
    if (result.success) {
      return {
        success: true,
        message: 'Application submitted successfully!',
      };
    } else {
      return {
        success: false,
        message: 'Failed to submit application. Please try again.',
        error: result.error,
      };
    }
  } catch (error) {
    console.error('Error in submitWorkWithUsForm:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
