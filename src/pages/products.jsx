import { useEffect, useState } from "react";
import Button from "../components/Atoms/Button";
import CardProduct from "../components/Molecules/CardProduct";
import CounterClass from "../components/Molecules/Counter.jsx";

const products = [
  {
    id: 1,
    image: "/public/images/shoes1.jpg",
    name: "Sepatu Baru",
    price: 900000,
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
    iusto dolor repellendus aliquid temporibus labore laudantium eum
    deserunt, voluptas eos quisquam, quaerat consequatur eaque
    voluptate nemo minus odio, provident quas.`,
  },
  {
    id: 2,
    image: "/public/images/shoes1.jpg",
    name: "Sepatu Lama",
    price: 500000,
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    image: "/public/images/shoes1.jpg",
    name: "Sepatu Hits",
    price: 700000,
    desc: `salah satu sepatu dari brand terkemuka adadong`,
  },
];
const email = localStorage.getItem("email");

const ProductPage = () => {
  const [Carts, setCarts] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);

  //didmount
  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("Carts") || [] ));
  }, []);

  //didupdate
  useEffect(() => {
    if(Carts.length > 0){
      const sum = Carts.reduce((acc, cart) => {
        const product = products.find((product) => product.id === cart.id);
        return acc + product.price * cart.qty;
       
      }, 0);
      setTotalPrice(sum);
     localStorage.setItem("Carts", JSON.stringify(Carts))
    }
  }, [Carts]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (productId) => {
    if (Carts.find((cart) => cart.id === productId)) {
      setCarts(
        Carts.map((cart) =>
          cart.id === productId ? { ...cart, qty: cart.qty + 1 } : cart
        )
      );
    } else {
      setCarts([...Carts, { id: productId, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="bg-black ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5 ">
        <div className="w-4/6 flex flex-wrap gap-3">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.header image={product.image}></CardProduct.header>
              <CardProduct.body name={product.name}>
                {product.desc}
              </CardProduct.body>
              <CardProduct.footer
                price={product.price}
                productId={product.id}
                handleAddToCart={handleAddToCart}
              ></CardProduct.footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl text-blue-600 font-bold ml-5 mb-2">Cart</h1>

          <table className="text-left table-auto border-separate border-spacing-x-5 ">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {Carts.map((cart) => {
                const product = products.find(
                  (product) => product.id === cart.id
                );
                return (
                  <tr key={cart.id}>
                    <td>{product.name}</td>
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
              <tr>
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
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <CounterClass />
      </div>
    </>
  );
};

export default ProductPage;
