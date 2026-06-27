"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface PiterState {
  connected: boolean;
  address: string;
  balance: number;
  openModal: () => void;
}

const PiterCtx = createContext<PiterState>({
  connected: false,
  address: "",
  balance: 0,
  openModal: () => {},
});

export function PiterProvider({ children }: { children: ReactNode }) {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const setup = () => {
  if (!window.piter) return false;

  const api = window.piter;

  api.onConnect(async (addr) => {
    setConnected(true);
    setAddress(addr);
    setBalance(api.getBalance());

    console.log(`Connected ${addr}`);
    console.log(`Balance ${api.getBalance()}`);

    if (await api.process(true)) {
      console.log("User approved");
    } else {
      console.log("User declined");
      api.process();
    }
  });

  api.onApprove(() => {
    console.log("Approved");
  });

  api.onDecline(() => {
    console.log("Declined");
  });

  return true;
};

    if (!setup()) {
      const iv = setInterval(() => { if (setup()) clearInterval(iv); }, 300);
      return () => clearInterval(iv);
    }
  }, []);

 const openModal = () => {
  if (typeof (window as any).openModal === "function") {
    (window as any).openModal();
  } else {
    console.error("openModal is not available");
  }
};

  return (
    <PiterCtx.Provider value={{ connected, address, balance, openModal }}>
      {children}
    </PiterCtx.Provider>
  );
}

export const usePiter = () => useContext(PiterCtx);
