import { useEffect, useState } from "react";
import { useProductsStore } from "../../store/products/products.store";

export interface IProductResponse {
  id: string;
  data: IProductData;
}

interface IProductData {
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
  reviews: string[];
}
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
      {products.map((product: IProductResponse) => (
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
