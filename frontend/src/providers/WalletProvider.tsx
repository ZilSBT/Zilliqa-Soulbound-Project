import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Contracts } from "@zilliqa-js/contract";
import { Transaction } from '@zilliqa-js/account';
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

interface WalletProviderValue {
  // update this
  wallet: any;
  connect: () => void;
  disconnect: () => void;
  callContract: (transition: string, args: Value[], params?: CallParams) => Promise<Transaction>
}

const walletProvider = createContext<WalletProviderValue>(null as any);

function WalletProvider({ children }: Props) {
  const [wallet, setWallet] = useState<any>();
  // another state zilpay installed or not

  const zilPay = window.zilPay;

  const callContract = useCallback(
    async (transition: string, args: Value[], params?: CallParams) => {
      if (!zilPay) {
        throw new Error("ZilPay client is not initialized");
      }
      // TODO: Move contract address to .env
      const contract = await zilPay.contracts.at(
        "0xf6fc98103b75c7e6b2b690e3419f66360ba32e8b"
      );
      return contract.call(transition, args, { ...TX_PARAMS, ...params });
    },
    [zilPay]
  );

  const connect = useCallback(async () => {
    if (zilPay) {
      await zilPay.wallet.connect();
      setWallet(zilPay.wallet);
    } else {
      // set a state notinstalled
      alert("Install ZillPay Wallet"); //TODO: Show a react dialouge, tell users to install zilpay wallet

    }
  }, [zilPay]);

  const disconnect = useCallback(async () => {
    if (zilPay) {
      await zilPay.wallet.disconnect();
      setWallet(null);
    }
  }, [zilPay]);

  const value = useMemo(() => {
    return { wallet, connect, disconnect, callContract, 
      // return the newly created state
    };
  }, [wallet, connect, disconnect, callContract]);

  return (
    <walletProvider.Provider value={value}>{children}</walletProvider.Provider>
  );
}

export default WalletProvider;

export const useWallet = () => useContext(walletProvider);
