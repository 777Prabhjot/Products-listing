import React, { useState } from "react";
import { CustomerInfo, Product, ProductContextType } from "../utils/types";
import { productsData } from "../data/ProductsData";

const ProductContext = React.createContext<ProductContextType | null>(null);

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [checkOuts, setCheckOut] = useState<Product[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const addProductToCart = (newProduct: Product) => {
    setCheckOut([...checkOuts, newProduct]);
  };

  const emptyCart = () => {
    setCheckOut([]);
  };

  const addCustomerInfo = (customer: CustomerInfo) => {
    setCustomerInfo(customer);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        checkOuts,
        customerInfo,
        addCustomerInfo,
        addProductToCart,
        emptyCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
