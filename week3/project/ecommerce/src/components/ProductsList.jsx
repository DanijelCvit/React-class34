import ProductCard from "./ProductCard.jsx";
import useFetch from "../hooks/useFetch.js";
import Spinner from "./Spinner.jsx";
import { Link } from "react-router-dom";

const ProductsList = ({ category }) => {
  let url = "https://fakestoreapi.com/products";

  if (category !== null) {
    url += `/category/${category}`;
  }

  const { data: products, errorMessage, isLoading } = useFetch(url);

  return (
    <div>
      {isLoading && <Spinner />}
      {products && (
        <ul className="sm:flex sm:flex-wrap">
          {products.map((product) => (
            <li className="sm:w-1/2 lg:w-1/3 2xl:w-1/4 px-2" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </li>
          ))}
        </ul>
      )}
      {errorMessage}
    </div>
  );
};

export default ProductsList;
