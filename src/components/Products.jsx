import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data.js";
const Products = () => {
  return (
    <section>
      <div>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
