import logo from "../../public/img/ZSBT-logos.jpeg";

import Link from "../components/Link";
import AdaptiveContent from "../components/AdaptiveContent";
import { AdaptiveContentProps } from "../types/types";

const content: AdaptiveContentProps[] = [
  {
    title: "The Set Up",
    subtitle: "Setting up the Neo Savant IDE and Zilpay wallet",
    content:
      "Head to Neo Savant IDE. Create another account on your ZilPay. Request testnet $ZIL from faucet. Switch to testnet on your IDE.",
    subcontent: " ",
  },
  {
    title: "Scilla Language",
    subtitle: "Writing your smart contract",
    content:
      "Create a new file by clicking the file icon on the upper left corner. Refer to the smart contracts in our github repository.(Zilliqa-Soulbound-Project/contract/example/proxy.scilla) modify it such that you can call the transition Earn_achievement in SBT_profile.",
    subcontent: " ",
  },

  {
    title: "Achievement Unlocked!",
    subtitle: "Deploying the smart contract and earning the achievement",
    content:
      "After deploying the smart contract and calling the Earn_achievement transition, you have now earned your achievement! It should be displayed in your profile",
    subcontent:
      " There is an example scilla smart contract that achieves this at address : 0xde5a7833f99c421ac4803d50c0bca031fe234c2b. It takes as parameters our core contract address : 0xb019d93b6ad4b8e7339a1042ede50341a77cca0f and the receipient wallet address . Check out the sample in the Zilliqua Explorer if you get stuck. Good Luck .  ",
  },
];

export default function Educational() {
  return (
    <div className="text-white dark:text-white body-font">
      <div className="zsbt-logo">
        <img
          alt="logo"
          src={logo}
          className="object-cover object-center rounded"
        />
      </div>
      <div className="container mx-auto px-5 py-24 md:flex-row flex items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white dark:text-white">
            Deploy a smart contract and earn your achievement!
          </h1>

          {content.map((items) => (
            <AdaptiveContent
              key={items.title}
              title={items.title}
              subtitle={items.subtitle}
              content={items.content}
              subcontent={items.subcontent}
            />
          ))}

          <div className="flex justify-center mt-3">
            <Link to="/profiles">View Profiles</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
