'use client';

import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {loginAction} from '@/lib/actions';
import {useRouter} from 'next/navigation';
import {useToast} from '@/hooks/use-toast';

const loginSchema = z.object({
  username: z.string().min(2, {
    message: 'Please enter a valid username',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

export default function LoginPage() {
  const router = useRouter();
  const {toast} = useToast();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      const {success, message} = await loginAction(values.username, values.password);
      if (success) {
        toast({
          title: 'Login successful',
          description: message || 'Redirecting...',
        });
        router.push('/');
      } else {
        toast({
          variant: 'destructive',
          title: 'Login failed',
          description: message || 'Invalid credentials.',
        });
      }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Login failed',
        description: error.message || 'An error occurred during login.',
      });
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Login</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

