"use client";

import React, { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  show: boolean;
  erroMsg: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Toast = ({ message, show, setShow, erroMsg }: ToastProps) => {
  useEffect(() => {
    if (show) {
      setTimeout(() => setShow(false), 3000);
    }
  }, [setShow, show]);

  return (
    <div
      className={`fixed h-[60px] bottom-10 right-10  text-white py-5 px-5 rounded-[10px] ${
        show ? "block" : "hidden"
      } ${message === erroMsg ? "bg-red-500" : "bg-green-500"}`}
    >
      {message}
    </div>
  );
};
