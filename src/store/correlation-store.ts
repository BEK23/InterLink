import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CorrelationType {
  datasets: string[];
  addDateset: (id: string) => void;
  removeDataset: (id: string) => void;
  clear: () => void;
}

const initialState = JSON.parse(
  localStorage.getItem("correlation") ?? '{"state":{"datasets":[]},"version":0}'
).datasets;

export const useCorrelation = create<CorrelationType>()(
  persist(
    (set, get) => ({
      datasets: initialState,
      addDateset: (id) => {
        if (get().datasets.length > 1) return;

        set((state) => ({ datasets: [...state.datasets, id] }));
      },
      removeDataset: (value) => {
        set((state) => ({
          datasets: state.datasets.filter((item) => item !== value),
        }));
      },
      clear: () => {
        set({ datasets: [] });
      },
    }),
    { name: "correlation" }
  )
);
