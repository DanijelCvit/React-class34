import ProductCard from "./ProductCard.jsx";
import Spinner from "./Spinner.jsx";

const ProductsList = ({ products, isLoading, errorMessage }) => (
  <div>
    {isLoading && <Spinner />}
    {products && (
      <ul className="sm:flex sm:flex-wrap">
        {products.map((product) => (
          <li className="sm:w-1/2 lg:w-1/3 2xl:w-1/4 px-2" key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    )}
    {errorMessage}
  </div>
);

export default ProductsList;
