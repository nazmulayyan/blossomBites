import { Link, useNavigate } from 'react-router-dom';
import loginBg from '../../assets//others/authentication.png';
import loginImg from '../../assets/others/authentication2.png';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SingUp = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);

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

    const navigate = useNavigate();

    const onSubmit = (data) => {

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const savedUser = {name: data.name, email: data.email}
                        fetch('https://blossom-bites-server-9yepjj7wt-nazmulayyan.vercel.app/users', {
                            method: 'POST',
                            headers:{
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)

                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Toast.fire({
                                        icon: 'success',
                                        title: 'user created successfully'
                                    });
                                    navigate('/')
                                }
                            })

                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
    }

    return (
        <div className="relative">
            <img className='bg-cover bg-no-repeat w-full h-fit' src={loginBg} alt="" />

            <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='md:flex items-center w-11/12 mx-auto mt-20'>

                    <div className='md:w-1/2 md:ml-12' >
                        <h4 className='text-center text-3xl font-semibold mb-5'>SING UP</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label className='text-xl font-semibold' htmlFor="email">Name</label> <br />

                            <input className='w-full border-2 border-gray-800 rounded-sm mt-2  py-2 px-4 outline-none' id='name' type="text" name='name' {...register("name", { required: true })} placeholder='please write your name' /><br />

                            {errors.name && <span className='text-red-500'>name is required</span>} <br />

                            <label className='text-xl font-semibold' htmlFor="photoURL">Photo URL</label> <br />

                            <input className='w-full border-2 border-gray-800 rounded-sm mt-2  py-2 px-4 outline-none' id='photoURL' type="text" name='photoURL' {...register("photoURL", { required: true })} placeholder='please write your name' /><br />

                            {errors.photoURL && <span className='text-red-500'>photoURL is required</span>} <br />

                            <label className='text-xl font-semibold' htmlFor="email">Email</label> <br />

                            <input className='w-full border-2 border-gray-800 rounded-sm mt-2 py-2 px-4 outline-none' id='email' type="email" name='email' {...register("email", { required: true })} placeholder='example@gmail.com' /><br />

                            {errors.email && <span className='text-red-500'>name is required</span>} <br />

                            <label className='text-xl font-semibold' htmlFor="password">password</label> <br />

                            <input className='w-full border-2 border-gray-800 rounded-sm mt-2 py-2 px-4 outline-none' id='password' type="password" name='password' {...register("password", { required: true, minLength: 6, maxLength: 12 })} placeholder='Password' /> <br />

                            {errors.password?.type === "required" && (
                                <p className='text-red-500'>password is required</p>
                            )} <br />


                            <input className='w-full  text-white font-semibold text-xl rounded-sm mt-3 py-2 px-4 bg-gray-800 cursor-pointer' type="submit" value='SING UP' />

                            <div className='flex my-5 text-yellow-600'><p>Already registered?</p> <Link className='font-semibold ml-2' to='/login'>Go to log in</Link></div>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>

                    <div className='md:w-1/2 '>
                        <img className='w-full' src={loginImg} alt="" />
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SingUp;