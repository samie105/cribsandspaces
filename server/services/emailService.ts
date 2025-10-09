import transporter from '../config/emailConfig';
import { 
  getQuoteEmailTemplate, 
  getWorkWithUsEmailTemplate, 
  getContactEmailTemplate,
  getLinenHireEmailTemplate,
  type QuoteFormData,
  type WorkWithUsFormData,
  type ContactFormData,
  type LinenHireFormData
} from '../templates/emailTemplates';

const RECIPIENT_EMAIL = 'samsonrichfield@gmail.com';

export async function sendQuoteEmail(data: QuoteFormData) {
  try {
    const htmlContent = getQuoteEmailTemplate(data);
    
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: `New Quote Request from ${data.firstName} ${data.lastName || ''}`,
      html: htmlContent,
      replyTo: data.email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Quote email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending quote email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function sendWorkWithUsEmail(data: WorkWithUsFormData) {
  try {
    const htmlContent = getWorkWithUsEmailTemplate(data);
    
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: `New Job Application from ${data.firstName} ${data.lastName} - ${data.workType}`,
      html: htmlContent,
      replyTo: data.email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Work with us email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending work with us email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const htmlContent = getContactEmailTemplate(data);
    
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: `New Contact Message from ${data.name}`,
      html: htmlContent,
      replyTo: data.email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Contact email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function sendLinenHireEmail(data: LinenHireFormData) {
  try {
    const htmlContent = getLinenHireEmailTemplate(data);
    
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: `New Linen Hire Enquiry from ${data.name}`,
      html: htmlContent,
      replyTo: data.email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Linen hire email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending linen hire email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
