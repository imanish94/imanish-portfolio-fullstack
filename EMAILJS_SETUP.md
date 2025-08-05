# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form functionality that sends two emails:
1. A thank you email to the user
2. A notification email to you with the form details

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (imanish.indev@gmail.com)
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create Email Templates

### Template 1: Thank You Email (for users)
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Name it "Thank You Email" or similar
4. Use this template content:

```
Subject: Thank you for contacting Manish Sharma

Hi {{to_name}},

Thank you for reaching out to me! I've received your message and will get back to you as soon as possible.

Your message details:
- Subject: {{subject}}
- Message: {{message}}

Best regards,
Manish Sharma
Full Stack Developer
```

5. Note down the **Template ID**

### Template 2: Admin Notification (for you)
1. Create another template
2. Name it "Admin Notification" or similar
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

You have received a new message from your website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  PUBLIC_KEY: 'your_public_key_here',
  TEMPLATES: {
    USER_THANK_YOU: 'your_thank_you_template_id',
    ADMIN_NOTIFICATION: 'your_admin_template_id'
  }
};
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check that:
   - You receive a thank you email
   - You receive a notification email with the form details

## Important Notes

- The free EmailJS plan allows 200 emails per month
- Make sure your Gmail account has "Less secure app access" enabled or use App Passwords
- The contact form includes loading states and error handling
- All emails will be sent from your connected Gmail account

## Troubleshooting

If emails aren't sending:
1. Check your EmailJS dashboard for any error messages
2. Verify all IDs are correct in the configuration file
3. Make sure your Gmail account is properly connected
4. Check the browser console for any JavaScript errors 