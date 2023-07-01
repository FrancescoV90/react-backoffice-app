import { useState } from "react";
import {
  IProductResponse,
  IProductsProps,
} from "../../interfaces/backoffice.interfaces";
import Product from "../Product/Product";
import "./Products.scss";

const Products = ({ products }: IProductsProps) => {
  const [isPanelView, setIsPanelView] = useState<boolean>(false);

  const onChangeView = () => {
    setIsPanelView(!isPanelView);
  };

  return (
    <>
      <button className="change-view-button" onClick={onChangeView}>
        Cambia visualizzazione prodotti
      </button>
      <ul className={isPanelView ? "panel" : "grid"}>
        {products.map((product: IProductResponse) => (
          <li key={`product_${product.id}`}>
            {<Product data={product.data} />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
