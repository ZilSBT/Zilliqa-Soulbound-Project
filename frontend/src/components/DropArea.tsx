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
import Link from "../components/Link";
import { Icon } from "@iconify/react";
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
    <div>
      <div>
        <label className="block" htmlFor={id}>
          {label}
        </label>
      </div>
      <input {...register(id)} className="" id={id} {...inputProps}></input>
      <p>{errors[id]?.message}</p>
    </div>
  );
};

const DropArea = () => {
  const [data, setData] = useState<ArrayBuffer | string | null | undefined>(
    null
  );
  const { storeFiles, storeJson } = useStorage();
  const { wallet, callContract } = useWallet();
  // const { callContract } = useZilliqa();
  const [err, setErr] = useState<string | boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setLoading] = useState<string | boolean>(false);
  const [isMinted, setMinted] = useState<string | boolean>(false);

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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 30000);
  };
  const onSubmit = handleSubmit(async ({ walletAddress, ...data }) => {
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

    // TODO: Check for transaction conformation
    // console.log("transaction: %o", tx.id);
    // console.log(JSON.stringify(tx.receipt, null, 4));
    try {
      console.log(tx);
      console.log("HELLO ??");
    } catch (error) {
      console.log("error");
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
    <div className="form-container">
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e)}
        className="drag-drop"
      >
        {data !== null && (
          <div className="image-dropped">
            <h6 className="uppercase">Profile Image</h6>
            <img src={data?.toString()} alt="" />
            <button className="btn btn-red" onClick={() => setData(null)}>
              Remove Image
            </button>
          </div>
        )}
        {data === null && (
          <p>
            Drag and drop image <FcImageFile className="inline-block" />
          </p>
        )}
      </div>
      {err && <p>Unable to upload image</p>}
      {data !== null && (
        <div className="mint-form">
          <form onSubmit={onSubmit}>
            <h6 className="uppercase">Account Info</h6>
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

            <div className="">
              <div className=""></div>
              <div>
                <DropArea />
                {isMinted ? (
                  isLoading ? (
                    <div>
                      <img src={Loader} width="50" alt="" />
                      <div className="text-white font-bold pt-2 text-2xl">
                        Waiting for transaction to reach the network...{"\n"}{" "}
                        Your Sbt will appear among the others shortly.
                      </div>
                    </div>
                  ) : (
                    <div className="">
                      <Link to="/profiles">View Profiles</Link>
                    </div>
                  )
                ) : (
                  <Button type="submit" className="btn btn-primary">
                    <AiOutlineBlock />
                    Mint
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
