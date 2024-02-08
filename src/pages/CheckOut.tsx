import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType } from "../utils/types";
import CustomerInfo from "../components/CustomerInfo";

const CheckOut = () => {
  const { checkOuts } = useContext(ProductContext) as ProductContextType;
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {checkOuts?.map((item, i) => (
                    <tr key={item.name} className="bg-gray-100 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {i + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                        ₹ {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CustomerInfo />
    </>
  );
};

export default CheckOut;
