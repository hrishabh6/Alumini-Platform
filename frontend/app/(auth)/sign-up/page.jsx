"use client"
import AuthForm from '@/components/Forms/AuthForm'
import { signUp } from '@/lib/actions/auth'
import { signUpSchema } from '@/validations/schema'
import React, { useEffect } from 'react'

const page = () => {
  
  return (
    <div className='max-w-md mx-auto bg-gray-50 p-10'>
      <AuthForm type='SIGN_UP' schema={signUpSchema} defaultValues={{fullName : "", email : "", password: ""}} onSubmit={signUp}/>
    </div>
  )
}

export default page
