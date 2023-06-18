/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title, type } = props;

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        {type === "register" ? (
          <p className="text-sm my-5   text-center">
            have a account?{" "}
            <Link to={"/login"} className="font-bold text-blue-600">
              Login
            </Link>
          </p>
        ) : (
          <p className="text-sm my-5   text-center">
            Don't have a account?{" "}
            <Link to={"/register"} className="font-bold text-blue-600">
              Register
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthLayouts;
