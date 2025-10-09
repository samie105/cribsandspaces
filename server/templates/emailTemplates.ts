interface QuoteFormData {
  firstName: string;
  lastName?: string;
  phone: string;
  email: string;
  address?: string;
  city?: string;
  postalCode?: string;
  serviceType: string;
  otherServiceDetails?: string;
  frequency?: string;
  bedrooms?: string;
  receptionRooms?: string;
  bathrooms?: string;
  hoursRequired?: string;
  clientMessage?: string;
  smsConsent: boolean;
}

interface WorkWithUsFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city?: string;
  postalCode?: string;
  workType: string;
  legallyEligible: string;
  backgroundCheck: string;
  transportation: string;
  hoursPerWeek?: string;
  references?: string;
  smsConsent: boolean;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface LinenHireFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const getQuoteEmailTemplate = (data: QuoteFormData): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 0; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: #C5A484; padding: 40px 30px; border-bottom: 4px solid #b8956e;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 300; letter-spacing: 1px;">New Quote Request</h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 300;">From Cribs & Spaces Cleaning Website</p>
            </td>
          </tr>

          <!-- Client Information -->
          <tr>
            <td style="padding: 40px 30px; border-left: 4px solid #f0f0f0;">
              <h2 style="margin: 0 0 20px; color: #1a1a1a; font-size: 20px; font-weight: 300; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Client Information</h2>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Name:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.firstName} ${data.lastName || ''}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Email:</span>
                    <p style="margin: 5px 0 0; color: #C5A484; font-size: 16px; font-weight: 400;">${data.email}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Phone:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.phone}</p>
                  </td>
                </tr>
                ${data.address ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Address:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.address}</p>
                  </td>
                </tr>
                ` : ''}
                ${data.city || data.postalCode ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Location:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.city || ''} ${data.postalCode || ''}</p>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>

          <!-- Service Details -->
          <tr>
            <td style="padding: 40px 30px; background-color: #fafafa; border-left: 4px solid #f0f0f0;">
              <h2 style="margin: 0 0 20px; color: #1a1a1a; font-size: 20px; font-weight: 300; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Service Requirements</h2>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ffffff;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Service Type:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400; text-transform: capitalize;">${data.serviceType.replace(/-/g, ' ')}</p>
                  </td>
                </tr>
                ${data.otherServiceDetails ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ffffff;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Service Details:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400; white-space: pre-wrap;">${data.otherServiceDetails}</p>
                  </td>
                </tr>
                ` : ''}
                ${data.frequency ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ffffff;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Frequency:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400; text-transform: capitalize;">${data.frequency.replace(/-/g, ' ')}</p>
                  </td>
                </tr>
                ` : ''}
                ${data.bedrooms ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ffffff;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Bedrooms:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.bedrooms}</p>
                  </td>
                </tr>
                ` : ''}
                ${data.bathrooms ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ffffff;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Bathrooms:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.bathrooms}</p>
                  </td>
                </tr>
                ` : ''}
                ${data.receptionRooms ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ffffff;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Reception Rooms:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.receptionRooms}</p>
                  </td>
                </tr>
                ` : ''}
                ${data.hoursRequired ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ffffff;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Hours Required:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.hoursRequired} hours</p>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>

          ${data.clientMessage ? `
          <!-- Additional Message -->
          <tr>
            <td style="padding: 40px 30px; border-left: 4px solid #f0f0f0;">
              <h2 style="margin: 0 0 20px; color: #1a1a1a; font-size: 20px; font-weight: 300; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Additional Information</h2>
              <p style="margin: 0; color: #555; font-size: 15px; line-height: 1.6; font-weight: 300;">${data.clientMessage}</p>
            </td>
          </tr>
          ` : ''}

          <!-- SMS Consent -->
          <tr>
            <td style="padding: 20px 30px; background-color: ${data.smsConsent ? '#e8f5e9' : '#fff3e0'}; border-left: 4px solid ${data.smsConsent ? '#4caf50' : '#ff9800'};">
              <p style="margin: 0; color: #555; font-size: 14px; font-weight: 300;">
                <strong style="color: #1a1a1a;">SMS Consent:</strong> ${data.smsConsent ? '✓ Client agreed to receive SMS updates' : '✗ Client did not consent to SMS updates'}
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 30px; text-align: center; border-top: 4px solid #C5A484;">
              <p style="margin: 0; color: #ffffff; font-size: 14px; font-weight: 300;">Cribs & Spaces Cleaning Ltd.</p>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 300;">Professional Cleaning Services</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

