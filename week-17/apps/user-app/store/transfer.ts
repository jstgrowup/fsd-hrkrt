import {
  createOnRampTransactions,
  getOnRampTransactions,
} from "@/server-actions/transaction.action";
import { TransferStoreType } from "@repo/utils/types";
import { create } from "zustand";
export const useTransferStore = create<TransferStoreType>((set) => ({
  loading: false,
  message: "",
  transactions: [],
  error: null,
  createTransactionStoreAction: async (amount: string, provider: string) => {
    set({ loading: true, error: null });
    try {
      const createdTransaction = await createOnRampTransactions(
        Number(amount),
        provider
      );
      set({ loading: false, message: createdTransaction?.message });
      return createdTransaction;
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  getAllTransactionsAction: async () => {
    try {
      const userTransactions = await getOnRampTransactions();
      set({
        transactions: userTransactions ?? [],
      });
      return userTransactions;
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
