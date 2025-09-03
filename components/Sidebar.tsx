import Image from "next/image";
import React from "react";
import { BsChatLeftText } from "react-icons/bs";
const Sidebar = () => {
  return (
    <div className="w-12 md:w-50 h-screen absolute left-0 top-0  border-r border-neutral-500 p-4">
      <h1 className="text-3xl font-bold flex w-full justify-center items-center ">
        🤖<span className="text-pink-600">Kaos</span>.ai
      </h1>
      <hr className="mt-4 bg-neutral-500" />
      <h3 className="font-semibold text-neutral-500  mt-6 text-sm">TODAY</h3>
      <div className="flex flex-col items-left gap-4 mt-2">
        {[1, 2, 3, 4, 5].map((items, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between w-full bg-neutral-50 rounded-lg p-2 shadow-md shadow-neutral-2 00 cursor-pointer"
          >
            <h3 className="w-full truncate text-sm">
              Give me Unique Name Logo Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Dolore, dignissimos.
            </h3>
            <BsChatLeftText />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
