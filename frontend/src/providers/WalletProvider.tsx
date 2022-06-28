import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Contracts } from "@zilliqa-js/contract";
import { CallParams, Value } from "../types/zilliqa";
import { TX_PARAMS } from "./ZilliqaProvider";

declare global {
  interface Window {
    // TODO: Complete type declaration
    zilPay?: {
      contracts: Contracts;
      wallet: any;
    };
  }
}

interface Props {
  children?: React.ReactNode;
}

let CONTRACT_ADDRESS: any = process.env.REACT_APP_CONTRACT_ADDRESS;
const walletProvider = createContext<any>(null as any);

function WalletProvider({ children }: Props) {
  const [wallet, setWallet] = useState<any>();
  const [notInstalled, setNotInstalled] = useState<boolean>(false);
  // another state zilpay installed or not

  const zilPay = window.zilPay;

  const callContract = useCallback(
    async (transition: string, args: Value[], params?: CallParams) => {
      if (!zilPay) {
        throw new Error("ZilPay client is not initialized");
      }
      // TODO: Move contract address to .env
      const contract = await zilPay.contracts.at(CONTRACT_ADDRESS);

      const callTx = await contract.call(transition, args, {
        ...TX_PARAMS,
        ...params,
      });

      return callTx;
    },
    [zilPay]
  );

  const connect = useCallback(async () => {
    if (zilPay) {
      await zilPay.wallet.connect();
      setWallet(zilPay.wallet);
    } else {
      // set a state notinstalled
      setNotInstalled(true);

      document.getElementById("walletModal")?.classList.toggle("opacity-0");
      document.getElementById("walletModal")?.classList.toggle("mt-[-100vh]");
    }
  }, [zilPay]);

  const disconnect = useCallback(async () => {
    if (zilPay) {
      await zilPay.wallet.disconnect();
      setWallet(null);
    }
  }, [zilPay]);

  const value = useMemo(() => {
    return {
      wallet,
      notInstalled,
      connect,
      disconnect,
      callContract,
      // return the newly created state
    };
  }, [wallet, notInstalled, connect, disconnect, callContract]);

  return (
    <walletProvider.Provider value={value}>{children}</walletProvider.Provider>
  );
}

export default WalletProvider;

export const useWallet = () => useContext(walletProvider);
