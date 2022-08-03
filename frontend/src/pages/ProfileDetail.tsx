import { useCallback, useEffect, useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useZilliqa } from "../providers/ZilliqaProvider";
import { Profile } from "../types/types";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { scillaJSONParams } from "@zilliqa-js/scilla-json-utils";
import { useWallet } from "../providers/WalletProvider";

const ProfileDetail = () => {
  const { address } = useParams();
  const { zilliqa } = useZilliqa();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [copied, setCopied] = useState<Boolean>();
  const [description, setDescription] = useState<string>();
  const { wallet, callContract } = useWallet();
  const [allowedToBurn, setallowedToBurn] = useState<Boolean>(false);

  const getZBTStates = useCallback(async () => {
    if (address) {
      const states = await zilliqa.contracts
        .at("0xcA556322b3fc4947daE0B9cbbFeB1e2e2425Df4A")
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
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
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
    <>
      <img
        className="profile-cover"
        //hardcode img
        src="https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8&w=1000&q=80"
        alt=""
      />
      <div className="container px-6 mx-auto profile-details hover:text-black">
        <img src={profile.profile_uri} alt="" className="profile-img" />
        <div className="flex justify-between">
          <div className="profile-bio">
            <p className="profile-name">@{profile.data?.name}</p>
            {/* wallet and amount */}
            <div className="flex items-center mt-2 mb-2">
              <img
                src="https://i.postimg.cc/zBDtJMJk/image-1.png"
                width="30"
                alt=""
              />
              <p className="text-md text-gray-200 flex items-center">
                {String(address).substring(0, 6) +
                  "..." +
                  String(address).substring(38)}
              </p>
              <AiOutlineCopy
                onClick={() => {
                  copyToClipboard(address);
                }}
                className="ml-2 cursor-pointer"
              />
            </div>
            <div className="flex items-center">
              <svg
                width="34"
                height="34"
                viewBox="0 0 59 83"
                fill="none"
                className="mr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.5611 39.6676L14.6193 55.4641L46.5611 70.6903V82.9687L0.0255025 60.7895L0 48.7033L32.3818 32.7017L0.0255025 17.2833V5.00488L46.5611 27.1841V39.6676Z"
                  fill="url(#paint0_linear_0_1)"
                />
                <path
                  d="M0.0249023 5.00491L12.3235 0L58.8591 22.1728L46.5606 27.1842L0.0249023 5.00491Z"
                  fill="url(#paint1_linear_0_1)"
                />
                <path
                  d="M46.5612 70.6905V46.1466L58.8597 40.4624V77.9576L46.5612 82.9689V70.6905Z"
                  fill="url(#paint2_linear_0_1)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_1"
                    x1="46.593"
                    y1="83.4429"
                    x2="7.44516"
                    y2="17.8244"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#05707E" />
                    <stop offset="0.52" stopColor="#2B9297" />
                    <stop offset="1" stopColor="#4DBBBA" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_1"
                    x1="2.3265"
                    y1="3.81937"
                    x2="57.7694"
                    y2="23.5946"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#05707E" />
                    <stop offset="0.52" stopColor="#2B9297" />
                    <stop offset="1" stopColor="#4DBBBA" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_0_1"
                    x1="52.5606"
                    y1="37.7901"
                    x2="52.8505"
                    y2="82.8535"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#05707E" />
                    <stop offset="0.52" stopColor="#2B9297" />
                    <stop offset="1" stopColor="#4DBBBA" />
                  </linearGradient>
                </defs>
              </svg>

              <p className="profile-amount text-white flex items-center">
                {profile.balance}
              </p>
            </div>
          </div>
          {/* educate button */}

          <div className="mt-12 flex sm:space-x-0 md:space-x-3 social-bar">
            {/* social handles */}

            {/* instagram icon */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.6399 13.544C32.6242 12.3638 32.4032 11.1954 31.987 10.091C31.626 9.15939 31.0747 8.31336 30.3683 7.60691C29.6618 6.90047 28.8158 6.34916 27.8842 5.9882C26.794 5.57894 25.6422 5.35765 24.478 5.33375C22.979 5.26675 22.5037 5.24805 18.6986 5.24805C14.8934 5.24805 14.4057 5.24805 12.9176 5.33375C11.7539 5.35783 10.6026 5.57912 9.5129 5.9882C8.58118 6.34891 7.73502 6.90013 7.02854 7.60661C6.32207 8.31308 5.77084 9.15925 5.41013 10.091C5.00006 11.1804 4.77925 12.3318 4.75724 13.4957C4.69024 14.9962 4.66998 15.4715 4.66998 19.2766C4.66998 23.0818 4.66998 23.5679 4.75724 25.0576C4.78062 26.2231 5.00032 27.3731 5.41013 28.4654C5.77145 29.3968 6.32308 30.2427 7.02979 30.9488C7.7365 31.655 8.58275 32.206 9.51446 32.5666C10.6012 32.9923 11.7526 33.2294 12.9192 33.2678C14.4197 33.3348 14.895 33.3551 18.7001 33.3551C22.5053 33.3551 22.993 33.3551 24.4811 33.2678C25.6453 33.2449 26.7971 33.0241 27.8873 32.6149C28.8187 32.2535 29.6645 31.7021 30.3709 30.9957C31.0773 30.2893 31.6287 29.4435 31.9901 28.5121C32.3999 27.4214 32.6196 26.2714 32.643 25.1043C32.71 23.6053 32.7302 23.1301 32.7302 19.3234C32.7271 15.5182 32.7271 15.0352 32.6399 13.544ZM18.6892 26.4724C14.7095 26.4724 11.4856 23.2485 11.4856 19.2688C11.4856 15.2892 14.7095 12.0652 18.6892 12.0652C20.5997 12.0652 22.432 12.8242 23.7829 14.1751C25.1339 15.526 25.8928 17.3583 25.8928 19.2688C25.8928 21.1793 25.1339 23.0116 23.7829 24.3625C22.432 25.7135 20.5997 26.4724 18.6892 26.4724ZM26.1795 13.4785C25.9589 13.4787 25.7404 13.4354 25.5365 13.3511C25.3326 13.2667 25.1473 13.143 24.9913 12.987C24.8353 12.831 24.7116 12.6457 24.6272 12.4418C24.5429 12.2379 24.4996 12.0194 24.4998 11.7988C24.4998 11.5783 24.5432 11.36 24.6276 11.1563C24.712 10.9525 24.8356 10.7675 24.9915 10.6116C25.1474 10.4556 25.3325 10.332 25.5362 10.2476C25.7399 10.1632 25.9583 10.1198 26.1787 10.1198C26.3992 10.1198 26.6176 10.1632 26.8213 10.2476C27.025 10.332 27.2101 10.4556 27.366 10.6116C27.5219 10.7675 27.6455 10.9525 27.7299 11.1563C27.8143 11.36 27.8577 11.5783 27.8577 11.7988C27.8577 12.7275 27.1067 13.4785 26.1795 13.4785Z"
                fill="#D9D9D9"
              />
              <path
                d="M18.6892 23.948C21.2735 23.948 23.3685 21.853 23.3685 19.2687C23.3685 16.6844 21.2735 14.5894 18.6892 14.5894C16.1049 14.5894 14.0099 16.6844 14.0099 19.2687C14.0099 21.853 16.1049 23.948 18.6892 23.948Z"
                fill="#D9D9D9"
              />
            </svg>

            {/* twitter icon */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.9928 7.14245C33.7917 7.67464 32.5015 8.03423 31.1452 8.19676C32.5447 7.35935 33.5917 6.04135 34.0909 4.4887C32.776 5.26971 31.337 5.81945 29.8363 6.11404C28.8271 5.03652 27.4904 4.32232 26.0338 4.08233C24.5771 3.84234 23.0819 4.08998 21.7804 4.7868C20.4789 5.48363 19.4439 6.59065 18.836 7.936C18.2281 9.28134 18.0814 10.7897 18.4187 12.227C15.7544 12.0932 13.148 11.4008 10.7687 10.1945C8.38938 8.98823 6.29029 7.29515 4.60765 5.22514C4.03231 6.2176 3.70149 7.36828 3.70149 8.59375C3.70085 9.69695 3.97252 10.7833 4.4924 11.7563C5.01229 12.7293 5.76431 13.559 6.68175 14.1717C5.61776 14.1378 4.57726 13.8503 3.64683 13.3331V13.4194C3.64672 14.9667 4.18194 16.4664 5.16167 17.664C6.14141 18.8616 7.5053 19.6833 9.02194 19.9898C8.03492 20.2569 7.00011 20.2963 5.99565 20.1049C6.42356 21.4362 7.25708 22.6004 8.37952 23.4345C9.50197 24.2686 10.8572 24.7308 12.2553 24.7565C9.88183 26.6197 6.95055 27.6304 3.93306 27.626C3.39854 27.6261 2.86448 27.5949 2.33362 27.5325C5.39655 29.5018 8.96202 30.547 12.6034 30.5429C24.9301 30.5429 31.6687 20.3335 31.6687 11.4791C31.6687 11.1914 31.6615 10.9009 31.6486 10.6132C32.9594 9.66528 34.0908 8.49148 34.9899 7.14677L34.9928 7.14245Z"
                fill="#D9D9D9"
              />
            </svg>

            {/* share icon */}
            <a
              href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/${address}`}
              className="mt-1"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_58_309)">
                  <path
                    d="M16.5002 3.74998C16.5 2.87013 16.8093 2.01826 17.3739 1.3434C17.9384 0.668542 18.7223 0.213678 19.5883 0.0583884C20.4543 -0.0969011 21.3474 0.0572728 22.1112 0.493936C22.8751 0.9306 23.4611 1.62195 23.7667 2.44702C24.0723 3.27209 24.078 4.17835 23.7829 5.00724C23.4879 5.83613 22.9107 6.53487 22.1525 6.9812C21.3942 7.42753 20.5032 7.59304 19.6352 7.44876C18.7673 7.30448 17.9777 6.85961 17.4047 6.19198L7.32765 10.872C7.55932 11.6061 7.55932 12.3938 7.32765 13.128L17.4047 17.808C18.0104 17.1035 18.8561 16.6489 19.7779 16.5325C20.6997 16.416 21.632 16.6458 22.3939 17.1775C23.1559 17.7092 23.6934 18.5048 23.9022 19.4102C24.1109 20.3155 23.9762 21.2662 23.524 22.0778C23.0719 22.8895 22.3345 23.5044 21.4548 23.8034C20.5751 24.1024 19.6157 24.0642 18.7626 23.6961C17.9095 23.328 17.2233 22.6564 16.8372 21.8113C16.4511 20.9662 16.3925 20.0079 16.6727 19.122L6.59565 14.442C6.09681 15.0233 5.43188 15.438 4.69032 15.6301C3.94876 15.8222 3.16615 15.7827 2.44776 15.5167C1.72937 15.2507 1.10967 14.7711 0.672015 14.1424C0.234362 13.5137 -0.000244141 12.766 -0.000244141 12C-0.000244141 11.2339 0.234362 10.4863 0.672015 9.85755C1.10967 9.22884 1.72937 8.74923 2.44776 8.48326C3.16615 8.21729 3.94876 8.17772 4.69032 8.36985C5.43188 8.56199 6.09681 8.97663 6.59565 9.55798L16.6727 4.87798C16.5579 4.51298 16.4998 4.13258 16.5002 3.74998Z"
                    fill="#E6E6E6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_58_309">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>

        {/* profile-description */}
        <div className="profile-description">
          <div> Description :</div>
          {description ? description : "N/A"}
        </div>

        <Link to="/educational" className="cta-secondary my-4">
          Earn Achievement
        </Link>
        {allowedToBurn ? (
          <Button className="button-primary bg-red-600" onClick={() => Burn()}>
            Burn Profile
          </Button>
        ) : (
          ""
        )}
      </div>
      {copied && (
        <div className="absolute flex justify-center w-full top-5 left-0">
          <p className="bg-blue-500 px-5 py-2 text-center">Copied!</p>
        </div>
      )}
    </>
  );
};

export default ProfileDetail;
