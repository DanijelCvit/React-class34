import { useParams } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
import Spinner from "../components/Spinner";
import useFetch from "../hooks/useFetch";

const ProductDetails = () => {
  const { id } = useParams();

  const {
    data: products,
    errorMessage,
    isLoading,
  } = useFetch(`https://fakestoreapi.com/products/`, JSON.stringify([id]));

  return (
    <div className="container mx-auto px-2">
      {isLoading && <Spinner />}
      {products && (
        <div className="sm:flex mt-20">
          <div className="sm:w-1/2">
            <img src={products[0].image} alt="" />
          </div>
          <div className="px-4 sm:px-0 sm:w-1/2 sm:pl-6">
            <h2 className="font-bold text-2xl mt-4">{products[0].title}</h2>
            <div className="flex justify-between mt-4 mb-2">
              <div className="font-semibold text-xl">
                &euro; {products[0].price.toFixed(2)}
                <span className="pl-1 pr-4 text-gray-400 text-sm">
                  VAT included
                </span>
                <FavoriteButton id={id} />
              </div>
              <div className="mb-2">
                <h3>Rating</h3>
                <span> {products[0].rating.rate}</span>
                <span className="pl-1 text-gray-400">
                  {products[0].rating.count}
                </span>
              </div>
            </div>
            <p className="mb-4">
              {products[0].description
                .charAt(0)
                .toUpperCase()
                .concat(products[0].description.slice(1))}
            </p>
          </div>
        </div>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default ProductDetails;
