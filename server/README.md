# Server Email Service

This folder contains the email service implementation for handling form submissions.

## Structure

```
server/
├── config/
│   └── emailConfig.ts       # Nodemailer SMTP configuration
├── services/
│   └── emailService.ts      # Email sending functions
└── templates/
    └── emailTemplates.ts    # Beautiful HTML email templates
```

## Setup

### 1. Install Dependencies

```bash
pnpm add nodemailer
pnpm add -D @types/nodemailer
```

### 2. Environment Variables

Add these to your `.env.local` file:

```env
SMTP_EMAIL=your-mailgun-smtp-username@your-domain.com
SMTP_PASSWORD=your-mailgun-smtp-password
```

### 3. Mailgun Configuration

1. Sign up at [Mailgun](https://www.mailgun.com/)
2. Verify your domain
3. Get your SMTP credentials from the dashboard
4. Use the following settings:
   - Host: `smtp.mailgun.org`
   - Port: `587`
   - Username: Your Mailgun SMTP username
   - Password: Your Mailgun SMTP password

## Usage

### Form Actions

The server actions are located in `/app/actions/`:

- `quoteActions.ts` - Get a Quote form
- `workWithUsActions.ts` - Work With Us form
- `contactActions.ts` - Contact/Linen Hire forms

### Example Implementation

```typescript
'use client';

import { submitQuoteForm } from '@/app/actions/quoteActions';

// In your form component
const handleSubmit = async (formData) => {
  const result = await submitQuoteForm(formData);
  
  if (result.success) {
    // Show success message
    console.log('Email sent successfully!');
  } else {
    // Show error message
    console.error('Failed to send email:', result.error);
  }
};
```

## Email Templates

All email templates are professionally designed with:

- ✅ Responsive design
- ✅ Beautiful gradient headers
- ✅ Clean typography
- ✅ Professional branding
- ✅ Mobile-friendly layout

### Available Templates

1. **Quote Request Email** - `getQuoteEmailTemplate()`
   - Service type, bedrooms, bathrooms, etc.
   - Customer contact information
   - Special requirements

2. **Work With Us Email** - `getWorkWithUsEmailTemplate()`
   - Applicant information
   - Work type and availability
   - References and background check info

3. **Contact/Linen Hire Email** - `getContactEmailTemplate()`
   - Customer inquiry details
   - Contact preferences
   - Message content

## Testing

Test email functionality in development:

```bash
# Make sure your .env.local has valid credentials
pnpm dev

# Submit a form to trigger email sending
# Check console for success/error messages
```

## Production

Ensure environment variables are set in your hosting platform:

- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Other: Follow platform-specific instructions

## Troubleshooting

### SMTP Connection Error

If you see "SMTP connection error":
1. Verify your credentials are correct
2. Check if Mailgun domain is verified
3. Ensure firewall allows port 587
4. Try regenerating SMTP password

### Emails Not Received

1. Check spam/junk folder
2. Verify recipient email in `emailService.ts`
3. Check Mailgun dashboard for delivery logs
4. Ensure domain DNS records are configured

## Support

For issues, check:
- [Mailgun Documentation](https://documentation.mailgun.com/)
- [Nodemailer Documentation](https://nodemailer.com/)
