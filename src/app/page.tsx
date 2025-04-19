'use client';

import {logoutAction} from '@/lib/actions';
import {useRouter} from 'next/navigation';
import {useToast} from '@/hooks/use-toast';
import {LocationDirectory} from '@/components/location-directory';
import AIMarketingTool from '@/components/ai-marketing-tool';
import {Input} from '@/components/ui/input';
import {useEffect, useState} from 'react';

export default function Home() {
  const router = useRouter();
  const {toast} = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Check if token exists in localStorage
    setIsAuthenticated(!!token);
  }, []);

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
    <main className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome to Zenith Spa Directory!</h1>
        {isAuthenticated && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <Input type="text" placeholder="Search for spas..." className="w-full" />
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-secondary text-secondary-foreground rounded-lg p-4">Jobs</div>
          <div className="bg-secondary text-secondary-foreground rounded-lg p-4">Real Estate</div>
          <div className="bg-secondary text-secondary-foreground rounded-lg p-4">Vehicles</div>
          <div className="bg-secondary text-secondary-foreground rounded-lg p-4">Services</div>
          {/* Add more categories as needed */}
        </div>
      </div>

      {/* AI Marketing Tool */}
      <div className="mb-8">
        <AIMarketingTool />
      </div>

      {/* Location Directory */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Spa Locations</h2>
        <LocationDirectory />
      </div>
    </main>
  );
}
