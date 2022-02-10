import { toast } from "react-toastify";

export const helperToast = (success = "warning", text) => {
  return toast[success](text, {
    position: toast.POSITION.TOP_RIGHT,
  });
};