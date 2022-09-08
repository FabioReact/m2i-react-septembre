import React, { useContext, useRef } from 'react'
import { AuthContext } from '../context/auth-context'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

const LoginHookForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const { connected, email, role, login } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmitHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h1>Sign in</h1>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        {...register('email', {
          required: true,
          minLength: 8,
          maxLength: 30,
        })}
      />
      {errors.email && <p className='text-red-600'>{errors.email?.message}</p> }
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        {...register('password', {
          required: true,
          minLength: 8,
          maxLength: 30,
        })}
      />
      <button>Login</button>
      <p>Connected: {connected.toString()}</p>
      <p>email: {email}</p>
      <p>role: {role}</p>
    </form>
  )
}

export default LoginHookForm
