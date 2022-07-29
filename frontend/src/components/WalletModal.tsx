import Button from "./Button";
import cn from "classnames";
import { useState } from "react";
const WalletModal = () => {
  const [close, setClose] = useState(true);
  return (
    <>
      {close ? (
        <div
          className={cn(
            "w-[100%]",
            "h-[100vh]",
            "bg-[#000d]",
            "flex",
            "trasition-all",
            " duration-100",
            "ease-in-out",
            "absolute",
            "justify-center",
            "items-center",
            "top-0",
            "hidden",
            "left-0",
            "mt-[-100vh]",
            "walletModal"
          )}
          style={{ display: "" }}
          id="walletModal"
        >
          <div className="bg-slate-900 w-[90%] relative gap-3 flex flex-col justify-center min-h-[20vh] md:w-[50%]">
            <div className="flex justify-center">
              <h4
                className="text-gray-300 cursor-pointer text-3xl absolute top-4 right-8"
                onClick={() => setClose(false)}
              >
                X
              </h4>
              <h1 className="text-lg">
                ZillPay Wallet is not installed.{" "}
                <a
                  href="https://chrome.google.com/webstore/detail/zilpay/klnaejjgbibmhlephnhpmaofohgkpgkd?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  install now
                </a>
              </h1>
            </div>

            <div className="flex justify-center">
              <Button>
                <a
                  className="block"
                  href="https://zilpay.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Wallet
                </a>
              </Button>
            </div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>hel</div>
      )}
    </>
  );
};

export default WalletModal;
