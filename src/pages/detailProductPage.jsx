import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

function DetailProductPage() {
  const [Product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <div className="w-100 min-h-screen flex justify-center items-center ">
      {Object.keys(Product).length > 0 && (
        <div className="flex font-sans max-w-l  w-1/2">
          <div className="flex-none w-48 relative">
            <img
              src={Product.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-col">
              <h1 className="flex-auto text-lg font-semibold text-slate-900 ">
                {Product.title}
              </h1>
              <div className="text-lg font-semibold text-slate-500">
                ${Product.price}
              </div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2"></div>
              Review : {Product.rating.rate}/5 ({Product.rating.count})
            </div>
            <div className="flex w-1/2 items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm">
                {Product.description}
              </div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="submit"
                >
                  Buy now
                </button>
                <button
                  className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                  type="button"
                >
                  Add to bag
                </button>
              </div>
            
            </div>
            <p className="text-sm text-slate-700">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default DetailProductPage;
