import { toast } from "sonner";

export const showSuccessToast = (message: string) => {
  return toast.success(message || "Operation successful!", {
    position: "top-right",
    duration: 3000,
    style: {
      backgroundColor: "#4caf50",
      color: "#ffffff",
      borderRadius: "8px",
      fontWeight: "bolder",
      padding: "15px 20px",
    },
  });
};

export const showErrorToast = (message: string) => {
  return toast.error(message || "Something went wrong!", {
    position: "top-right",
    duration: 3000,
    style: {
      backgroundColor: "#EF4444",
      color: "#ffffff",
      borderRadius: "8px",
      fontWeight: "bolder",
      padding: "15px 20px",
    },
  });
};
