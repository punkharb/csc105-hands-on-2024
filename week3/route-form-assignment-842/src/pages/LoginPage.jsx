import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = () => navigate('/');

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-green-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
          <h2 className="text-xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <input {...register('email')} placeholder='Email' className="block w-full border rounded-md p-2" />
            {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}

            <input {...register('password')} placeholder='Password' type='password' className="block w-full border rounded-md p-2" />
            {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}

            <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>Login</button>

            <p onClick={() => navigate('/signup')} className='text-blue-500 cursor-pointer'>
              Don't have an account? Sign Up
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
