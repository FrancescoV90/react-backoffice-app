import { create } from "zustand";
import { IProductsState } from "../interfaces/backoffice.interfaces";

export const useProductsStore = create<IProductsState>((set) => ({
  products: [],
  //   getProduct: (id) => get().products.,
  getAllProducts: async () => {
    const response = await fetch(
      "https://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products"
    );
    set({ products: await response.json() });
  },
  //   deleteProduct: async (idStore, idProduct) => {
  //     // fetch con delete
  //     const response = await fetch(
  //       "https://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products"
  //     );
  //     // set({
  //     //   products: get().products.filter((product) => product.id != idProduct),
  //     // });
  //     get().getAllProducts();
  //   },
}));
