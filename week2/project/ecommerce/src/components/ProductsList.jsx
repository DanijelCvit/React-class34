import ProductCard from "./ProductCard.jsx";
import Spinner from "./Spinner.jsx";
import PropTypes from "prop-types";

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

ProductsList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  products: PropTypes.array,
  errorMessage: PropTypes.string,
};

export default ProductsList;
