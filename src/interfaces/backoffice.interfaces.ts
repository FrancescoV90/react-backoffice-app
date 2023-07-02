export interface IStoreInfo {
  name: string;
  category: string;
  employees: string[];
}

export interface IProductResponse {
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

export interface IProductsProps {
  products: IProductResponse[];
}

export interface IProductProps extends IProductResponse {}

export interface IProductsState {
  products: IProductResponse[];
  getAllProducts: () => void;
  deleteProduct: (idProduct: string) => void;
}

export interface IStoreInfoState {
  storeInfo: IStoreInfo;
  getStoreInfo: () => void;
}
