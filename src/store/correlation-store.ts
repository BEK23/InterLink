import { create } from "zustand";

interface CorrelationType {
  datasets: string[];
  addDateset: (id: string) => void;
  removeDataset: (id: string) => void;
}

export const useCorrelation = create<CorrelationType>()((set, get) => ({
  datasets: [],
  addDateset: (id) => {
    if (get().datasets.length > 1) return;

    set((state) => ({ datasets: [...state.datasets, id] }));
  },
  removeDataset: (value) => {
    set((state) => ({
      datasets: state.datasets.filter((item) => item !== value),
    }));
  },
}));
