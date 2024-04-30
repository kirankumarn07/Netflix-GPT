import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[isSignInForm,setisSignInForm] =useState(true)
    const toggleSignInForm=()=>{
     setisSignInForm(!isSignInForm);
    }
  return (
    <div>
    <div className='absolute'>
        <Header/>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='Netfliximage'/>
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-60'>
        <h3 className='font-bold text-3xl py-4'>{isSignInForm? "Sign-In":"Sign-Up"}</h3>
        {
            !isSignInForm && (
                <input type='text' placeholder='UserName' className='p-2 m-2 w-full bg-sky-300'/>
            )
        }
          <input type='text'placeholder='Email address'className='p-2 m-2 w-full bg-gray-700'/><br/>
          <input type='password' placeholder='Password' className='p-2 m-2 w-full bg-gray-700'/>
          <button className='p-4 m-4 bg-red-500 rounded-lg hover:bg-red-700'>{isSignInForm? "LOGIN":"SUBMIT"}</button>
          <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm? "New to Netflix?Signup":"Already user"}
          </p>
    </form>
    </div>
  )
}

export default Login