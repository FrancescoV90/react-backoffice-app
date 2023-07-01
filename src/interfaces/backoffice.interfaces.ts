export interface IStoreInfo {
  name: string;
  category: string;
  employees: string[];
}

export interface IProductsResponse {
  id: string;
  data: IProductData;
}

export interface IProductData {
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
  reviews: string[];
}

export interface IProductsState {
  products: IProductsResponse[];
  getAllProducts: () => void;
}
