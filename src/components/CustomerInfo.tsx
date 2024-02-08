import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType } from "../utils/types";
import { Router, useNavigate } from "react-router-dom";

const CustomerInfo = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const { addCustomerInfo } = useContext(ProductContext) as ProductContextType;

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    });
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = { ...errors };

    // Validate firstname
    if (!values.firstname) {
      formValid = false;
      newErrors.firstname = "First name is required";
    } else {
      newErrors.firstname = "";
    }

    // Validate lastname
    if (!values.lastname) {
      formValid = false;
      newErrors.lastname = "Last name is required";
    } else {
      newErrors.lastname = "";
    }

    // Validate email
    if (!values.email) {
      formValid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      formValid = false;
      newErrors.email = "Invalid email address";
    } else {
      newErrors.email = "";
    }

    // Validate phone
    if (!values.phone) {
      formValid = false;
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      formValid = false;
      newErrors.phone = "Invalid phone number";
    } else {
      newErrors.phone = "";
    }

    setErrors(newErrors);

    if (formValid) {
      // Perform form submission or other actions
      addCustomerInfo({
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        phone: values.phone,
      });

      setTimeout(() => {
        setValues({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
        });

        navigate("/confirm");
      }, 1000);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none"
        onSubmit={handleSubmit}
      >
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Give Your Details
        </h4>
        <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                type="text"
                name="firstname"
                placeholder="First Name"
                value={values.firstname}
                onChange={handleChange}
              />
              <span className="text-red-500">{errors.firstname}</span>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={values.lastname}
                onChange={handleChange}
              />
              <span className="text-red-500">{errors.lastname}</span>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
              <span className="text-red-500">{errors.email}</span>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="text"
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                name="phone"
                placeholder="Phone Number"
                value={values.phone}
                onChange={handleChange}
              />
              <span className="text-red-500">{errors.phone}</span>
            </div>
          </div>
          <button
            className="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerInfo;
