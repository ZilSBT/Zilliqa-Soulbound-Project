import { Link } from "react-router-dom";
import { BsWallet } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useWallet } from "../providers/WalletProvider";
import Button from "./Button";
import Switch from "./Switch";
import { useMemo } from "react";
import cn from "classnames";
import { useColorMode } from "../providers/ColormodeProvider";

function Navbar() {
  // USE HOOK: "Functions that has states"
  const { wallet, connect, disconnect } = useWallet();
  const { toggleTheme } = useColorMode();

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
        "container",
        "items-center",
        "py-8",
        "px-4",
        "mx-auto",
        "flex",
        "justify-between"
      )}
    >
      <a href="/">
        <h1 className={cn("text-white", "font-bold", "pt-2", "text-2xl")}>
          <b>
            {" "}
            <i>ZILSBT</i>
          </b>{" "}
          <svg
            width="38"
            height="38"
            className="inline-block ml-2 w-6"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_37_204)">
              <path
                d="M17.2559 25.524C16.484 24.1881 15.8309 22.815 15.2371 21.4271C12.6246 25.8877 10.9473 30.8306 10.2941 35.9369C15.2891 38.5049 21.3156 38.8017 26.7113 36.4045C23.0004 33.4877 19.757 29.8584 17.2559 25.524ZM19.2004 23.483C21.7609 27.9732 25.1973 31.8994 29.2941 35.0166C34.0145 31.9736 37.2875 26.897 37.9035 21.0338C33.5246 22.7853 28.7598 23.7799 23.7574 23.7799C22.2137 23.7799 20.6996 23.6611 19.2004 23.483ZM15.0367 16.9592C9.86367 16.9295 4.74258 17.9463 0 19.9353C0.274609 25.5463 3.02812 30.9123 7.80781 34.3857C8.47578 29.7174 9.99727 25.0935 12.5059 20.7592C13.2703 19.4232 14.1313 18.1689 15.0367 16.9592ZM18.7996 14.5545C16.2391 10.0642 12.8027 6.13064 8.70586 3.02087C3.98555 6.06384 0.7125 11.1404 0.0964844 17.0037C4.47539 15.2521 9.24023 14.2576 14.2426 14.2576C15.7863 14.2576 17.3004 14.3763 18.7996 14.5545ZM20.7441 12.5209C21.516 13.8568 22.1691 15.2299 22.7629 16.6177C25.3754 12.1572 27.0527 7.21423 27.7059 2.10798C22.7109 -0.459986 16.6844 -0.756861 11.2887 1.6404C14.9996 4.54978 18.243 8.1865 20.7441 12.5209ZM22.9633 21.0783C28.1363 21.108 33.2574 20.0912 38 18.1021C37.7254 12.4912 34.9719 7.12517 30.1996 3.65173C29.5316 8.32009 28.0027 12.9439 25.5016 17.2783C24.7297 18.6142 23.8687 19.8685 22.9633 21.0783Z"
                fill="#0080FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_37_204">
                <rect width="38" height="38" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </h1>
      </a>

      <div className="flex items-center space-x-4">
        <div className="flex m-3">
          <Switch onClick={() => toggleTheme()} />
        </div>
        <Link className="nav-link hover:text-blue-600" to="profiles">
          Profiles
        </Link>
        <Link className="nav-link hover:text-blue-600" to="educational">
          Educate
        </Link>
        {wallet ? (
          <div className={cn("flex", "items-center", "gap-4")}>
            <h1 className={cn("lowercase", "text-white text-lg")}>
              {walletAddress}
            </h1>

            <Button className="button-primary" onClick={() => disconnect()}>
              <AiOutlineLogout />
            </Button>
          </div>
        ) : (
          <Button onClick={() => connect()}>
            Connect <BsWallet className="inline-block" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
