import { create } from "zustand";

export const useTransferStore = create((set) => ({
  loading: false,
  blogs: [],
  error: null,
  data: null,
  bulkBlogsAction: async () => {
    set({ loading: true, error: null });
    try {
      //   const allBlogs = await fetchBulkBlogs();
      //   set({ blogs: allBlogs.data, loading: false });
      //   return allBlogs;
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
