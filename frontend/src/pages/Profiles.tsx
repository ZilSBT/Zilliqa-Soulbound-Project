// import cn from 'classnames';
// import { profile } from 'console';
// import { request } from 'https';
import { useCallback, useEffect, useState } from "react";
// import Table from '../components/Table/Table';
// import TableCell from '../components/Table/TableCell';
// import TableHead from '../components/Table/TableHead';
import { useZilliqa } from "../providers/ZilliqaProvider";
import { Profile } from "../types/types";
import { Icon } from "@iconify/react";
import { ReactComponent as Zill } from '../assets/zill.svg';
export default function Profiles() {
  const { zilliqa } = useZilliqa();
  const [profiles, setProfiles] = useState<Profile[] | null>(null);

  const getZBTStates = useCallback(async () => {
    const states = await zilliqa.contracts
      .at("0xb019d93b6ad4b8e7339a1042ede50341a77cca0f")
      .getState();

    const _profiles = [];

    for (let address in states.token_uris) {
      const balance = await zilliqa.blockchain.getBalance(address);
      const result = balance.result.balance;
      const result_float = result / 1000000000000;
      try {
        const data = await fetch(states.token_uris[address][1]).then((res) =>
          res.json()
        );

        const profile = {
          address,
          profile_uri: states.token_uris[address][0],
          data_uri: states.token_uris[address][1],
          balance: result_float,
          data,
        };
        _profiles.push(profile);
        // balance
      } catch (err) {
        console.log(err);
      }
    }

    setProfiles(_profiles);
  }, [zilliqa.contracts, zilliqa.blockchain]);
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
    <section className="profiles">
      <div className="wrapper">
        <h1 className="uppercase text-center">Profiles</h1>
        <div className="grid">
        {profiles.map(({ address, profile_uri, data_uri, balance, data }) => (
        <div onClick={()=> window.open(`profiles/${address}`)} className="card">
        <div className="card-top">
          <img className="radius-full center" src={profile_uri} alt="" />
        </div>
        <div className="card-bottom card-container">
          <div className="flex flex-between flex-items-center">
            <div>
              <h3>@{data?.name}</h3>
              <p>
                <Icon icon="entypo:wallet" width='25' className="inline" />
                {String(address).substring(0, 6) +
                  "..." +
                  String(address).substring(38)}
              </p>
              <p>
                <Zill/>
                {balance}
              </p>
            </div>
            <a className="text-white" href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/${address}`}>
            <Icon icon="ci:share" width="30" />
            </a>
          </div>
        </div>
      </div>
      ))}
        </div>
      </div>
    </section>
  );
}
