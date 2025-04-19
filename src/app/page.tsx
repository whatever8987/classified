'use client';

import {logoutAction} from '@/lib/actions';
import {useRouter} from 'next/navigation';
import {useToast} from '@/hooks/use-toast';

export default function Home() {
  const router = useRouter();
  const {toast} = useToast();

  const handleLogout = async () => {
    try {
      await logoutAction();
      toast({
        title: 'Logout successful',
        description: 'Redirecting to login page...',
      });
      router.push('/login');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Logout failed',
        description: error.message || 'An error occurred during logout.',
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-3xl font-bold mb-6">Welcome to the main page!</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </main>
  );
}
