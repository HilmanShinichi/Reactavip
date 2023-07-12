import { useEffect, useRef } from "react";
import Button from "../Atoms/Button";
import InputForm from "../Atoms/InputForm";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/product";
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  },[])

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        htmlFor="email"
        placeholder="example@mail.com"
        name="email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        htmlFor="password"
        placeholder="*********"
        name="password"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
