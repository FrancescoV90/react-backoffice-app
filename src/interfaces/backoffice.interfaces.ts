export interface IStoreInfo {
  name: string;
  category: string;
  employees: string[];
}

export interface IProductResponse {
  id: string;
  data: IProductData;
}

export interface IStatResponse {
  numberOfProducts: number;
  category: string;
}

export interface IProductData {
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
  reviews: string[];
}

export interface IProductsProps {
  products: IProductResponse[];
}

export interface IProductProps extends IProductResponse {}

export interface IProductsState {
  products: IProductResponse[];
  stats: IStatResponse[];
  getStats: () => void;
  getAllProducts: () => void;
  deleteProduct: (idProduct: string) => void;
  addProduct: (data: IAddProductRequest) => void;
}

export interface IStoreInfoState {
  storeInfo: IStoreInfo;
  getStoreInfo: () => void;
}

export interface IAddProductRequest {
  title: string;
  category: string;
  price: string;
  employee: string;
  description: string;
}
