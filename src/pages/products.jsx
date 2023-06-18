
import CardProduct from '../components/Fragments/CardProduct';


const ProductPage = () => {
  return (
    <div className="flex justify-center py-5 gap-5">
      <CardProduct>
        <CardProduct.header image="/public/images/shoes1.jpg"></CardProduct.header>
        <CardProduct.body title="Sepatu Baru">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            iusto dolor repellendus aliquid temporibus labore laudantium eum
            deserunt, voluptas eos quisquam, quaerat consequatur eaque
            voluptate nemo minus odio, provident quas.
        </CardProduct.body>
        <CardProduct.footer price="Rp 900.000"></CardProduct.footer> 
      </CardProduct>
      <CardProduct>
        <CardProduct.header image="/public/images/shoes1.jpg"></CardProduct.header>
        <CardProduct.body title="Sepatu Baru">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            iusto dolor repellendus aliquid temporibus labore laudantium eum
            deserunt, voluptas eos quisquam, quaerat consequatur eaque
            voluptate nemo minus odio, provident quas.
        </CardProduct.body>
        <CardProduct.footer price="Rp 900.000"></CardProduct.footer> 
      </CardProduct>
    </div>
  );
};

export default ProductPage;
