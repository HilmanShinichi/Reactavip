
import Button from '../components/Atoms/Button';
import CardProduct from '../components/Molecules/CardProduct';

const products = [
  {
    id: 1,
    image: "/public/images/shoes1.jpg",
    name: "Sepatu Baru",
    price: "Rp 900.000",
    desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
    iusto dolor repellendus aliquid temporibus labore laudantium eum
    deserunt, voluptas eos quisquam, quaerat consequatur eaque
    voluptate nemo minus odio, provident quas.`
  },
  {
    id: 2,
    image: "/public/images/shoes1.jpg",
    name: "Sepatu Lama",
    price: "Rp 500.000",
    desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit.`
  },
  {
    id: 3,
    image: "/public/images/shoes1.jpg",
    name: "Sepatu Hits",
    price: "Rp 700.000",
    desc:`salah satu sepatu dari brand terkemuka adadong`
  }
]


const ProductPage = () => {

  const email = localStorage.getItem('email');

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  }

  return (
    <>
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
    {email}
<Button classname="bg-black ml-5" onClick={handleLogout}>Logout</Button>
    </div>
    <div className="flex justify-center py-5 gap-5">
      {
        products.map((product) => (
          <CardProduct key={product.id}>
          <CardProduct.header image={product.image}></CardProduct.header>
          <CardProduct.body name={product.name}>
            {product.desc}
          </CardProduct.body>
          <CardProduct.footer price={product.price}></CardProduct.footer> 
        </CardProduct>
        ))
      }   
    </div>
    </>
  );
};

export default ProductPage;
