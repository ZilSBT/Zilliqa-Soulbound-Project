import logo from "../../public/img/ZSBT-logos.jpeg";

import Link from "../components/Link";
import AdaptiveContent from "../components/AdaptiveContent";
import { AdaptiveContentProps } from "../types/types";

const content: AdaptiveContentProps[] = [
  {
    title: "Neo Savant IDE",
    subtitle: "Setting up the Neo Savant IDE",
    content:
      "Head to Neo Savant IDE. Switch network to testnet and create an account.",
  },
  {
    title: "Scilla Language",
    subtitle: "Writing your smart contract",
    content:
      "Refer to the smart contracts in our github repository.(Zilliqa-Soulbound-Project/contract/example/proxy.scilla) modify it such that you can call the transition Earn_achievement in SBT_profile.",
  },
  {
    title: "Achievement Unlocked!",
    subtitle: "Deploying the smart contract and earnign the achievement",
    content:
      "After deploying the smart contract and calling the Earn_achievement transition, you have now earned your achievement! It should be displayed in your profile",
  },
];

export default function Landing() {
  return (
    <div className="text-gray-700 dark:text-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
            Deploy a smart contract and earn your achievement!
          </h1>

          {content.map((items) => (
            <AdaptiveContent
              title={items.title}
              subtitle={items.subtitle}
              content={items.content}
            />
          ))}

          <div className="flex justify-center mt-3">
            <Link to="/create-profile">Minting Page</Link>
          </div>
        </div>
        <div className=" rounded lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            alt="logo"
            src={logo}
            className="object-cover object-center rounded"
          />
        </div>
      </div>
    </div>
  );
}
