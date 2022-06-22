import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

declare global {
  interface Window {
    zilPay?: any;
  }
}

interface Props {
  children?: React.ReactNode;
}

const walletProvider = createContext({});

const zilPay = window.zilPay;

function WalletProvider({ children }: Props) {
  const [wallet, setWallet] = useState<any>();

  const connect = useCallback(async () => {
    if (zilPay) {
      await zilPay.wallet.connect();
      setWallet(zilPay.wallet);
    } else {
      alert("Install ZillPay Wallet");
    }
  }, []);

  const disconnect = async () => {
    if (window.zilPay) {
      await zilPay.wallet.disconnect();
      setWallet(null);
    }
  };

  const value = useMemo(() => {
    return { wallet, connect, disconnect };
  }, [wallet, connect]);

  return (
    <walletProvider.Provider value={value}>{children}</walletProvider.Provider>
  );
}

export default WalletProvider;

export const useWallet = (): any => useContext(walletProvider);
