import { create } from "zustand";
import { IProductsState } from "../interfaces/backoffice.interfaces";

export const useProductsStore = create<IProductsState>((set, get) => ({
  products: [],
  getAllProducts: async () => {
    const response = await fetch(
      "https://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products"
    );
    set({ products: await response.json() });
  },
  deleteProduct: async (idProduct: string) => {
    const response = await fetch(
      `https://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products/${idProduct}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 200) {
      get().getAllProducts();
    }
  },
}));
