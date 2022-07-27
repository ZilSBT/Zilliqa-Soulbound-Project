import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useStorage } from "../providers/Web3StorageProvider";
import { useWallet } from "../providers/WalletProvider";
import { useForm } from "react-hook-form";
import { scillaJSONParams } from "@zilliqa-js/scilla-json-utils";
import React, { useEffect } from "react";
import { AiOutlineBlock } from "react-icons/ai";
import { FcImageFile } from "react-icons/fc";
import Button from "../components/Button";
import Loader from "../assets/loader.gif";
import cn from "classnames";
import Link from "../components/Link";
import { Contracts } from "@zilliqa-js/contract";
import transitionMessageAlert from "../functions/transitionMessageAlert";

declare global {
  interface Window {
    // TODO: Complete type declaration
    zilPay?: {
      contracts: Contracts;
      wallet: any;
    };
  }
}
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
    <div className="mb-4">
      <div className="w-full">
        <label className="block text-white font-bold mb-1 md:mb-0" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="md:w-2/3 relative">
        <input
          {...register(id)}
          className="block bg-gray-300 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 invalid:border-red-500"
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

const DropArea = () => {
  const [data, setData] = useState<ArrayBuffer | string | null | undefined>(
    null
  );
  const { storeFiles, storeJson } = useStorage();
  const { wallet, callContract } = useWallet();
  const [minting, setMinting] = useState<boolean>(false);
  // const { callContract } = useZilliqa();
  const [err, setErr] = useState<string | boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setLoading] = useState<string | boolean>(false);
  const [isMinted, setMinted] = useState<string | boolean>(false);
  const zilPay = window.zilPay;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    if (wallet) {
      setValue("walletAddress", wallet.defaultAccount.base16);
    }
  }, [setValue, wallet]);

  const uploadImage = () => {
    // Router.push(`/result?url=${imageURI}`);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 30000);
  };
  const onSubmit = handleSubmit(async ({ walletAddress, ...data }) => {
    setMinting(true);
    //TODO : input validation before creating links

    const imageURI = await storeFiles(file);

    //TODO , Add additional information such as social media handles.
    const jsonString = JSON.stringify({
      name: `${data.name}`,
      id: `${data.description}`,
    });
    const nameUri = await storeJson(jsonString);

    const tx = await callContract(
      "Mint",
      scillaJSONParams({
        to: ["ByStr20", walletAddress],
        picture_uri: ["String", `${imageURI}`],
        data_uri: ["String", `${nameUri}`],
      })
    );

    const message = await transitionMessageAlert(
      zilPay,
      tx.ID,
      "Creating user",
      setMinting
    );
    console.log(message);
    // TODO: Check for transaction conformation
    // console.log("transaction: %o", tx.id);
    // console.log(JSON.stringify(tx.receipt, null, 4));
    try {
      console.log(tx);
      console.log(tx.isConfirmed);
      console.log(tx.isLoading);
      console.log(tx.isPending);
      console.log("HELLO ??");
    } catch (error) {
      console.log(error);
    }

    uploadImage();

    setMinted(true);
  });

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const {
      dataTransfer: { files },
    } = e;
    const { length } = files;
    const reader = new FileReader();
    if (length === 0) {
      return false;
    }
    const fileTypes = ["image/jpeg", "image/jpg", "image/png"];
    const { size, type } = files[0];
    setData(null);
    // Limit to either image/jpeg, image/jpg or image/png file
    if (!fileTypes.includes(type)) {
      setErr("File format must be either png or jpg");
      return false;
    }
    // Check file size to ensure it is less than 2MB.
    if (size / 1024 / 1024 > 2) {
      setErr("File size exceeded the limit of 2MB");
      return false;
    }
    setErr(false);

    reader.readAsDataURL(files[0]);
    setFile(files[0]);
    reader.onload = (loadEvt) => {
      setData(loadEvt.target?.result);
    };
  };

  return (
    <div className="flex justify-between w-2/3 container mx-auto">
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e)}
        className="drag-drop"
      >
        {data !== null && (
          <>
            <img className={styles.image} src={data?.toString()} alt="" />
            <button className="form-btn" onClick={() => setData(null)}>
              Remove Image
            </button>
          </>
        )}
        {data === null && (
          <p className={styles.dropAreaText}>
            Drag and drop image <FcImageFile className="inline-block" />
          </p>
        )}
      </div>
      {err && <p>Unable to upload image</p>}
      {data !== null && (
        <div className="mint-form mx-auto flex flex-col justify-center items-center">
          <form onSubmit={onSubmit} className="w-full">
            <FormField
              id="walletAddress"
              label="Wallet Address"
              register={register}
              errors={errors}
              disabled={wallet}
            />

            <FormField
              id="name"
              label="Name"
              register={register}
              errors={errors}
            />

            <FormField
              id="description"
              label="Description"
              register={register}
              errors={errors}
            />

            <div className="md:flex md:items-center">
              <div className=""></div>
              <div className="md:w-2/3">
                {/* <Button
                  type="submit"
                  className={styles.uploadButton}
                  onClick={() => uploadImage()}
                >
                  <AiOutlineBlock className="scale-150" />
                  Mint
                </Button> */}

                {isMinted ? (
                  isLoading ? (
                    <div>
                      <img src={Loader} width="50" alt="" />
                      <div
                        className={cn(
                          "text-white",
                          "font-bold",
                          "pt-2",
                          "text-2xl"
                        )}
                      >
                        Waiting for transaction to reach the network...{"\n"}{" "}
                        Your Sbt will appear among the others shortly.
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center mt-3">
                      <Link to="/profiles">View Profiles</Link>
                    </div>
                  )
                ) : (
                  <Button type="submit" className={styles.uploadButton}>
                    <AiOutlineBlock className="scale-150" />
                    {minting ? "Minting" : "Mint"}
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DropArea;
