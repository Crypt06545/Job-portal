import { toast } from "sonner";

const base = {
  position: "top-right",
};

export const AuthToast = {
  success: (message) =>
    toast.success(message, {
      ...base,
      style: {
        "--normal-bg": "rgb(236 253 245)", // emerald-50
        "--normal-text": "rgb(4 120 87)", // emerald-700
        "--normal-border": "rgb(16 185 129)", // emerald-500
      },
    }),

  warning: (message) =>
    toast.warning(message, {
      ...base,
      style: {
        "--normal-bg": "rgb(255 251 235)", // amber-50
        "--normal-text": "rgb(180 83 9)", // amber-700
        "--normal-border": "rgb(245 158 11)", // amber-500
      },
    }),

  error: (message) =>
    toast.error(message, {
      ...base,
      style: {
        "--normal-bg": "rgb(254 242 242)", // red-50
        "--normal-text": "rgb(185 28 28)", // red-700
        "--normal-border": "rgb(239 68 68)", // red-500
      },
    }),
};
