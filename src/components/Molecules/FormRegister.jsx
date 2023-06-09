// eslint-disable-next-line no-unused-vars
import React from 'react'
import InputForm from '../Atoms/InputForm'
import Button from '../Atoms/Button'

const FormRegister = () => {
  return (
    <form action="">
          <InputForm
            label="Fullname"
            htmlFor="fullname"
            placeholder="insert your name here..."
            name="fullname"
          />
          <InputForm
            label="Email"
            htmlFor="email"
            placeholder="example@mail.com"
            name="email"
          />
          <InputForm
            label="Password"
            htmlFor="password"
            placeholder="*********"
            name="password"
          />     
          <InputForm
            label="Confirm Password"
            htmlFor="password"
            placeholder="*********"
            name="password"
          />     
          <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
  )
}

export default FormRegister