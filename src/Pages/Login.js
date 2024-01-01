import React from 'react'
import Logo from '../assets/Images/Logo.png'
import { Ripple, initTE } from "tw-elements";
initTE({ Ripple });
function Login() {
    return (
        <div className='w-full h-[100vh]'>
            <div className='flex'>
                <div className="bg-hero-pattern w-1/2 h-[100vh]  ">

                </div>
                <div className='w-1/2 bg-slate-100 h-[100vh] flex items-center justify-center'>
                    <div className='flex-col justify-center w-[26rem] h-[24rem] bg-white rounded-md shadow-md '>
                        <div className='flex justify-center px-8'>
                            <img src={Logo} className=' h-[8rem]' />
                        </div>
                        <div className=' px-16 flex-col space-y-2 h-[12rem]'>
                            <div className='border-b border-black'>

                                <div className='tracking-widest font-semibold text-1xl' htmlFor='user'>
                                    Usuário
                                </div>
                                <input
                                    className='p-2 w-full'
                                    name='user'
                                    type='text'
                                    id='user'

                                />
                            </div>
                            <div className='border-b border-black'>

                                <div className='tracking-widest font-semibold text-1xl' htmlFor='password'>
                                    Senha
                                </div>
                                <input
                                    className='p-2 w-full'
                                    name='password'
                                    type='password'
                                    id='password'

                                />
                            </div>

                        </div>


                        <button
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className='w-full bg-[#58D5D3] h-[4rem] rounded-b-md flex justify-center items-center  select-none tracking-widest text-2xl text-[#111111] uppercase hover:text-black hover:bg-[#58D5D3]/90'
                        >
                            Fazer Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login