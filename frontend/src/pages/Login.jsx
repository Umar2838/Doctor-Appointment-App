import React, { useState,useContext } from 'react'
import {Link,useNavigate} from "react-router-dom"
import {BASE_URL} from "../../config.js" 
import { toast } from 'react-toastify'
import {authContext} from "../context/AuthContext.jsx"
import HashLoader from "react-spinners/HashLoader"
const Login = () => {
  const [formData,setFormData] = useState({
    email:"",
    password:""
  })

const [loading,setLoading] = useState(false)
const navigate = useNavigate()
const {dispatch} = useContext(authContext)
  const handleInputChange = (e) =>{
    setFormData({...formData , [e.target.name]:e.target.value})
  }

  const submitHandler = async (e) =>{
    e.preventDefault()
    setLoading(true)
    
    try{
    const res = await  fetch(`${BASE_URL}/auth/login`,{
      method:"post",
      headers:{
    'Content-Type':"application/json"
      },
      body:JSON.stringify(formData)
    })
    
    const result = await res.json()
    if(!res.ok){
      throw new Error(result.message)
    }

    dispatch({
      type:"LOGIN_SUCCESS",
      payload:{
        user:result.data,
        token:result.token,
        role:result.role
      }
    })
    console.log(result,"login data")

    setLoading(false)
    toast.success(result.message)
    navigate('/home')
    }
    catch(err){
    toast.error(err.message)
    setLoading(false)
    }
      }
    

  return (
<section className='w-full p-10 m-10 max-w-[570px] mx-auto rounded-lg shadow-md md:0-10' >
  <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 ' >Hello! <span className='text-primaryColor ' >Welcome</span>Back</h3>
<form className='py-4 md:py-0' onSubmit={submitHandler} >
  <div className='mb-5 mx-5 '>
    <input type='email' onChange={handleInputChange} required className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' placeholder='Enter your Email' value={formData.email} name='email' />
  </div>

  <div className='mb-5 mx-5'>
    <input type='password' onChange={handleInputChange} required className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' placeholder='Enter your Password' value={formData.password} name='password' />
  </div>

<div className='mt-7' >
  <button type='submit' className='w-full bg-primaryColor rounded-lg text-white text-[18px] leading-[30px] px-4 py-3' >{loading ? <HashLoader size={25} color="#ffffff" /> : 'Login' }</button>
</div>
<p className='mt-5 text-textColor text-center' >Don&apos;t have an account?<Link to="/register" className="text-primaryColor font-medium ml-1" >Register</Link></p>
</form>
</section>
  )
}

export default Login
