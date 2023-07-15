import { useEffect, useRef, useState } from "react";
import Button from "../Atoms/Button";
import InputForm from "../Atoms/InputForm";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const [loginSucces, setLoginSuccess] = useState("");
  console.log(loginSucces)


  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/product";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    login (data, async(status, res) => {
      if(status){
       await localStorage.setItem("token", res);
       setLoginSuccess("login sukses")
       setLoginFailed("");
    
       setTimeout(() => {
        window.location.href = "/products";
      }, 2000);
      
      }else{
        await setLoginFailed(res.response.data);
        setLoginSuccess("");
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  },[])

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="username"
        htmlFor="username"
        placeholder="username"
        name="username"
        ref={usernameRef}
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
      {loginFailed !== "" ? (
  <p className="text-red-500 text-sm text-center mt-5">{loginFailed}</p>
) : (
  <p className="text-green-500 text-sm text-center mt-5">{loginSucces}</p>
)}
      
    </form>
  );
};

export default FormLogin;
