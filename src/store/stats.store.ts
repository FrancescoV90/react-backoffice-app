import { create } from "zustand";
import { IStotsState } from "../interfaces/backoffice.interfaces";

export const useStatsStore = create<IStotsState>((set) => ({
  stats: [],
  getStots: async () => {
    const response = await fetch(
      "https://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/stats/categories"
    );
    set({ stats: await response.json() });
  },
}));
