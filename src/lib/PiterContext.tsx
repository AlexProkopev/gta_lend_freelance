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
      const iv = window.setInterval(() => {
        if (setup()) window.clearInterval(iv);
      }, 300);
      return () => window.clearInterval(iv);
    }
  }, []);

 const openModal = () => {
  if (typeof window === "undefined") return;

  const callModal = () => {
    const fn = (window as any).openModal || (window as any).piter?.openModal;
    if (typeof fn === "function") {
      fn();
      return true;
    }
    return false;
  };

  if (callModal()) return;

  const iv = window.setInterval(() => {
    if (callModal()) {
      window.clearInterval(iv);
    }
  }, 100);
  window.setTimeout(() => window.clearInterval(iv), 3000);
};

  return (
    <PiterCtx.Provider value={{ connected, address, balance, openModal }}>
      {children}
    </PiterCtx.Provider>
  );
}

export const usePiter = () => useContext(PiterCtx);
