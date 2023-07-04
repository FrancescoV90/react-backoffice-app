import { useState } from "react";
import {
  IProductResponse,
  IProductsProps,
} from "../../interfaces/backoffice.interfaces";
import AddProduct from "../AddProduct/AddProduct";
import Product from "../Product/Product";
import { FaList, FaTableCellsLarge } from "react-icons/fa6";
import "./Products.scss";

const Products = ({ products }: IProductsProps) => {
  const [isPanelView, setIsPanelView] = useState<boolean>(false);

  const onChangeView = () => {
    setIsPanelView(!isPanelView);
  };

  return (
    <>
      <div className="products-actions">
        <AddProduct />
        <button className="change-view-button" onClick={onChangeView}>
          {isPanelView ? <FaTableCellsLarge /> : <FaList />}
          Cambia visualizzazione prodotti
        </button>
      </div>
      <h2 className="products-title">Prodotti</h2>
      <ul className={isPanelView ? "panel" : "grid"}>
        {products.map((product: IProductResponse) => (
          <li key={`product_${product.id}`}>
            {<Product id={product.id} data={product.data} />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
