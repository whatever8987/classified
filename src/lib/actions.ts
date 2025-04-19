'use server';

import {loginApi, logoutApi, registerApi} from '@/services/api';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

const AUTH_TOKEN_KEY = 'authToken';

export async function loginAction(username: string, password: string): Promise<{ success: boolean; message?: string }> {
  try {
    const data = await loginApi(username, password);

    cookies().set(AUTH_TOKEN_KEY, data.token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production', // Consider setting secure only in production
      // maxAge: 60 * 60 * 24 * 7, // Example: 7 days
      path: '/',
    });

    return {success: true, message: 'Login successful'};
  } catch (error: any) {
    console.error('Login failed:', error);
    return {success: false, message: error.message || 'Login failed'};
  }
}

export async function registerAction(email: string, username: string, password: string): Promise<{ success: boolean; message?: string }> {
  try {
    await registerApi(email, username, password);
    return {success: true, message: 'Registration successful'};
  } catch (error: any) {
    console.error('Registration failed:', error);
    return {success: false, message: error.message || 'Registration failed'};
  }
}

export async function logoutAction() {
  try {
    const token = cookies().get(AUTH_TOKEN_KEY)?.value;
    if (token) {
      await logoutApi(token);
    }
    cookies().delete(AUTH_TOKEN_KEY);
    redirect('/login');
  } catch (error: any) {
    console.error('Logout failed:', error);
    // Optionally handle the error, e.g., show a notification
  }
}

