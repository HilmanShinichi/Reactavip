/* eslint-disable react/no-unescaped-entities */

import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormLogin from '../components/Molecules/FormLogin'

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
        <FormLogin/>
    </AuthLayouts>
  )
}
  
export default LoginPage