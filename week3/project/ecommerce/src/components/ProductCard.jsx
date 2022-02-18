import PropTypes from "prop-types";
import FavoriteButton from "./FavoriteButton";

const ProductCard = ({ product }) => {
  return (
    <div className="text-center mt-6 relative pr-8">
      <img
        src={product.image}
        alt={product.title}
        className="mx-auto mb-2 h-72"
        style={{ objectFit: "contain" }}
      />
      <div className="absolute top-2 right-2">
        <FavoriteButton id={product.id} />
      </div>
      <h2 className="text-ellipsis overflow-hidden whitespace-nowrap">
        {product.title}
      </h2>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
