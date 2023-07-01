import { create } from "zustand";
import { IStoreInfoState } from "../interfaces/backoffice.interfaces";

export const useStoreInfo = create<IStoreInfoState>((set) => ({
  storeInfo: { name: "", category: "", employees: [] },
  getStoreInfo: async () => {
    const response = await fetch(
      "https://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR"
    );
    set({ storeInfo: await response.json() });
  },
}));
