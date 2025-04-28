'use client'

import { auth } from '@/app/firebase';
import PostList from '@/components/PostList';
import { useUserData } from '@/hooks/use-users';
import { Camera } from 'iconsax-reactjs';
import React from 'react';

const Profile = () => {
  const userData = useUserData(auth.currentUser?.uid);

  return (
    <div className="w-1/2 h-full">
      <div className="flex flex-col h-full gap-[50px]">
        <div className="relative w-full h-full">
          {/* Banner */}
          <div className="w-full h-[300px]">
            <img
              src="https://assets-global.website-files.com/5e39e095596498a8b9624af1/6279aad9a4206d4a46dcf770_WFU-thumbnail%20(CTA%20alert%20banner).jpg"
              alt="banner"
              className="w-full h-full object-cover rounded-t-[10px]"
            />
          </div>

          {/* Info */}
          <div>
            {/* Avatar */}
            <div className="absolute left-[30px] bottom-[50px] w-[140px] h-[140px]">
              <img
                src="/images/sample/1.jpeg"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute left-[80px] bottom-[-20px] bg-white rounded-full p-[10px] border border-gray-300 cursor-pointer hover:text-[#5e97e1] transition">
                <Camera className="text-[#1877f2] text-[20px]" />
              </div>
            </div>

            {/* Details */}
            <div className="flex bg-white w-full h-[100px] border border-gray-200 pl-[180px] pt-[20px]">
              <div className="flex flex-col">
                <h2 className="text-[#1d3a5f]">{userData?.userData?.firstName + ' ' + userData?.userData?.lastName}</h2>
                <span className="text-gray-400">{'@' + userData?.userData?.username}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="p-[20px] rounded-[15px]">
          <h2 className="ml-[20px] mb-[20px] text-[#1d3a5f]">
            {userData?.userData?.firstName}'s posts
          </h2>
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default Profile;
