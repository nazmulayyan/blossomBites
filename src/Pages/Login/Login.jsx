import { useContext, useEffect, useState } from 'react';
import loginBg from '../../assets//others/authentication.png';
import loginImg from '../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Toast.fire({
                    icon: 'success',
                    title: 'user logged in successfully'
                });
                navigate(from, {replace: true});
            })
    };

    const handleValidateCaptcha = (event) => {
        const userCaptchaValue = event.target.value;
        setIsCaptchaValid(validateCaptcha(userCaptchaValue));
    };
    

    return (
        <div className="relative">
            <img className='bg-cover bg-no-repeat w-full h-screen' src={loginBg} alt="" />

            <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <div className='md:flex items-center w-11/12 mx-auto mt-20'>
                    <div className='md:w-1/2 '>
                        <img className='w-full' src={loginImg} alt="" />
                    </div>
                    <div className='md:w-1/2 md:ml-12' >
                        <h4 className='text-center text-3xl font-semibold mb-5'>login</h4>
                        <form onSubmit={handleLogin}>
                            
                            <label className='text-xl font-semibold' htmlFor="email">Email</label> <br />

                            <input className='w-full border-2 border-gray-800 rounded-sm mt-2 mb-3 py-2 px-4 outline-none' id='email' type="email" name='email' placeholder='example@gmail.com' /><br />

                            <label className='text-xl font-semibold' htmlFor="password">password</label> <br />

                            <input className='w-full border-2 border-gray-800 rounded-sm mt-2 mb-3 py-2 px-4 outline-none' id='password' type="password" name='password' placeholder='Password' /> <br />

                            <div className='w-full border-2 border-gray-800 rounded-sm mt-2 mb-3 py-2 px-4 outline-none'>
                                <LoadCanvasTemplate />
                            </div>

                            <div className='relative'>
                                <input onBlur={handleValidateCaptcha} className='w-full border-2 border-gray-800 rounded-sm mt-2 mb-3 py-2 px-4 outline-yellow-500 ' type="text" name='captcha' placeholder='Type Above The Text' />
                                
                            </div>

                            <input disabled={!isCaptchaValid} className={`w-full  text-white font-semibold text-xl rounded-sm mt-3 py-2 px-4 ${!isCaptchaValid ? 'bg-gray-200' : 'bg-gray-800 cursor-pointer'}`} type="submit" value='LOGIN' />

                        </form>
                        <div className='flex my-5 text-yellow-600'><p>New here? </p> <Link className='font-semibold ml-2' to='/singup'>Create a New Account</Link></div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
