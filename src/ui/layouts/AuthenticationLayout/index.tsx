import { Outlet } from "react-router-dom";
import VirtualCardMesh from "./components/VirtualCardMesh";

export default function AuthenticationLayout() {
  return (
    <div className="grid grid-cols-5 h-full">
      <div
        className="col-span-3 bg-gradient-to-r from-violet-600 from-10% via-violet-900 via-40%
        to-black to-90%"
      >
        <div className="py-24 px-20">
          <h1 className="text-5xl font-bold text-white">Hello there</h1>

          <p className="text-gray-200 mt-1">
            Welcome to YBudget, an application orientated to organizing you
            budgets.
          </p>

          <VirtualCardMesh />
        </div>
      </div>

      <div className="col-span-2 relative bg-black text-white place-content-center overflow-hidden">
        <div className="absolute w-[150px] h-[150px] top-10 left-[80%] animate-pulse  bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute w-[250px] h-[250px] top-[20%] left-[10%] animate-pulse delay-100 bg-indigo-900 rounded-full blur-3xl "></div>
        <div className="absolute w-[350px] h-[350px] top-[75%] left-[50%] animate-pulse delay-200 bg-violet-600 rounded-full blur-3xl"></div>
        <Outlet />
      </div>
    </div>
  );
}
