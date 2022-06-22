import { BsWallet } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useWallet } from "../providers/WalletProvider";
import Button from "./Button";
import { useMemo } from "react";
import cn from "classnames";

function Navbar() {
  const { wallet, connect, disconnect } = useWallet();

  const shortenAddress = (address: String) => {
    const shortAddress = `${address.slice(0, 4)}...${address.slice(-3)}`;
    return shortAddress;
  };

  const walletAddress = useMemo(() => {
    if (wallet) {
      return shortenAddress(wallet.defaultAccount.base16);
    }
  }, [wallet]);

  return (
    <div
      className={cn(
        "px-5",
        "py-3",
        "bg-slate-900",
        "items-center",
        "shadow-lg",
        "mx-auto",
        "flex",
        "justify-between"
      )}
    >
      <a href="/">
        <h1 className={cn("text-white", "font-bold", "text-2xl")}>ZILSBT</h1>
      </a>
      {wallet ? (
        <div className={cn("flex", "items-center", "gap-4")}>
          <h1 className={cn("lowercase", "text-white")}>{walletAddress}</h1>

          <Button onClick={() => disconnect()}>
            <AiOutlineLogout />
          </Button>
        </div>
      ) : (
        <Button onClick={() => connect()}>
          <BsWallet /> Connect
        </Button>
      )}
    </div>
  );
}

export default Navbar;
