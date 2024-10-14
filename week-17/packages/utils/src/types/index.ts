export interface OnRampInterface {
  amount: string;
  bank: string;
}
export interface OnRampResponseInterface {
  id: string;
  status: string;
  token: string;
  provider: string;
  startTime: Date;
  userId: string;
  amount: string;
  bank?: string;
}
export type TransferStoreType = {
  loading: boolean;
  error: string | null;
  message: string;
  createTransactionStoreAction: (amount: string, provider: string) => void;
  transactions?: OnRampResponseInterface[];
};
export type AuthStoreType = {
  loading: boolean;
  error: string | null;
  message: string;
  signUp: (amount: string, provider: string) => void;
};
export interface AuthUserInterface {
  email: string;
  password: string;
}
export interface AuthUserResponseInterface {
  id: string;
  email?: string;
  password?: string;
}
