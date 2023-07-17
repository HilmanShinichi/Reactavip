/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
 

  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && 'bg-gray-900'}`}>
      <div className="w-full max-w-xs">
        <button 
        className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
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
