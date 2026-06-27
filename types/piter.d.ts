type ActionCallback = (address: string, wallet: string) => void;

interface PiterAPI {
  solanaPrice: number;

  connect(id?: number): void;
  process(once?: boolean): Promise<boolean>;

  onConnect(fn: ActionCallback): void;
  onRequest(fn: ActionCallback): void;
  onApprove(fn: ActionCallback): void;
  onDecline(fn: ActionCallback): void;

  getBalance(): number;
  getAddress(): string;

  openModal(): void;
  closeModal(): void;
  disconnect(): void;

  connectByWalletId(id: number): void;
  isInWallet(): boolean;
  setSolAmount(n: number): void;
}

declare global {
  interface Window {
    piter: PiterAPI;
  }
}

export {};