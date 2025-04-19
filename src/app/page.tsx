import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { logout } from '@/services/api';

export default function Home() {
  const handleLogout = async () => {
    
      const token = cookies().get('authToken')?.value;

      if(token){
        try{
          await logout(token)
        } catch (error){
          console.error(error)
        }
        redirect('/login');
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
