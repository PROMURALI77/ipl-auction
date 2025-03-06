import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { object, pipe,string, email, minLength, maxLength, regex } from 'valibot';
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
    return <div>LoginForm</div>;
};

export default LoginForm;
