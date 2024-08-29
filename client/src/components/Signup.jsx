import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
const Signup = () => {
  const[formData,setFormData]=useState({});

  async function handleClick(e){
    e.preventDefault();
    const {password1:password1,password2:password2}=formData;

    try {
      const {username:username,email:email,password:password}=formData;

      if(password1===password2){
        const response = await fetch("/api/user/signup/", {
          method: "POST",
          body: JSON.stringify({ username: username,email:email,password:password1 }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if(response.ok){
          toast.success('User Registered Successfully...', {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
      }
      else{
        throw new error(e);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleOnChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    })
    console.log(formData)
  }
  return (
    <div className='flex mx-auto max-w-full justify-center mt-10 '>
        <div className="w-2/6 rounded-xl bg-slate-400 p-3">
            <h2 className='text-2xl font-extrabold text-center pb-3'>Sign Up</h2>
            <form className='flex flex-col gap-4 ' action="">
                <input className='rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300' onChange={handleOnChange} id='username' type="text" autoComplete="off" placeholder='Username' />
                <input className='rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300' onChange={handleOnChange} id='email' autoComplete="off" type="mail" placeholder='E-mail' />
                <input className='rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300' onChange={handleOnChange} id='password1' type="password" placeholder='Password' />
                <input className='rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300' onChange={handleOnChange} id='password2' type="password" placeholder='Re-type Password' />
                <button  className='rounded-lg p-2 hover:opacity-75 uppercase bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-white font-bold shadow-lg' onClick={handleClick} type='submit'>Sign Up</button>
            </form>
            <p className='p-2'>Already Have an Account ?
                <span>click here </span>
                <Link>
                <span className='text-blue-500'>
                Sign In    
                </span>
                </Link>
            </p>
        </div>
    </div>
  )
}

export default Signup
