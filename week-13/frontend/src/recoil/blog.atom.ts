import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
import Cookies from "js-cookie";
import {
  BlogBodyInterface,
  CreatedBlogResponseBody,
} from "../utils/Types-interfaces";
export const blogAtomState = atom<BlogBodyInterface>({
  key: "blogState",
  default: {
    title: "",
    content: "",
    published: false,
    loading: false,
    error: null,
    success: false,
  },
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
export const blogAtomFamily = atomFamily({
  key: "blogAtomFamily",
  default: selectorFamily({
    key: "blogSelectorFamily",
    get: (id?: string) => async () => {
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
export const createBlogSelector = selector({
  key: "createBlogSelector",
  get: ({ get }) => get(blogAtomState),
  set: ({ set }, newBlog: BlogBodyInterface | any) => {
    const { title, content, published } = newBlog;
    const token = Cookies.get("token");

    set(blogAtomState, (prevState) => ({
      ...prevState,
      title,
      content,
      published,
      loading: true,
      error: null,
      success: false,
    }));
    axios
      .post(
        `${import.meta.env.VITE_DEV_BACKEND_URL}/api/v1/blog/create`,
        { title, content },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response: CreatedBlogResponseBody) => {
        set(blogAtomState, {
          title: response.data.title,
          content: response.data.content,
          published: response.data.published,
          loading: false,
          error: null,
          success: true,
        });
      })
      .catch((error) => {
        set(blogAtomState, (prevState) => ({
          ...prevState,
          loading: false,
          published: false,
          error: error.response?.data?.message || "Failed to create blog",
          success: false,
        }));
      });
  },
});
