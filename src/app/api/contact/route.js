import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, subject, message, honeypot } = await req.json();

        // 0. Honeypot Check (Bot Protection)
        if (honeypot) {
            // Silently reject bot (no logging to avoid noise in production)
            return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
        }

        // 1. Basic Input Validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        if (message.length < 2) {
            return NextResponse.json({ error: 'Message is too short (min 2 characters)' }, { status: 400 });
        }

        const companyEmail = 'info@tasglobals.com';

        // 2. Email to Company
        const companyEmailResponse = await resend.emails.send({
            from: 'Trident Aviation <info@tasglobals.com>', // Verified domain address
            to: companyEmail,
            subject: `New Inquiry: ${subject || 'General Inquiry'}`,
            html: `
                <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
                    <h2 style="color: #0A3D26; border-bottom: 2px solid #C5A059; padding-bottom: 10px;">New Inquiry Received</h2>
                    <p><strong>From:</strong> ${name} (${email})</p>
                    <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
                        <p style="margin-top: 0;"><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    <p style="font-size: 12px; color: #777; margin-top: 30px; text-align: center;">Sent from Trident Aviation Services Website</p>
                </div>
            `,
        });

        // 3. Thank You Email to User (Premium Design Restored)
        const userEmailResponse = await resend.emails.send({
            from: 'Trident Aviation Services <info@tasglobals.com>', // Verified domain address
            to: email,
            subject: 'Thank You for Your Inquiry - Trident Aviation Services',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                    <div style="background-color: #0A3D26; padding: 30px; text-align: center; color: white;">
                        <h1 style="margin: 0; font-size: 24px;">Trident Aviation Services</h1>
                    </div>
                    <div style="padding: 40px 30px; color: #1e293b; line-height: 1.6;">
                        <h2 style="color: #0A3D26; margin-top: 0;">Dear ${name},</h2>
                        <p>Thank you for reaching out to us. We have successfully received your inquiry and our team is already reviewing it.</p>
                        <p>Our specialists will get back to you shortly to discuss how we can best support your aviation needs.</p>
                        
                        <div style="background-color: #f8fafc; border-left: 4px solid #C5A059; padding: 20px; margin: 30px 0;">
                            <h3 style="margin-top: 0; color: #0A3D26;">Contact Details</h3>
                            <p style="margin: 5px 0;"><strong>Phone 1:</strong> +94 76 127 7254</p>
                            <p style="margin: 5px 0;"><strong>Phone 2:</strong> +855 93 712 761</p>
                            <p style="margin: 5px 0;"><strong>Email:</strong> info@tasglobals.com</p>
                            <a href="https://tasglobals.com" style="display: inline-block; background-color: #C5A059; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: bold; margin-top: 15px;">Visit Our Website</a>
                        </div>

                        <p>Best Regards,<br><strong>The Trident Aviation Team</strong></p>
                    </div>
                    <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #64748b; font-size: 13px;">
                        <p style="margin: 0;">SV35, Mao Tse Toung Blvd, Phnom Penh, Cambodia</p>
                        <p style="margin: 5px 0;">&copy; ${new Date().getFullYear()} Trident Aviation Services</p>
                    </div>
                </div>
            `,
        });

        // Log only on error — don't expose API responses in production logs

        // Check for Resend errors explicitly
        if (companyEmailResponse.error || userEmailResponse.error) {
            const error = companyEmailResponse.error || userEmailResponse.error;
            console.error('Resend specific error:', error);
            return NextResponse.json({ 
                error: error.message,
                details: error
            }, { status: 400 });
        }

        return NextResponse.json({ message: 'Emails sent successfully via Resend' }, { status: 200 });
    } catch (error) {
        console.error('Resend Error:', error);
        return NextResponse.json({ error: 'Failed to send emails via Resend' }, { status: 500 });
    }
}
