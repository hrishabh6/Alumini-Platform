"use client"
import AuthForm from '@/components/Forms/AuthForm'
import { signUpOrSignIn } from '@/lib/actions/auth'
import { loginSchema } from '@/validations/schema'
import React from 'react'

const page = () => {
  return (
    <div>
      <AuthForm type='SIGN_IN' schema={loginSchema} defaultValues={{email : "", password: ""}} onSubmit={signUpOrSignIn}/>
    </div>
  )
}

export default page
