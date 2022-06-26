import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import cn from "classnames";
import { useState } from "react";
import Modal from 'react-modal';
import { useWallet } from "../providers/WalletProvider";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function AppContainer() {
  // call the useWallet hook to get that newly created state value
  // state controls whether the dialog is opened
  const [modalIsOpen, setIsOpen] = useState(false);
  const { zilpayinstalled } = useWallet();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen = {zilpayinstalled} //How do I read state from walletprovider?
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <h1>ZilPay Not Installed</h1>
        <button onClick={closeModal}>close</button>
        <div>Link</div>
      </Modal>
    </div>
  );
}