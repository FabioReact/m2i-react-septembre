import React, { useContext, useRef } from 'react'
import { AuthContext } from '../context/auth-context'
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().required().email().min(8).max(30).trim(),
  password: yup.string().required().min(8).max(26).trim(),
})

const Login = () => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const { connected, email, role, login } = useContext(AuthContext)

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('email', emailInputRef.current?.value)
    console.log('Password', passwordInputRef.current?.value)
    schema
      .validate(
        {
          email: emailInputRef.current?.value,
          password: passwordInputRef.current?.value,
        },
        {
          abortEarly: false,
        },
      )
      .then(() => {
        login(emailInputRef.current?.value as string, 'ADMIN')
      })
      .catch((error) => {
        console.log(error.errors)
      })
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>Sign in</h1>
      <label htmlFor='email'>Email</label>
      <input ref={emailInputRef} type='email' id='email' name='email' />
      <label htmlFor='password'>Password</label>
      <input ref={passwordInputRef} type='password' id='password' name='password' />
      <button>Login</button>
      <p>Connected: {connected.toString()}</p>
      <p>email: {email}</p>
      <p>role: {role}</p>
    </form>
  )
}

export default Login
