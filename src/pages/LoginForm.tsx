import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import type { User } from '../types/user';
import { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';

export interface FormData {
  username: string;
  password: string;
  remember: boolean;
}

const schema = z.object({
  username: z.string().min(3),
  password: z.string()
})

export const LoginForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { setToken, setRefreshToken } = useContext(AppContext)

  const mutation = useMutation({
    mutationKey: ['userAuth'],
    mutationFn: async (data: any) => {
      return (await axios.post('https://dummyjson.com/auth/login', {...data, expiresInMins: 1})).data
    }
  })
  
  const handleFormValues = (data: any) => {
    mutation.mutate(data);
  } 

  useEffect(() => {
    if(mutation.data) {
      setToken(mutation.data.token);
      setRefreshToken(mutation.data.refreshToken);
    }
  }, [ mutation.data ])
  
  return (
    <div className="iti-flex iti-flex-col iti-items-center iti-justify-center iti-mx-auto  lg:iti-py-0">
        <div className="iti-w-full iti-bg-white iti-rounded-lg iti-shadow dark:iti-border md:iti-mt-0 sm:iti-max-w-md xl:iti-p-0 dark:iti-bg-gray-800 dark:iti-border-gray-700">
            <div className="iti-p-6 iti-space-y-4 md:iti-space-y-6 sm:iti-p-8">
                <h1 className="iti-text-xl iti-font-bold iti-leading-tight iti-tracking-tight iti-text-center iti-text-gray-900 md:iti-text-2xl dark:iti-text-white">
                    Login
                </h1>
                <p className="iti-text-red-500 iti-text-xs iti-italic">{mutation.error?.message}</p>
                <form onSubmit={handleSubmit(handleFormValues)} className="iti-space-y-4 md:iti-space-y-6" action="#">
                    <div>
                        <label htmlFor="username" className="iti-block iti-mb-2 iti-text-sm iti-font-medium iti-text-gray-900 dark:iti-text-white">Username</label>
                        <input id="username" className="form-input" placeholder="Enter Your username" {...register('username')} />
                        {errors.username?.message && <p className="iti-text-red-500 iti-text-xs iti-italic">{errors.username.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="iti-block iti-mb-2 iti-text-sm iti-font-medium iti-text-gray-900 dark:iti-text-white">Password</label>
                        <input id="password" type="password" className="form-input" placeholder="••••••••" {...register('password')} />
                        {errors.password?.message && <p className="iti-text-red-500 iti-text-xs iti-italic">{errors.password.message}</p>}
                    </div>
                    <div className="iti-flex iti-items-center iti-justify-between">
                        <div className="iti-flex iti-items-start">
                            <div className="iti-flex iti-items-center iti-h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="check-login" {...register('remember')} />
                            </div>
                            <div className="iti-ml-3 iti-text-sm">
                              <label htmlFor="remember" className="iti-text-gray-500 dark:iti-text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="iti-text-sm iti-font-medium iti-text-blue-600 hover:iti-underline dark:iti-text-blue-500">Forgot password?</a>
                    </div>
                    <button type="submit" className="submit-login">Sign in</button>
                    <p className="iti-text-sm iti-font-light iti-text-gray-500 dark:iti-text-gray-400">
                        Don’t have an account yet? <a href="#" className="iti-font-medium iti-text-blue-600 hover:iti-underline dark:iti-text-blue-500">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  )
}
