// import cn from 'classnames';
// import { profile } from 'console';
// import { request } from 'https';
import { useCallback, useEffect, useState } from 'react';
// import Table from '../components/Table/Table';
// import TableCell from '../components/Table/TableCell';
// import TableHead from '../components/Table/TableHead';
import { useZilliqa } from '../providers/ZilliqaProvider';
import { Profile } from '../types/types';

export default function Profiles() {
  const { zilliqa } = useZilliqa();
  const [profiles, setProfiles] = useState<Profile[] | null>(null);
  const [balance, setBalance] = useState<number>(0);

  const getZBTStates = useCallback(async () => {
    const states = await zilliqa.contracts
      .at('0xf6fc98103b75c7e6b2b690e3419f66360ba32e8b')
      .getState();

    const _profiles = [];
    for (let address in states.token_uris) {
      try {
        const data = await fetch(states.token_uris[address][1]).then((res) =>
          res.json(),
        );

        const profile = {
          address,
          profile_uri: states.token_uris[address][0],
          data_uri: states.token_uris[address][1],
          data,
        };
        _profiles.push(profile);
        // balance
        const balance = await zilliqa.blockchain.getBalance(profile.address);
        const result = balance.result.balance;
        const result_float = result / 1000000000000;
        setBalance(result_float);
      } catch (err) {
        console.log(err);
      }
    }

    setProfiles(_profiles);
  }, [zilliqa.contracts]);
  // const names = profiles?.map(({ data_uri }) => {
  //   fetch(data_uri)
  //     .then((response) => response.json())
  //     .then((data) => data.name);
  // });
  useEffect(() => {
    getZBTStates();
  }, [getZBTStates]);

  if (!profiles) return <div>Loading...</div>;

  return (
    <div className="container h-full mx-auto">
      <h2 className="text-center mb-8">Zilsbt Profiles</h2>
      <div className="grid w-full md:grid-cols-2 xl:grid-cols-4 justify-items-center gap-y-8">
        {/* <h1 className={cn('text-xl', 'font-bold')}>Profiles</h1>
      <Table>
        <thead className="border-b bg-gray-800">
          <tr>
            <TableHead>Owner Address</TableHead>
            <TableHead>Profle_URI</TableHead>
            <TableHead>Data_URI</TableHead>
          </tr>
        </thead>
        <tbody> */}
        {profiles.map(({ address, profile_uri, data_uri, data }) => (
          <div className="card">
            <a href={`/profiles/${address}`}>
              <div className="card-image">
                <img src={profile_uri} title="" alt=""></img>
              </div>
              <div className="px-5 py-2">
                <div className="mb-4">
                  <p className="card-name mt-4">@{data?.name}</p>
                  <div className="flex mt-2 mb-2">
                    <img
                      src="https://i.postimg.cc/zBDtJMJk/image-1.png"
                      width="30"
                      alt=""
                    />
                    <p className="text-md text-gray-200 flex items-center">
                      {String(address).substring(0, 6) +
                        '...' +
                        String(address).substring(38)}
                    </p>
                  </div>
                  <div className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 59 83"
                      fill="none"
                      className="w-4 ml-1 mr-1"
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
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_0_1"
                          x1="2.3265"
                          y1="3.81937"
                          x2="57.7694"
                          y2="23.5946"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_0_1"
                          x1="52.5606"
                          y1="37.7901"
                          x2="52.8505"
                          y2="82.8535"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p className="text-lg text-white flex items-center">
                      {balance}
                    </p>
                    <a
                      href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/${address}`}
                      className="ml-auto w-5 pl-4 mr-6"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_58_309)">
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
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
