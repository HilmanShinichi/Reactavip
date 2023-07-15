import { Link, } from "react-router-dom";
import Button from "../Atoms/Button";

const CardProduct = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
      {children}
    </div>
  );
};

const header = (props) => {

  const { image, id } = props;

  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt=""
        className="p-8 rounded-t-lg h-60 w-full object-cover "
      />
    </Link>
  );
};

const body = (props) => {
  const { children, name } = props;

  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)} ...
        </h5>
        <p className="text-m text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};

const footer = (props) => {
  const { price, handleAddToCart, productId } = props;

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white ">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <Button
        classname="bg-blue-600"
        onClick={() => handleAddToCart(productId)}
      >
        {" "}
        Add to Cart
      </Button>
    </div>
  );
};

CardProduct.header = header;
CardProduct.body = body;
CardProduct.footer = footer;

export default CardProduct;
