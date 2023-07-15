import { useEffect, useState, useRef } from "react";
import Button from "../components/Atoms/Button";
import CardProduct from "../components/Molecules/CardProduct";
import CounterClass from "../components/Molecules/Counter.jsx";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";

// const products = [
//   {
//     id: 1,
//     image: "/public/images/shoes1.jpg",
//     name: "Sepatu Baru",
//     price: 900000,
//     desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
//     iusto dolor repellendus aliquid temporibus labore laudantium eum
//     deserunt, voluptas eos quisquam, quaerat consequatur eaque
//     voluptate nemo minus odio, provident quas.`,
//   },
//   {
//     id: 2,
//     image: "/public/images/shoes1.jpg",
//     name: "Sepatu Lama",
//     price: 500000,
//     desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
//   },
//   {
//     id: 3,
//     image: "/public/images/shoes1.jpg",
//     name: "Sepatu Hits",
//     price: 700000,
//     desc: `salah satu sepatu dari brand terkemuka adadong`,
//   },
// ];

const ProductPage = () => {
  const [Carts, setCarts] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [Product, setProduct] = useState([]);
  const [username, setUsername] = useState("");

  //didmount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) { 
      setUsername(getUsername(token));
    } else{
      window.location.href = "/login";
    }
    setCarts(JSON.parse(localStorage.getItem("Carts") || []));
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProduct(data);
    });
  }, []);

  //didupdate
  useEffect(() => {
    if (Product.length > 0 && Carts.length > 0) {
      const sum = Carts.reduce((acc, cart) => {
        const product = Product.find((product) => product.id === cart.id);
        return acc + product.price * cart.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("Carts", JSON.stringify(Carts));
    }
  }, [Carts, Product]);

  const handleLogout = () => {
    localStorage.removeItem("token");

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

  // useRef
  //  const CartsRef = useRef(JSON.parse(localStorage.getItem("Carts") || []));

  // const handleAddToCartRef = (id) => {
  //     CartsRef.current = [...CartsRef.current, {id, qty: 1}];
  //     localStorage.setItem("Carts", JSON.stringify(CartsRef.current))
  // }

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (Carts.length > 0) {
      totalPriceRef.current.style.diplay = "table-rows";
    } else {
      totalPriceRef.current.style.diplay = "none";
    }
  }, [Carts]);

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {username}
        <Button classname="bg-black ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5 ">
        <div className="w-4/6 flex flex-wrap gap-3">
          {Product.length > 0 &&
            Product.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.header image={product.image}></CardProduct.header>
                <CardProduct.body name={product.title}>
                  {product.description}
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
              {Product.length > 0 &&
                Carts.map((cart) => {
                  const product = Product.find(
                    (product) => product.id === cart.id
                  );
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
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <CounterClass />
      </div>
    </>
  );
};

export default ProductPage;
