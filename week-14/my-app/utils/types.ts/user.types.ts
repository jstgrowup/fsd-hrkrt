export interface UserAuthType {
  token: string;
}
export type SignupPayloadType = {
  email: string;
  name: string;
  password: string;
};
export type TokenStoreType = {
  token: string;
  signUpAction: (payload: SignupPayloadType) => Promise<void>;
};
