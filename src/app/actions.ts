'use server';

import { revalidateTag } from "next/cache";

export const addProduct = async (formData: FormData) => {
  const product = formData.get("product")?.toString();
  const price = formData.get("price")?.toString();

  if (!product || !price) {
    return;
  }

  const newProduct = {
    product,
    price,
  };

  await fetch("https://65a139a5600f49256fb134b2.mockapi.io/new_products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag('new_products');
}