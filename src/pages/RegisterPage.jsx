import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormRegister from '../components/Molecules/FormRegister'


const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
        <FormRegister/>
    </AuthLayouts>
  )
}

export default RegisterPage