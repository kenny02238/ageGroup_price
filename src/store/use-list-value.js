import { create } from "zustand";

export const useListValue = create((set) => ({
  value: [{ ageGroup: [0, 20], price: "0" }],
  allInclude: true,
  updateAgeGroup: (index, newAgeGroup) =>
    set((state) => {
      const updateValue = [...state.value];
      updateValue[index].ageGroup = newAgeGroup;
      return { value: updateValue };
    }),
  updatePrice: (index, newPrice) =>
    set((state) => {
      const updateValue = [...state.value];
      updateValue[index].price = newPrice;
      return { value: updateValue };
    }),
  addNewItem: () =>
    set((state) => {
      const newItem = { ageGroup: [0, 20], price: "0" };
      const updateValue = [...state.value, newItem];
      return { value: updateValue };
    }),
  removeItem: (index) =>
    set((state) => {
      const updatedValue = [...state.value];
      updatedValue.splice(index, 1);
      return { value: updatedValue };
    }),
  setAllInclude: (value) => set({ allInclude: value }),
}));
