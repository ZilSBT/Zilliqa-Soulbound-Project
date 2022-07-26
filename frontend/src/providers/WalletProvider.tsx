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

import toast from "react-hot-toast";
import { decodeZilPayError } from "../functions/decodeMessage";
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

// let CONTRACT_ADDRESS: any = process.env.REACT_APP_CONTRACT_ADDRESS;
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
      const contract = await zilPay.contracts.at(
        "0xb019d93b6ad4b8e7339a1042ede50341a77cca0f"
      );

      try {
        const callTx = await contract.call(transition, args, {
          ...TX_PARAMS,
          ...params,
        });
        // transitionMessageAlert(zilPay, callTx.ID, "Creating user");
        return callTx;
      } catch (error: any) {
        toast.error(decodeZilPayError(error));
        // console.log(error);
      }
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

      document.getElementById("walletModal")?.classList.toggle("hidden");
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
