import { useSelector, } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Atoms/Button";
import { useEffect, useState, useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.Carts.data);

    useEffect(() => {
        const sum = cart.reduce((acc, cart) => {
            return acc + cart.qty;
        }, 0)
        setTotalCart(sum);
    })
    const handleLogout = () => {
        localStorage.removeItem("token");
    
        window.location.href = "/login";
      };


  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      {username}
      <Button classname="bg-black ml-5" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        {totalCart}
      </div>
      <button 
        className="bg-black px-10 mx-5 right-2 top-2  p-2 text-white rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
};

export default Navbar;
