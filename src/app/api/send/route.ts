import process from 'node:process'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import z from 'zod'

import { EmailTemplate } from '@/components/templates/email'
import { CONTACT_FORM_EMAILS, EVENT_YEAR } from '@/content/constants'

const contactRequestSchema = z.object({
  fullName: z.string().trim().min(1).max(255),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(255),
  message: z.string().trim().min(1).max(255),
})

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 503 },
      )
    }

    const resend = new Resend(apiKey)

    const parsedBody = contactRequestSchema.safeParse(await request.json())
    if (!parsedBody.success) {
      return NextResponse.json(
        { error: 'Invalid contact form submission.' },
        { status: 400 },
      )
    }
    const body = parsedBody.data

    // Send email to team
    const emailToTeam = await resend.emails.send({
      from: `${body.fullName} <${CONTACT_FORM_EMAILS.FORM_SUBMISSION_EMAIL}>`,
      to: CONTACT_FORM_EMAILS.TEAM_EMAIL,
      subject: body.subject,
      react: EmailTemplate({ message: body.message, toTeam: true }),
      text: '',
      reply_to: body.email,
    })

    // If email to team is successful, send confirmation email to sender
    if (emailToTeam.data?.id) {
      await resend.emails.send({
        from: `SPAC ${EVENT_YEAR} Team <${CONTACT_FORM_EMAILS.FORM_SUBMISSION_EMAIL}>`,
        to: body.email,
        subject: `SPAC ${EVENT_YEAR} - Thank you for your message!`,
        react: EmailTemplate({
          fullName: body.fullName,
          subject: body.subject,
          message: body.message,
          toTeam: false,
        }),
        text: '',
        reply_to: CONTACT_FORM_EMAILS.TEAM_EMAIL,
      })
    }

    // Return success response
    return NextResponse.json(emailToTeam)
  }
  catch (error) {
    // Log and return error response
    console.error('Error sending email:', error)
    return NextResponse.json({ error })
  }
}
