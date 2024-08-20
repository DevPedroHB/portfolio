"use client";

import { useTheme } from "next-themes";
import { Theme, ToastContainer, Zoom } from "react-toastify";

export function Toast() {
  const { theme } = useTheme();

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme as Theme}
      transition={Zoom}
    />
  );
}
