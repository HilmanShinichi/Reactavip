
import CardProduct from '../components/Fragments/CardProduct';

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
  return (
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
  );
};

export default ProductPage;
