import { Form } from "@/components/Form";

interface IProduct {
  product: string;
  price: string;
  id: string;
}

const Home = async () => {
  const res = await fetch("https://65a139a5600f49256fb134b2.mockapi.io/new_products", {
    method: "GET",
    cache: "no-cache", // DISABLING CACHE FOR THE PURPOSE OF THIS DEMO ONLY
    next: {
      tags: ["new_products"],
    },
  });

  const products: IProduct[] = await res.json();

  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center">Products</h1>

      <Form />

      <h2 className="text-2xl font-bold text-center">List of Products</h2>

      <div className="p-10 flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>$ {product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
