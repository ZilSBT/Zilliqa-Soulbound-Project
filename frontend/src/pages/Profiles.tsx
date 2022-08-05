// import cn from 'classnames';
// import { profile } from 'console';
// import { request } from 'https';
import { useCallback, useEffect, useState } from "react";
import { useZilliqa } from "../providers/ZilliqaProvider";
import { Profile } from "../types/types";
import { Icon } from "@iconify/react";
import { ReactComponent as Zill } from "../assets/zill.svg";
export default function Profiles() {
  const { zilliqa } = useZilliqa();
  const [searchStr, setSearch] = useState<string>("");
  const [profiles, setProfiles] = useState<Profile[] | null>([]);

  const getZBTStates = useCallback(async () => {
    const states = await zilliqa.contracts
      .at("0xcA556322b3fc4947daE0B9cbbFeB1e2e2425Df4A")
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

  const filtered = profiles?.filter(({ data }) =>
    data.name.toLowerCase().includes(searchStr.toLowerCase())
  );

  if (!profiles) return <div>Loading...</div>;

  return (
    <section className="profiles">
      <div className="container">
        <h1 className="uppercase">Profiles</h1>
        <div className="profiles-search">
          <Icon icon="charm:search" color="gray" id="search-icon" />
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Search username..."
          />
        </div>
        <div className="grid">
          {filtered && filtered.length !== 0 ? (
            filtered?.map(
              ({ address, profile_uri, data_uri, balance, data }) => {
                return (
                  <div
                    onClick={() => window.open(`profiles/${address}`, "_self")}
                    className="card"
                  >
                    <div className="card-top">
                      <img
                        className="radius-full center"
                        src={profile_uri}
                        alt=""
                      />
                    </div>
                    <div className="card-bottom card-container">
                      <div className="flex flex-between flex-items-center">
                        <div>
                          <h3>@{data?.name}</h3>
                          <p>
                            <Icon
                              icon="entypo:wallet"
                              width="25"
                              className="inline"
                            />
                            {String(address).substring(0, 6) +
                              "..." +
                              String(address).substring(38)}
                          </p>
                          <p>
                            <Zill />
                            {balance}
                          </p>
                        </div>
                        <a
                          className="text-white"
                          href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/${address}`}
                        >
                          <Icon icon="ci:share" width="30" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            )
          ) : (
            <div>No Result Found</div>
          )}
        </div>
      </div>
    </section>
  );
}
