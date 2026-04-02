import { Link } from "react-router-dom";
import Product from "./Product";
import products from "../data/products";
import Card from "../components/Card";

function ProductList({ categories }) {
  return (
    <div className="flex flex-col gap-12 w-full px-6">

      <button>
        <a href="/" className="text-black hover:underline ml-4 bg-white p-2 rounded-2xl flex justify-start ">← Volver al inicio</a>
      </button>

      <h1 className="contenedor__h1">NUESTROS PRODUCTOS</h1>
      {categories.map((category) => (
        <section key={category}>
          <h2 className="contenedor_h4">{category}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === category)
              .map((p) => (
                <Card
                  key={p.id}
                  image={p.image}
                  name={p.name}
                  price={p.price}
                  to={`/producto/${p.id}`}
                >
                  {p.description}
                </Card>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
