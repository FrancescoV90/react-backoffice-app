import { IProductProps } from "../../interfaces/backoffice.interfaces";
import { useProductsStore } from "../../store/products.store";
import "./Product.scss";

const Product = ({ id, data }: IProductProps) => {
  const { deleteProduct } = useProductsStore();

  return (
    <div className="product">
      <span>{data.title}</span>
      <span>{data.category}</span>
      <span>{data.price}</span>
      <span>{data.employee}</span>
      <span>{data.description}</span>
      <button onClick={() => deleteProduct(id)}>delete product</button>
    </div>
  );
};

export default Product;
