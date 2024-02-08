import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType } from "../utils/types";

type ProductProps = {
  id: number;
  name: string;
  price: number;
};

const Product = ({ id, name, price }: ProductProps) => {
  const { addProductToCart, checkOuts } = useContext(
    ProductContext
  ) as ProductContextType;

  const handleAddToCart = () => {
    addProductToCart({
      id,
      name,
      price,
    });
  };

  const productInCart = checkOuts.find((product) => product.id === id);

  return (
    <>
      <div className="relative flex w-60 flex-col rounded-xl my-3 bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {name}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            ₹ {price}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:bg-gray-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            onClick={handleAddToCart}
            disabled={productInCart ? true : false}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
