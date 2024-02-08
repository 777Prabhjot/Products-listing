export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CustomerInfo {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export interface ProductContextType {
  products: Product[];
  checkOuts: Product[];
  customerInfo: CustomerInfo;
  emptyCart: () => void;
  addCustomerInfo: (customer: CustomerInfo) => void;
  addProductToCart: (newProduct: Product) => void;
}
