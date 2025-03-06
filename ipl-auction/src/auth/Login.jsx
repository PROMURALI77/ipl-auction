import LoginForm from './LoginForm';
import { LoginProvider } from '../context/LoginContext';

const Login = () => {
    return (
        <div className='bg-darkgrey'>
            <div className='flex items-center justify-center h-screen'>
                <div className='bg-litegrey flex flex-col w-1/3 h-[23.5rem] rounded-xl'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-white font-rubik-semibold text-2xl p-2 mt-2.5 tracking-wide'>ADMIN LOGIN</h1>
                </div>
                    <LoginProvider>
                        <LoginForm />
                    </LoginProvider>
                </div>
            </div>
        </div>
    );
};

export default Login;
