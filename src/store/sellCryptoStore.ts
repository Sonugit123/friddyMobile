import { create } from 'zustand';

type Store = {
  sellAmounts: Record<number, string>;
  priceValues: Record<number, string>;

  setSellAmount: (id: number, value: string) => void;
  setPriceValue: (id: number, value: string) => void;

  resetSellAmount: (id: number) => void;
  resetPriceValue: (id: number) => void;
};

export const useSellCryptoStore = create<Store>(set => ({
  sellAmounts: {},
  priceValues: {},

  setSellAmount: (id, value) =>
    set(state => ({
      sellAmounts: {
        ...state.sellAmounts,
        [id]: value,
      },
    })),

  setPriceValue: (id, value) =>
    set(state => ({
      priceValues: {
        ...state.priceValues,
        [id]: value,
      },
    })),

      resetSellAmount: id =>
    set(state => {
      const updated = { ...state.sellAmounts };
      delete updated[id];
      return { sellAmounts: updated };
    }),

  resetPriceValue: id =>
    set(state => {
      const updated = { ...state.priceValues };
      delete updated[id];
      return { priceValues: updated };
    }),
}));