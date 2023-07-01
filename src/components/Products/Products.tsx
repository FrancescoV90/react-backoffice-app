import { useEffect, useState } from "react";
import { useProductsStore } from "../../store/products/products.store";
import { IProductsResponse } from "../../interfaces/backoffice.interfaces";

// enum ViewsEnum {
// LIST = 'list'
// }
function Products() {
  const { products, getAllProducts } = useProductsStore();
  const [isPanelView, setIsPanelView] = useState<boolean>(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className={isPanelView ? "panel" : "grid"}>
      {products.map((product: IProductsResponse) => (
        <li>
          {/* <Product product={product} /> */}
          li
        </li>
      ))}
    </div>
  );
}

export default Products;

// function Products({id, data}: IProductResponse) {
