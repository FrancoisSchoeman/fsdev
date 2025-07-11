'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  subject: z
    .string()
    .min(1, 'Subject is required')
    .max(200, 'Subject is too long'),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(1000, 'Message is too long'),
  honeypot: z.string().optional(), // Honeypot field for bot detection
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContactForm(data: ContactFormData) {
  try {
    // Honeypot validation - if this field is filled, it's likely a bot
    if (data.honeypot && data.honeypot.trim() !== '') {
      return {
        success: false,
        error: 'Spam detected. Please try again.',
      };
    }

    const validatedData = contactFormSchema.parse(data);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'francois.schoeman15@gmail.com',
      subject: `FS Dev Contact Form: ${validatedData.subject}`,
      text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: validatedData.email,
    });

    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Please check your form data and try again.',
        fieldErrors: error.flatten().fieldErrors,
      };
    }

    return {
      success: false,
      error: 'Failed to send message. Please try again later.',
    };
  }
}
