import { create } from "zustand";
import {
  IAddProductRequest,
  IProductsState,
} from "../interfaces/backoffice.interfaces";
import { Store } from "react-notifications-component";

export const useProductsStore = create<IProductsState>((set, get) => ({
  products: [],
  stats: [],
  getStats: async () => {
    const response = await fetch(
      "https://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/stats/categories"
    );
    set({ stats: await response.json() });
  },
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
      get().getStats();
      Store.addNotification({
        title: "Prodotto eliminato con successo",
        type: "success",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    }
  },
  addProduct: async (data: IAddProductRequest) => {
    const response = await fetch(
      `https://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          price: parseFloat(data.price),
          reviews: ["ciao"],
        }),
      }
    );
    if (response.status === 200) {
      get().getAllProducts();
      get().getStats();
      Store.addNotification({
        title: "Prodotto aggiunto con successo",
        type: "success",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    }
  },
}));
