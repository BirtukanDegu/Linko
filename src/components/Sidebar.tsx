import { Home, Image, People, User } from "iconsax-reactjs";
import React from "react";

const pages = [
  { icon: Home, title: "Home" },
  { icon: People, title: "Friends" },
  { icon: Image, title: "Photos" },
  { icon: User, title: "Profile" },
];

const Sidebar = () => {
  return (
    <div className="w-1/4">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-5 border border-brand-light-purple p-5 rounded-2xl">
          <img
            src="/images/sample/3.jpeg"
            alt="avatar"
            className="rounded-2xl w-[50px] h-[50px]"
          />
          <div>
            <h4 className="text-brand-dark-purple">Lana Del Ray</h4>
            <span className="text-[#72849b]">@lana</span>
          </div>
        </div>

        <div className="flex flex-col items-center border border-brand-light-purple px-5 py-5 rounded-2xl">
          {pages.map((page, i) => (
            <div
              key={page.title + i}
              className={`flex items-center h-[70px] w-[90%] gap-5 ${
                i !== pages.length - 1 ? "border-b border-background" : ""
              }`}
            >
              <page.icon className="text-[#556273] text-[20px] cursor-pointer" />
              <span className="font-medium text-[#1d3a5f] text-[17px] cursor-pointer">
                {page.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
