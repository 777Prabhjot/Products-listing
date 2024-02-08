import { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType } from "../utils/types";

const Products = () => {
  const { products } = useContext(ProductContext) as ProductContextType;
  return (
    <div className="flex flex-wrap justify-between p-4">
      {products?.map((item) => {
        return (
          <Product
            key={item.name}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
