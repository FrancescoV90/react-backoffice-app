import { IProductProps } from "../../interfaces/backoffice.interfaces";
import "./Product.scss";

const Product = ({ data }: IProductProps) => {
  return (
    <div className="product">
      <span>{data.title}</span>
      <span>{data.category}</span>
      <span>{data.price}</span>
    </div>
  );
};

export default Product;
