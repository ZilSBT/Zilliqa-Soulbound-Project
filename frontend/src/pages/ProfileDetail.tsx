import { useCallback, useEffect, useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useZilliqa } from "../providers/ZilliqaProvider";
import { Profile } from "../types/types";
// import { Link } from "react-router-dom";
import Button from "../components/Button";
import { scillaJSONParams } from "@zilliqa-js/scilla-json-utils";
import { useWallet } from "../providers/WalletProvider";
import { Icon } from "@iconify/react";
import { ReactComponent as Zill } from "../assets/zill.svg";

const ProfileDetail = () => {
  const { address } = useParams();
  const { zilliqa } = useZilliqa();
  const [profile, setProfile] = useState<Profile | null>(null);
  // const [copied, setCopied] = useState<Boolean>();
  const [description, setDescription] = useState<string>();
  const { wallet, callContract } = useWallet();
  const [allowedToBurn, setallowedToBurn] = useState<Boolean>(false);

  const getZBTStates = useCallback(async () => {
    if (address) {
      const states = await zilliqa.contracts
        .at("0xb019d93b6ad4b8e7339a1042ede50341a77cca0f")
        .getState();

      const balance = await zilliqa.blockchain.getBalance(address);
      const result = balance.result.balance;
      const result_float = result / 1000000000000;

      try {
        const data = await fetch(states.token_uris[address][1]).then((res) =>
          res.json()
        );
        setProfile({
          address,
          profile_uri: states.token_uris[address][0],
          data_uri: states.token_uris[address][1],
          balance: result_float,
          data,
        });
      } catch (err) {
        console.log(err);
      }
      try {
        const userData = await fetch(states.token_uris[address][1]).then(
          (res) => res.json()
        );
        setDescription(userData.id);
      } catch (err) {
        console.log(err);
      }
    }
  }, [address, zilliqa.contracts, zilliqa.blockchain]);

  const copyToClipboard = useCallback((text: any) => {
    navigator.clipboard?.writeText(text);
    // setCopied(true);
    setTimeout(() => {
      // setCopied(false);
    }, 2000);
  }, []);

  const Burn = useCallback(async () => {
    console.log("Burn ");
    try {
      const tx = await callContract(
        "Burn",
        scillaJSONParams({
          to: ["ByStr20", profile?.address],
        })
      );

      console.log(tx.isPending());
      console.log(tx.isConfirmed());
      console.log("YAAAAY");
    } catch (error) {
      console.log(error);
    }
  }, [callContract, profile?.address]);

  useEffect(() => {
    getZBTStates();

    if (address) {
      if (wallet) {
        if (address === wallet.defaultAccount.base16.toString().toLowerCase()) {
          setallowedToBurn(true);
        }
      } else {
        setallowedToBurn(false);
      }
    }
  }, [getZBTStates, address, wallet, allowedToBurn]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8&w=1000&q=80"
        alt=""
        className="profile-cover-img"
      />
      <section className="profile-details">
        <div className="container">
          <div className="flex flex-between">
            <div>
              <img src={profile.profile_uri} alt="" />
              <h3>@{profile.data?.name}</h3>
              <p>
                <Icon icon="entypo:wallet" className="inline-block" />
                {String(profile.address).substring(0, 6) +
                  "..." +
                  String(profile.address).substring(38)}{" "}
                <AiOutlineCopy
                  onClick={() => {
                    copyToClipboard(address);
                  }}
                  className="clipboard-icon"
                />
              </p>
              <p>
                <Zill />
                {profile.balance.toFixed(2)}
              </p>
              <p>{description}</p>
            </div>
            <div className="flex-self-end justify-end social-bar">
              <div className="flex social-bar-icons">
                <Icon icon="brandico:instagram-filled" width="20" />
                <Icon icon="brandico:twitter-bird" width="25" />
                <Icon icon="ci:share" width="22" />
              </div>
              <div className="flex flex-col space-y">
                <a href="/" className="btn btn-secondary">
                  Earn Now
                </a>
                <Button
                  className="btn btn-red block bg-red-600"
                  onClick={() => Burn()}
                >
                  Burn Profile
                </Button>
              </div>
              {/* {allowedToBurn ? (
                <Button
                  className="button-primary bg-red-600"
                  onClick={() => Burn()}
                >
                  Burn Profile
                </Button>
              ) : (
                ""
              )} */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileDetail;
