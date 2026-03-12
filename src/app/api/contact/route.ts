import { NextRequest, NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { ContactSubmission } from '@/entities/ContactSubmission';

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters long.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long.' },
        { status: 400 }
      );
    }

    const dataSource = await getDataSource();
    const repo = dataSource.getRepository(ContactSubmission);

    const submission = repo.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    await repo.save(submission);

    return NextResponse.json(
      { success: true, message: 'Your message has been received! We will get back to you soon.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An internal server error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
