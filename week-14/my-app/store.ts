import { create } from "zustand";
import { SignupPayloadType, TokenStoreType } from "./utils/types.ts/user.types";
import axios from "axios";

export const useAuthStore = create<TokenStoreType>((set) => ({
  token: "",
  signUpAction: async (payload: SignupPayloadType) => {
    try {
      const response = await axios.post(
        `${process.env.DEV_BACKEND_URL}/api/v1/user/signup`,
        payload
      );
      console.log("response:", response);
      return response.data;
    } catch (error) {
      return error;
    }
  },
}));
