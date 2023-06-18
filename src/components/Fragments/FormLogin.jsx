
import Button from '../Atoms/Button'
import InputForm from '../Atoms/InputForm'


const FormLogin = () => {
  return (
    <form action="">
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
          <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
  )
}

export default FormLogin