import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormLogin from '../components/Fragments/FormLogin'
import FormRegister from '../components/Fragments/FormRegister'

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
        <FormRegister/>
    </AuthLayouts>
  )
}

export default RegisterPage