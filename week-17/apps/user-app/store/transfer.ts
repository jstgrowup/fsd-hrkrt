import { createOnRampTransactions } from "@/server-actions/onRampTransactions";
import { TransferStoreType } from "@repo/utils/types";
import { create } from "zustand";
export const useTransferStore = create<TransferStoreType>((set) => ({
  loading: false,
  message: "",
  transactions: [],
  error: null,
  data: null,
  createTransactionStoreAction: async (amount: string, provider: string) => {
    set({ loading: true, error: null });
    try {
      const createdTransaction = await createOnRampTransactions(
        Number(amount),
        provider
      );
      set({ loading: false, message: createdTransaction?.message });
      return true;
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
