'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import nodemailer from 'nodemailer';
import prisma from '../lib/db';
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { EmailNotVerifiedError } from '../errors';
import { SignupFormSchema, FormState } from '../lib/definitions';
import { isRedirectError } from 'next/dist/client/components/redirect';

const member = await prisma.member;


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    // First check if user exists and email is verified
    const user = await prisma.member.findFirst({
      where: { email },
    });

    // If user doesn't exist, we'll let the credential check handle the error
    if (user && !user.emailVerifiedAt) {
      throw new EmailNotVerifiedError(`EMAIL_NOTVERIFIED:${email}`);
    }

    // Only proceed with sign in if email is verified or user doesn't exist
    const result = await signIn('credentials', { redirect: false, email, password })

    if(result?.ok){
      return 'SUCCESS';
    }

    return 'Invalid credentials.';
    


  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    if (error instanceof EmailNotVerifiedError) {
      return error?.message;
    }
    if(isRedirectError(error)){
      console.error(error);
      throw error;
    }
  } finally {
    redirect('/dashboard')
  }
}


const signUpSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(3).max(255),
});

interface SignUpFormState {
  errors: {
    name?: string[];
    email?: string [];
    password?: string[];
    _form?: string[];
  };
}

export async function signUp(
  state: SignUpFormState | undefined,
  formData: FormData
): Promise<SignUpFormState | undefined> {
  // If no state is provided, initialize with empty errors
  const currentState: SignUpFormState = state || { errors: {} };

  const result = signUpSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const isEmailExist = await findUserByEmail(result.data.email);
  if (isEmailExist) {
    return {
      errors: {
        email: ['Email already exists'],
      },
    };
  }

  const hashed = await generatePasswordHash(result.data.password);
  const verificationToken = generateEmailVerificationToken();

  try {
    const user = await prisma.member.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        password: hashed,
        emailVerifToken: verificationToken,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ['Something went wrong'],
        },
      };
    }
  }
  
  await sendVerificationEmail(result.data.email, verificationToken);
  redirect(`/email/verify/send?email=${result.data.email}&verification_sent=1`);
}

export async function logout() {
  return await signOut();
}

export const findUserByEmail = async (email: string) => {
  return await prisma.member.findFirst({
    where: {
      email,
    },
  });
};

const generatePasswordHash = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const generateEmailVerificationToken = () => {
  return randomBytes(32).toString('hex');
};

const sendVerificationEmail = async (email: string, token: string) => {
  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 0,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    },
  });

  const emailData = {
    from: '"Blog Nextjs Auth" <verification@test.com>',
    to: email,
    subject: 'Email Verification',
    html: `
      <p>Click the link below to verify your email:</p>
      <a href="http://localhost:3000/email/verify?email=${email}&token=${token}">Verify Email</a>
    `,
  };
  
  try {
    await transporter.sendMail(emailData);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

export const resendVerificationEmail = async (email: string) => {
  const emailVerficationToken = generateEmailVerificationToken();

  try {
    await prisma.member.update({
      where: {email},
      data: { emailVerifToken: emailVerficationToken }
    });

    await sendVerificationEmail(email, emailVerficationToken);
  } catch (error) {
    return "something went wrong.";
  }
  return "Email verification sent.";
};

export const verifyEmail = async (email: string) => {
  'use server';

  return await prisma.member.update({
    where: { email },
    data: {
      emailVerifiedAt: new Date(),
      emailVerifToken: null,
    },
  });
};

export const isUsersEmailVerified = async (email: string) => {
  const user = await prisma.member.findFirst({
    where: { email },
  });
  
  // If no user found, we should return false or throw an error
  // depending on your application's needs
  if (!user) {
    return false; // or throw new Error('User not found');
  }
  
  if (!user.emailVerifiedAt) {
    throw new EmailNotVerifiedError(`EMAIL_NOTVERIFIED:${email}`);
  }

  return true;
};