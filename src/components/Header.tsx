'use client';

import { auth } from '@/app/firebase';
import { atma } from '@/fonts/font';
import { useGetUserAvatar } from '@/hooks/use-users';
import { Add, SearchNormal } from 'iconsax-reactjs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Avatar from './Avatar';

const Header = () => {
  const { getAvatar } = useGetUserAvatar(auth.currentUser?.uid);

  useEffect(() => {
    (async () => {
      await getAvatar();
    })();
  }, []);

  return (
    <div className="flex h-[100px] border-b border-gray-300/15">
      <div className="flex justify-between w-full px-[30px] py-[30px]">
        <Link href='/' className="flex items-center gap-4">
          <Image
            src="/images/Linko.svg"
            alt="logo"
            width={40}
            height={40}
            className="w-[40px] h-[40px]"
          />
          <span className={`${atma.className} text-3xl font-extrabold text-[#23446e]`}>Linko</span>
        </Link>
        <div className="flex items-center gap-[30px]">
          <div className="flex items-center bg-brand-pink/10 border border-brand-light-purple px-4 py-[15px] pr-[60px] rounded-[10px] gap-[10px]">
            <SearchNormal className="text-brand-dark-purple w-[15px] h-[15px]" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-inherit outline-none border-none placeholder:text-light-text text-brand-dark-purple"
            />
          </div>
          <div className="flex items-center bg-brand-purple text-white px-[12px] py-[12px] rounded-[10px] gap-[10px] cursor-pointer">
            <Add />
            <span>Create</span>
          </div>
          <div className='cursor-pointer rounded-2xl size-[50px]'>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
