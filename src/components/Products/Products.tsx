import { useState } from "react";
import { IProductsResponse } from "../../interfaces/backoffice.interfaces";

function Products(props: { products: IProductsResponse[] }) {
  const [isPanelView, setIsPanelView] = useState<boolean>(false);

  return (
    <div className={isPanelView ? "panel" : "grid"}>
      {props.products.map((product: IProductsResponse, index: number) => (
        <li key={`product_${index}`}>
          {/* <Product product={product} /> */}
          li
        </li>
      ))}
    </div>
  );
}

export default Products;

// function Products({id, data}: IProductResponse) {
