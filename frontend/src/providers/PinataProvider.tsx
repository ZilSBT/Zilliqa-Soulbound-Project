import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import pinataSDK, { PinataClient } from "@pinata/sdk";

interface PinataContextValue {
  pinata: PinataClient;
}

const PINATA_API_KEY = process.env.REACT_APP_PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.REACT_APP_PINATA_SECRET_API_KEY;

const PinataContext = createContext<PinataContextValue>(null as any);

const PinataProvider = ({ children }: { children: ReactNode }) => {
  const [pinataClient, setPinataClient] = useState<PinataClient | null>(null);

  const value = useMemo(() => {
    return {
      pinata: pinataClient!,
    };
  }, [pinataClient]);

  useEffect(() => {
    if (!PINATA_API_KEY || !PINATA_SECRET_API_KEY) {
      throw new Error("Pinata API keys not provided!");
    }
    const pinata = pinataSDK(PINATA_API_KEY, PINATA_SECRET_API_KEY);
    setPinataClient(pinata);
  }, []);

  return (
    <PinataContext.Provider value={value}>
      {pinataClient != null && children}
    </PinataContext.Provider>
  );
};

export default PinataProvider;

export const usePinata = (): PinataContextValue => useContext(PinataContext);
