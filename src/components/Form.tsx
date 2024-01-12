'use client';

import { useRef } from "react";
import { addProduct } from "@/app/actions";

export const Form = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
        action={async (formData) => {
          await addProduct(formData);
          ref.current?.reset();
        }}
        ref={ref}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5 text-black"
      >
        <input
          name="product"
          type="text"
          placeholder="Product Name"
          className="border border-gray-300 p-2 rounded-md"
        />

        <input
          name="price"
          type="text"
          placeholder="Price..."
          className="border border-gray-300 p-2 rounded-md"
        />
        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>
  )
}