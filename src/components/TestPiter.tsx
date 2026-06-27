"use client";

import { useEffect } from "react";

export default function TestPiter() {
  useEffect(() => {
    setTimeout(() => {
      console.log("window.piter =", window.piter);
      console.log("window.openModal =", (window as any).openModal);
    }, 3000);
  }, []);

  return null;
}