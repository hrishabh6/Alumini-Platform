"use client"
import AuthForm from '@/components/Forms/AuthForm'
import { signIn } from '@/lib/actions/auth'
import { loginSchema } from '@/validations/schema'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-md mx-auto bg-gray-50 p-10'>
      
      <AuthForm type='SIGN_IN' schema={loginSchema} defaultValues={{email : "", password: ""}} onSubmit={signIn}/>
    </div>
  )
}

export default page
