import Image from 'next/image'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    const [Loading, setLoading] = useState(true)

    const { login, signup, currentUser } = useAuth()
    console.log(currentUser)

    async function submitHandler() {
        setLoading(true)
        if (!email || !password) {
            setError('Please enter email and password')
            return
        }
        if (isLoggingIn) {
            try {
                await login(email, password)
                setLoading(false)
            } catch (err) {
                setLoading(false)
                setError('Incorrect email or password')
            }
            return
        }
        await signup(email, password)
        setLoading(false)
    }

    return (
        <div className='gap-2 sm:gap-4 grid   tablet:grid-cols-1 tablet-laptop:grid-cols-2  '>
        <div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center  '>

            <h1 className='font-extrabold select-none text-2xl sm:text-4xl uppercase'>{isLoggingIn ? 'Login' : 'register'}</h1>
            {error && <div className='w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2'>{error}</div>}


            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300  p-2 w-full max-w-[40ch] bg-slate-900 text-white' />

            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='outline-none  p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300 bg-slate-900 text-white' />

            <button onClick={submitHandler} className='w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900 mt-5'>
                {!Loading?<>
                  <Box sx={{ display: 'flex' }} className="flex items-center justify-center text-xs relative z-20 "> 
                    <CircularProgress size={15} /> 
                </Box></>:                      
                <h2 className='relative z-20'>
                    SUBMIT
                </h2>}
                
            </button>
            <h2 className='duration-300 hover:scale-110 cursor-pointer mt-5' onClick={() => setIsLoggingIn(!isLoggingIn)}> { isLoggingIn ?<h3 className="text-xs text-cyan-300  mt-2 cursor-pointer" 
            > Dont have an account <span className='text-blue-600' >sign up </span> </h3>: <h3 className="text-xs text-white  mt-2 cursor-pointer" 
            > Already have an account <span className='text-blue-600' >sign in </span> </h3>}</h2>
        </div>
<img src="/votes.png" alt="V" width={1000} height={700} />
        </div>
    )
}
