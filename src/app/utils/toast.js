import { Toaster, toast } from "react-hot-toast";

// Helper functions to trigger different types of toasts
export const showToast = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  info: (message) => toast(message), // Default info toast
  warning: (message) =>
    toast(message, {
      icon: "⚠️",
    }),
};

// Toaster component to be included once in your app (e.g., in _app.js or a layout component)
const Toast = () => {
  return <Toaster position="top-right" reverseOrder={false} />;
};

export default Toast;
