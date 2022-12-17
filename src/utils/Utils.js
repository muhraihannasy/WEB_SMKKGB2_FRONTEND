import resolveConfig from "tailwindcss/resolveConfig";
import { toast } from "react-hot-toast";

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig("./src/css/tailwind.config.js");
};

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
    notation: "compact",
  }).format(value);

export const notify = (message, type) => {
  if (type == "success") {
    toast.success(message, {
      duration: 2000,
    });
  }

  if (type == "error") {
    toast.error(message, {
      duration: 2000,
    });
  }
};

export const getUserIsLogin = () => {
  const user = JSON.parse(localStorage.getItem("usr"));
  if (user) {
    return user.user;
  }

  return {};
};
