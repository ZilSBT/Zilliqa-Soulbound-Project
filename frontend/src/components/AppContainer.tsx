import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Modal from "./Modal";
import cn from "classnames";

export default function AppContainer() {
  // call the useWallet hook to get that newly created state value
  // state controls whether the dialog is opened

  return (
    <div>
      <Navbar />
      <div className={cn("p-6")}>
        <Outlet />
      </div >
      {/* dialog component here  (Display modal) */}
      <Modal />
    </div>
  );
}
