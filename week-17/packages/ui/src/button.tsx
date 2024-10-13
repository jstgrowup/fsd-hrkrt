import { ButtonProps } from "./utils/types";
export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="rounded-xl w-full bg-blue-600 text-white py-3 px-4  hover:bg-blue-700  transition-colors font-medium"
    >
      {children}
    </button>
  );
};
