import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='flex mx-auto max-w-full justify-center mt-10 '>
        <div className="w-2/6 rounded-xl bg-slate-400 p-3">
            <h2 className='text-2xl font-extrabold text-center pb-3'>Sign In</h2>
            <form className='flex flex-col gap-4 ' action="">
                <input className='rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300' type="mail" placeholder='E-mail' />
                <input className='rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300' type="password" placeholder='Password' />
                <button  className='rounded-lg p-2 hover:opacity-75 uppercase bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-white font-bold shadow-lg' type='submit'>Sign In</button>
            </form>
            <p className='p-2'>Not Registered? 
                <span>click here </span>
                <Link to='/signup'>
                <span className='text-blue-500'>
                Sign Up 
                </span>
                </Link>
            </p>
        </div>
    </div>
  )
}

export default Signin
