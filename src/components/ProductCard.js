import "./ProductCard.css";
const ProductCard = ({ product }) => {
  return (
    // <div className="p-4 w-40 bg-indigo-500 border rounded-md shadow-md product-card">
    //   <h3 className="text-lg font-semibold">{product.name}</h3>
    //   <p className="text-white">{product.description}</p>
    //   <div className="mt-4 text-cyan-500">{product.price}</div>
    // </div>
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">{product.price}</div>
    </div>
  );
};

export default ProductCard;
