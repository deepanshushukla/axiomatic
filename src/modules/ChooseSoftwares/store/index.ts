import create from 'zustand';
import { ISoftware } from '../../../types/softwareTypes';
export const MAX_SOFTWARE = 4;

const useStore = create((set: any) => ({
  softwares: [],

  addSoftware: (value: ISoftware) =>
    set((state: { softwares: ISoftware[] }) => ({
      softwares: [...state.softwares, { ...value }],
    })),

  clearStore: () => set(() => ({ softwares: [] })),

  removeSoftware: (index: number) =>
    set((state: { softwares: ISoftware[] }) => ({
      softwares: state.softwares.filter((item, i) => {
        return i !== index;
      }),
    })),
}));

export default useStore;
