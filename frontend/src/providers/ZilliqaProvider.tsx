import { BN, bytes, units, Zilliqa } from "@zilliqa-js/zilliqa";
import { Transaction } from "@zilliqa-js/account";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { Value, CallParams } from "../types/zilliqa";
import Long from "long";

interface ZilliqaContextValue {
  zilliqa: Zilliqa;
  callContract: (
    transition: string,
    args: Value[],
    params?: CallParams
  ) => Promise<Transaction>;
}

const CHAIN_ID = 333; // testnet, see https://dev.zilliqa.com/docs/apis/api-blockchain-get-network-id/
const MSG_VERSION = 1;
const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);

const GAS_LIMIT = Long.fromNumber(100000);
const GAS_PRICE = units.toQa("2000", units.Units.Li);

export const TX_PARAMS = {
  version: VERSION,
  amount: new BN(0),
  gasPrice: GAS_PRICE,
  gasLimit: GAS_LIMIT,
};

const ZilliqaContext = createContext<ZilliqaContextValue>(null as any);

const ZilliqaProvider = ({ children }: { children: ReactNode }) => {
  const [zilliqaClient, setZilliqaClient] = useState<Zilliqa | null>(null);

  const callContract = useCallback(
    async (transition: string, args: Value[], params?: CallParams) => {
      if (!zilliqaClient) {
        throw new Error("Zilliqa client is not initialized");
      }
      // TODO: Move contract address to .env
      const contract = await zilliqaClient.contracts.at(
        "0xcA556322b3fc4947daE0B9cbbFeB1e2e2425Df4A"
      );
      return contract.call(transition, args, { ...TX_PARAMS, ...params });
    },
    [zilliqaClient]
  );

  const value = useMemo(() => {
    return {
      zilliqa: zilliqaClient!,
      callContract,
    };
  }, [zilliqaClient, callContract]);

  useEffect(() => {
    // TODO: Allow switching between different networks
    const zilliqa = new Zilliqa("https://dev-api.zilliqa.com");
    setZilliqaClient(zilliqa);
  }, []);

  return (
    <ZilliqaContext.Provider value={value}>
      {zilliqaClient != null && children}
    </ZilliqaContext.Provider>
  );
};

export default ZilliqaProvider;

export const useZilliqa = (): ZilliqaContextValue => useContext(ZilliqaContext);
