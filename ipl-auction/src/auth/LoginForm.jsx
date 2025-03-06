import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import {
    object,
    pipe,
    string,
    email,
    minLength,
    maxLength,
    regex,
} from 'valibot';
import { valibotResolver } from '@hookform/resolvers/valibot';

const LoginForm = () => {
    // login form hook
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: valibotResolver(
            object({
                email: pipe(
                    string(),
                    email('Invalid Email Address'),
                    minLength(
                        6,
                        'Email is too short, Minimum 6 Charecters Allowed.'
                    ),
                    maxLength(
                        56,
                        'Email is too long, Maximum 56 Characters Allowed.'
                    )
                ),
                password: pipe(
                    string(),
                    minLength(
                        8,
                        'Passwords must have at least 8 characters and contain at least a number or symbol.'
                    ),
                    maxLength(
                        48,
                        'Password is too long, Maximum 48 Characters Allowed.'
                    ),
                    regex(
                        /(?=.*[!@#$%^&*(),.?":{}|<>]|\d)/,
                        'Password must contain at least one special character or number'
                    )
                ),
            })
        ),
    });
    // Submited Data
    const SubmitLoginForm = (data) => {
        reset();
        console.info(data);
        //navigate('/');
    };
    return (
        <form
            onSubmit={handleSubmit(SubmitLoginForm)}
            className='flex-col flex items-center gap-y-4 w-full py-2'
        >
            <div className='relative w-[85%] group focus-within:border-secondary'>
                <label
                    htmlFor='email'
                    className='font-rubik-semibold pl-1 text-[1rem] text-white/85 uppercase tracking-wide'
                >
                    Email address
                </label>
                <input
                    type='email'
                    placeholder='mail@example.com'
                    id='email'
                    name='email'
                    autoComplete='email'
                    required
                    {...register('email')}
                    className='lowercase w-full pl-5 py-2.5 rounded-md placeholder-white/40 focus:placeholder-white/20 font-rubik-medium text-[1.1rem] text-white/85 bg-darkgrey border focus:outline-none focus:border-primary border-secondary tracking-wider mt-1.5'
                />
                {errors.email && (
                    <span className='text-red-600 text-[0.8rem] text-left font-poppins-medium-italic w-full'>
                        {errors.email.message}
                    </span>
                )}
            </div>
            <div className='relative w-[85%] group focus-within:border-secondary'>
                <label
                    htmlFor='password'
                    className='font-rubik-semibold pl-1 text-[1rem] uppercase tracking-wider text-white/85'
                >
                    Password
                </label>
                <input
                    type='password'
                    placeholder='use strong password'
                    id='password'
                    name='password'
                    autoComplete='new-password'
                    required
                    {...register('password')}
                    className='w-full pl-5 py-2.5 rounded-md placeholder-white/40 focus:placeholder-white/20 font-rubik-medium text-[1rem] text-white/85 bg-darkgrey border focus:outline-none focus:border-primary border-secondary tracking-wider'
                />
                {errors.password && (
                    <span className='text-red-600 text-[0.8rem] text-left font-poppins-medium-italic w-full'>
                        {errors.password.message}
                    </span>
                )}
            </div>
            <input
                type='submit'
                value='Login'
                className='text-lg font-poppins-semibold tracking-wider text-white active:bg-transparent
                                border-secondary bg-secondary border-[3px] rounded-lg px-3.5 py-2 w-[85%] transition-colors duration-150 ease-in-out'
            />
        </form>
    );
};

export default LoginForm;
