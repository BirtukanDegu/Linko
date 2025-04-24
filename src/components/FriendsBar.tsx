import React from 'react';

const FriendsBar = () => {
  return (
    <div className="w-1/4 border border-brand-light-purple rounded-2xl">
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-5">
          <h4 className="font-normal text-brand-dark-purple">FRIENDS</h4>
          <div className='flex items-center justify-center size-8 rounded-full text-brand-purple bg-brand-pink/20'>
            <span className="">12</span>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-[15px] p-5 gap-5">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/sample/1.jpeg"
              alt="friend"
              className="rounded-[15px] w-[50px] h-[50px] cursor-pointer"
            />
            <div>
              <h4 className="text-brand-dark-purple">Ruth B</h4>
              <span className="text-[#72849b]">@ruth</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <img
              src="/images/sample/2.jpeg"
              alt="friend"
              className="rounded-[15px] w-[50px] h-[50px] cursor-pointer"
            />
            <div>
              <h4 className="text-brand-dark-purple">Adele Laurie</h4>
              <span className="text-[#72849b]">@adele</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <img
              src="/images/sample/3.jpeg"
              alt="friend"
              className="rounded-[15px] w-[50px] h-[50px] cursor-pointer"
            />
            <div>
              <h4 className="text-brand-dark-purple">Taylor Swift</h4>
              <span className="text-[#72849b]">@taylor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsBar;
