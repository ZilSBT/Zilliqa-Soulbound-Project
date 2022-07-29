import DropArea from "../components/DropArea";
import AdaptiveContent from "../components/AdaptiveContent";
import { AdaptiveContentProps } from "../types/types";

const content: AdaptiveContentProps[] = [
  {
    title: "Prerequisites for Minting an SBT",
    subtitle: "Setting up some TestNet Zil ",
    content: "Install ZilPay and familiarize yourself with the wallet .",
    subcontent:
      "Then head over to the Official Zil faucet and request some Test Zil for your wallet." +
      " Now you are ready to Mint your SBT Profile ",
  },
];
const CreateProfile = () => {
  return (
    <div>
      {content.map((items) => (
        <AdaptiveContent
          title={items.title}
          subtitle={items.subtitle}
          content={items.content}
          subcontent={items.subcontent}
        />
      ))}
      <div>
        <DropArea />
      </div>
    </div>
  );
};

export default CreateProfile;
