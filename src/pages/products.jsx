import { useEffect, useState, useContext } from "react";
import CardProduct from "../components/Molecules/CardProduct";
import CounterClass from "../components/Molecules/Counter.jsx";
import { getProducts } from "../services/product.service";
import TableCart from "../components/Molecules/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

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
  // const [Carts, setCarts] = useState([]);
  //const [TotalPrice, setTotalPrice] = useState(0);
  const [Products, setProducts] = useState([]);


  //didmount

  // useEffect(() => {
  //   setCarts(JSON.parse(localStorage.getItem("Carts") || []));
  // },[])

  useEffect(() => {
    getProducts((data) => { 
      setProducts(data);
    });
  }, []);

  //didupdate

  // const handleAddToCart = (productId) => {
  //   if (Carts.find((cart) => cart.id === productId)) {
  //     setCarts(
  //       Carts.map((cart) =>
  //         cart.id === productId ? { ...cart, qty: cart.qty + 1 } : cart
  //       )
  //     );
  //   } else {
  //     setCarts([...Carts, { id: productId, qty: 1 }]);
  //   }
  // };

  // useRef
  //  const CartsRef = useRef(JSON.parse(localStorage.getItem("Carts") || []));

  // const handleAddToCartRef = (id) => {
  //     CartsRef.current = [...CartsRef.current, {id, qty: 1}];
  //     localStorage.setItem("Carts", JSON.stringify(CartsRef.current))
  // }

  // const totalPriceRef = useRef(null);
  const { isDarkMode } = useContext(DarkMode)
  return (
    <>
      <Navbar />
      <div 
      className={`flex justify-center py-5 px-4 ${isDarkMode && "bg-gray-900"}`}>
        <div className="w-4/6 flex flex-wrap gap-3">
          {Products.length > 0 &&
            Products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.header
                  image={product.image}
                  id={product.id}
                ></CardProduct.header>
                <CardProduct.body name={product.title}>
                  {product.description}
                </CardProduct.body>
                <CardProduct.footer
                  price={product.price}
                  id={product.id}
                ></CardProduct.footer>
              </CardProduct>
            ))}
        </div><div className="w-2/6">
            <h1 className="text-3xl text-blue-600 font-bold ml-5 mb-2">Cart</h1>
            <TableCart Products={Products} />
          </div>
      </div>
      <div className="mt-5 flex justify-center">
        <CounterClass />
      </div>
    </>
  );
};

export default ProductPage;