export const getWorkWithUsEmailTemplate = (data: WorkWithUsFormData): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Job Application</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 0; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: #C5A484; padding: 40px 30px; border-bottom: 4px solid #b8956e;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 300; letter-spacing: 1px;">New Job Application</h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 300;">Work With Us Form Submission</p>
            </td>
          </tr>

          <!-- Applicant Information -->
          <tr>
            <td style="padding: 40px 30px; border-left: 4px solid #f0f0f0;">
              <h2 style="margin: 0 0 20px; color: #1a1a1a; font-size: 20px; font-weight: 300; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Applicant Information</h2>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Full Name:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.firstName} ${data.lastName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Email:</span>
                    <p style="margin: 5px 0 0; color: #C5A484; font-size: 16px; font-weight: 400;">${data.email}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Phone:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.phone}</p>
                  </td>
                </tr>
                ${data.city || data.postalCode ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Location:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.city || ''} ${data.postalCode || ''}</p>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>

          <!-- Work Details -->
          <tr>
            <td style="padding: 40px 30px; background-color: #fafafa; border-left: 4px solid #f0f0f0;">
              <h2 style="margin: 0 0 20px; color: #1a1a1a; font-size: 20px; font-weight: 300; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Position & Qualifications</h2>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ffffff;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Position Applied:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400; text-transform: capitalize;">${data.workType.replace(/-/g, ' ')}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ffffff;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Legally Eligible to Work:</span>
                    <p style="margin: 5px 0 0; color: ${data.legallyEligible === 'yes' ? '#4caf50' : '#f44336'}; font-size: 16px; font-weight: 400; text-transform: uppercase;">${data.legallyEligible}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ffffff;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Background Check Willingness:</span>
                    <p style="margin: 5px 0 0; color: ${data.backgroundCheck === 'yes' ? '#4caf50' : '#f44336'}; font-size: 16px; font-weight: 400; text-transform: uppercase;">${data.backgroundCheck}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ffffff;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Has Transportation:</span>
                    <p style="margin: 5px 0 0; color: ${data.transportation === 'yes' ? '#4caf50' : '#ff9800'}; font-size: 16px; font-weight: 400; text-transform: uppercase;">${data.transportation}</p>
                  </td>
                </tr>
                ${data.hoursPerWeek ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ffffff;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Available Hours Per Week:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.hoursPerWeek}</p>
                  </td>
                </tr>
                ` : ''}
                ${data.references ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #ffffff;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">References:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.references}</p>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>

          <!-- SMS Consent -->
          <tr>
            <td style="padding: 20px 30px; background-color: ${data.smsConsent ? '#e8f5e9' : '#fff3e0'}; border-left: 4px solid ${data.smsConsent ? '#4caf50' : '#ff9800'};">
              <p style="margin: 0; color: #555; font-size: 14px; font-weight: 300;">
                <strong style="color: #1a1a1a;">SMS Consent:</strong> ${data.smsConsent ? '✓ Applicant agreed to receive SMS updates' : '✗ Applicant did not consent to SMS updates'}
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 30px; text-align: center; border-top: 4px solid #C5A484;">
              <p style="margin: 0; color: #ffffff; font-size: 14px; font-weight: 300;">Cribs & Spaces Cleaning Ltd.</p>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 300;">Professional Cleaning Services</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

export const getContactEmailTemplate = (data: ContactFormData): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 0; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: #C5A484; padding: 40px 30px; border-bottom: 4px solid #b8956e;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 300; letter-spacing: 1px;">New Contact Message</h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 300;">From Website Contact Form</p>
            </td>
          </tr>

          <!-- Contact Information -->
          <tr>
            <td style="padding: 40px 30px; border-left: 4px solid #f0f0f0;">
              <h2 style="margin: 0 0 20px; color: #1a1a1a; font-size: 20px; font-weight: 300; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Contact Details</h2>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Name:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Email:</span>
                    <p style="margin: 5px 0 0; color: #C5A484; font-size: 16px; font-weight: 400;">${data.email}</p>
                  </td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Phone:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.phone}</p>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 40px 30px; background-color: #fafafa; border-left: 4px solid #f0f0f0;">
              <h2 style="margin: 0 0 20px; color: #1a1a1a; font-size: 20px; font-weight: 300; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Message</h2>
              <p style="margin: 0; color: #555; font-size: 15px; line-height: 1.8; font-weight: 300; white-space: pre-wrap;">${data.message}</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 30px; text-align: center; border-top: 4px solid #C5A484;">
              <p style="margin: 0; color: #ffffff; font-size: 14px; font-weight: 300;">Cribs & Spaces Cleaning Ltd.</p>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 300;">Professional Cleaning Services</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

export const getLinenHireEmailTemplate = (data: LinenHireFormData): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Linen Hire Enquiry</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 0; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: #C5A484; padding: 40px 30px; border-bottom: 4px solid #b8956e;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 300; letter-spacing: 1px;">New Linen Hire Enquiry</h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 300;">From Airbnb Linen Hire Page</p>
            </td>
          </tr>

          <!-- Contact Information -->
          <tr>
            <td style="padding: 40px 30px; border-left: 4px solid #f0f0f0;">
              <h2 style="margin: 0 0 20px; color: #1a1a1a; font-size: 20px; font-weight: 300; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Contact Details</h2>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Name:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Email:</span>
                    <p style="margin: 5px 0 0; color: #C5A484; font-size: 16px; font-weight: 400;">${data.email}</p>
                  </td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5;">
                    <span style="color: #666; font-size: 13px; font-weight: 300;">Phone:</span>
                    <p style="margin: 5px 0 0; color: #1a1a1a; font-size: 16px; font-weight: 400;">${data.phone}</p>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 40px 30px; background-color: #fafafa; border-left: 4px solid #f0f0f0;">
              <h2 style="margin: 0 0 20px; color: #1a1a1a; font-size: 20px; font-weight: 300; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Enquiry Details</h2>
              <p style="margin: 0; color: #555; font-size: 15px; line-height: 1.8; font-weight: 300; white-space: pre-wrap;">${data.message}</p>
            </td>
          </tr>

          <!-- Service Info -->
          <tr>
            <td style="padding: 20px 30px; background-color: #f5f0eb; border-left: 4px solid #C5A484;">
              <p style="margin: 0; color: #555; font-size: 14px; font-weight: 300;">
                <strong style="color: #1a1a1a;">Service Type:</strong> Airbnb Linen Hire & Management
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 30px; text-align: center; border-top: 4px solid #C5A484;">
              <p style="margin: 0; color: #ffffff; font-size: 14px; font-weight: 300;">Cribs & Spaces Cleaning Ltd.</p>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 300;">Professional Cleaning & Linen Services</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

export type { QuoteFormData, WorkWithUsFormData, ContactFormData, LinenHireFormData };
