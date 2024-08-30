import axios from "axios";
import { atom, selector } from "recoil";
import Cookies from "js-cookie";

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
