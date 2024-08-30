import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
import Cookies from "js-cookie";
import type { BlogType } from "../utils/Types-interfaces";

export const UserState = atom({
  key: "userAtom",
  default: "",
});
export const blogsAtomState = atom({
  key: "blogsAtom",
  default: selector({
    key: "blogsAtomSelector",
    get: async () => {
      const token = Cookies.get("token");
      const response = await axios.get(
        `${import.meta.env.VITE_DEV_BACKEND_URL}/api/v1/blog/get/bulk`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return response.data.data;
    },
  }),
});
export const blogAtomFamily = atomFamily<
  BlogType | undefined,
  string | undefined
>({
  key: "blogAtomFamily",
  default: selectorFamily<BlogType | undefined, string | undefined>({
    key: "blogSelectorFamily",
    get: (id?: string) => async (): Promise<BlogType | undefined> => {
      const token = Cookies.get("token");
      const response = await axios.get(
        `${import.meta.env.VITE_DEV_BACKEND_URL}/api/v1/blog/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return response.data.data;
    },
  }),
});
