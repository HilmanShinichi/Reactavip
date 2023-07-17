import { useState, useEffect, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const TableCart = (props) => {
  const { isDarkMode } = useContext(DarkMode)
  // eslint-disable-next-line react/prop-types
  const { Products } = props;
  const Carts = useSelector((state) => state.Carts.data);
  const [TotalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (Products.length > 0 && Carts.length > 0) {
      const sum = Carts.reduce((acc, cart) => {
        const product = Products.find((product) => product.id === cart.id);
        return acc + product.price * cart.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("Carts", JSON.stringify(Carts));
    }
  }, [Carts, Products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (Carts.length > 0) {
      totalPriceRef.current.style.diplay = "table-rows";
    } else {
      totalPriceRef.current.style.diplay = "none";
    }
  }, [Carts]);

  return (
    <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {Products.length > 0 &&
          Carts.map((cart) => {
            const product = Products.find((product) => product.id === cart.id);
            return (
              <tr key={cart.id}>
                <td>{product.title}</td>
                <td>
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
                <td>{cart.qty}</td>
                <td>
                  {(cart.qty * product.price).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={3}>
            <b>Total price </b>
          </td>
          <td>
            <b>
              {TotalPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
