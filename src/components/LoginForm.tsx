import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

export interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

const schema = z.object({
  email: z.string().email(),
  password: z.string().regex(new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/))
})

export const LoginForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleFormValues = (data: any) => {
    console.log(data);
  } 
  
  return (
    <div className="iti-flex iti-flex-col iti-items-center iti-justify-center iti-mx-auto  lg:iti-py-0">
        <div className="iti-w-full iti-bg-white iti-rounded-lg iti-shadow dark:iti-border md:iti-mt-0 sm:iti-max-w-md xl:iti-p-0 dark:iti-bg-gray-800 dark:iti-border-gray-700">
            <div className="iti-p-6 iti-space-y-4 md:iti-space-y-6 sm:iti-p-8">
                <h1 className="iti-text-xl iti-font-bold iti-leading-tight iti-tracking-tight iti-text-center iti-text-gray-900 md:iti-text-2xl dark:iti-text-white">
                    Login
                </h1>
                <form onSubmit={handleSubmit(handleFormValues)} className="iti-space-y-4 md:iti-space-y-6" action="#">
                    <div>
                        <label htmlFor="email" className="iti-block iti-mb-2 iti-text-sm iti-font-medium iti-text-gray-900 dark:iti-text-white">Email</label>
                        <input id="email" className="iti-bg-gray-50 iti-border iti-border-gray-300 iti-text-gray-900 iti-rounded-lg focus:iti-ring-blue-600 focus:iti-border-blue-600 iti-block iti-w-full iti-p-2.5 dark:iti-bg-gray-700 dark:iti-border-gray-600 dark:iti-placeholder-gray-400 dark:iti-text-white dark:focus:iti-ring-blue-500 dark:focus:iti-border-blue-500" placeholder="Enter Your Email" {...register('email')} />
                        {errors.email?.message && <p className="iti-text-red-500 iti-text-xs iti-italic">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="iti-block iti-mb-2 iti-text-sm iti-font-medium iti-text-gray-900 dark:iti-text-white">Password</label>
                        <input id="password" type="password" className="iti-bg-gray-50 iti-border iti-border-gray-300 iti-text-gray-900 iti-rounded-lg focus:iti-ring-blue-600 focus:iti-border-blue-600 iti-block iti-w-full iti-p-2.5 dark:iti-bg-gray-700 dark:iti-border-gray-600 dark:iti-placeholder-gray-400 dark:iti-text-white dark:focus:iti-ring-blue-500 dark:focus:iti-border-blue-500" placeholder="••••••••" {...register('password')} />
                        {errors.password?.message && <p className="iti-text-red-500 iti-text-xs iti-italic">{errors.password.message}</p>}
                    </div>
                    <div className="iti-flex iti-items-center iti-justify-between">
                        <div className="iti-flex iti-items-start">
                            <div className="iti-flex iti-items-center iti-h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="iti-w-4 iti-h-4 iti-border iti-border-gray-300 iti-rounded iti-bg-gray-50 focus:iti-ring-3 focus:iti-ring-blue-300 dark:iti-bg-gray-700 dark:iti-border-gray-600 dark:focus:iti-ring-blue-600 dark:iti-ring-offset-gray-800" {...register('remember')} />
                            </div>
                            <div className="iti-ml-3 iti-text-sm">
                              <label htmlFor="remember" className="iti-text-gray-500 dark:iti-text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="iti-text-sm iti-font-medium iti-text-blue-600 hover:iti-underline dark:iti-text-blue-500">Forgot password?</a>
                    </div>
                    <button type="submit" className="iti-w-full iti-text-white iti-bg-blue-600 hover:iti-bg-blue-700 focus:iti-ring-4 focus:iti-outline-none focus:iti-ring-blue-300 iti-font-medium iti-rounded-lg iti-text-sm iti-px-5 iti-py-2.5 iti-text-center dark:iti-bg-blue-600 dark:hover:iti-bg-blue-700 dark:focus:iti-ring-blue-800">Sign in</button>
                    <p className="iti-text-sm iti-font-light iti-text-gray-500 dark:iti-text-gray-400">
                        Don’t have an account yet? <a href="#" className="iti-font-medium iti-text-blue-600 hover:iti-underline dark:iti-text-blue-500">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  )
}
