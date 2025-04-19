
import { redirect } from 'next/navigation';
import { login } from '@/services/api';

export default async function LoginPage() {
  
    async function handleSubmit(formData: FormData) {
        'use server';
    
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;
    
        try {
            await login(username, password);
            redirect('/');
        } catch (error) {
            console.error('Login failed:', error);
            
            
        }
    }

    return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form action={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name='username'
              placeholder="Username"
              
              
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name='password'
              type="password"
              placeholder="Password"
              required
            />
            <a href='/register'>Register</a>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}