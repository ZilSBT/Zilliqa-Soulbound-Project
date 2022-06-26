import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import cn from "classnames";

export default function AppContainer() {
  return (
    <div>
      <Navbar />
      <div className={cn("p-6")}>
        <Outlet />
      </div>
    </div>
  );
}
