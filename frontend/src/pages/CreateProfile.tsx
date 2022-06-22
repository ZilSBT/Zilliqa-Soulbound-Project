import { scillaJSONParams } from "@zilliqa-js/scilla-json-utils";
import React from "react";
import { useForm } from "react-hook-form";

import { AiOutlineBlock } from "react-icons/ai";
import Button from "../components/Button";
import { usePinata } from "../providers/PinataProvider";
import { useWallet } from "../providers/WalletProvider";
import { useZilliqa } from "../providers/ZilliqaProvider";

const FormField = ({
  id,
  label,
  register,
  errors,
  ...inputProps
}: {
  id: string;
  label: string;
  register: any;
  errors: any;
} & React.HTMLProps<HTMLInputElement>) => {
  return (
    <div className="md:flex md:items-center mb-7">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
      <div className="md:w-2/3 relative">
        <input
          {...register(id)}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 invalid:border-red-500"
          id={id}
          {...inputProps}
        ></input>
        <p className="h-6 absolute top-11 text-xs font-bold text-red-400 transition-all">
          {errors[id]?.message}
        </p>
      </div>
    </div>
  );
};

const CreateProfile = () => {
  const { callContract } = useZilliqa();
  const { wallet } = useWallet();
  const { pinata } = usePinata();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = handleSubmit(async ({ walletAddress, ...data }) => {
    // TODO: upload profile picture to ipfs
    const { IpfsHash: dataIpfsHash } = await pinata.pinJSONToIPFS({
      ...data,
    });

    const tx = await callContract(
      "MintToken",
      scillaJSONParams({
        to: ["ByStr20", walletAddress],
        picture_uri: [
          "String",
          "https://gateway.pinata.cloud/ipfs/QmSRQbU3FVyxDoFpd9dKVR3kPgHtLNXLy7kF7Pkh1bBFwA",
        ],
        data_uri: [
          "String",
          `https://gateway.pinata.cloud/ipfs/${dataIpfsHash}`,
        ],
      })
    );

    // TODO: Check for transaction conformation
    console.log(tx);
  });

  return (
    <div className="flex justify-between items-center flex-col">
      <div className="h-52 w-full rounded bg-gray-100 mb-16 flex justify-center items-center">
        <p>SOME CONTENT</p>
      </div>
      <form onSubmit={onSubmit} className="w-full max-w-md ">
        <FormField
          id="walletAddress"
          label="Wallet Address"
          register={register}
          errors={errors}
          defaultValue={wallet && wallet.defaultAccount.base16}
          disabled={wallet}
        />

        <FormField id="name" label="Name" register={register} errors={errors} />

        <FormField
          id="description"
          label="Description"
          register={register}
          errors={errors}
        />

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <Button type="submit">
              <AiOutlineBlock className="scale-150" />
              Mint
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProfile;
