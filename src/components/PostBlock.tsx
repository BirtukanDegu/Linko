import React from 'react';

const PostBlock = () => {
  return (
    <div className="flex flex-col bg-white rounded-[15px] p-5 cursor-pointer transition-all duration-500 gap-5">
      {/* Author */}
      <div className="flex items-center gap-2.5">
        <img
          src="/images/sample/1.jpeg"
          alt="avatar"
          className="rounded-[15px] w-[50px] h-[50px] object-cover"
        />
        <div>
          <h4 className="text-[#1d3a5f]">Lana Del Rey</h4>
          <span className="font-normal text-[13px] text-gray-400">12 hours ago</span>
        </div>
      </div>

      {/* Description */}
      <div className="font-normal text-[#1d3a5f]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quibusdam assumenda id
        exercitationem aliquam pariatur, rerum facilis sed adipisci tempora.
      </div>

      {/* Images */}
      <div className="flex justify-center items-center bg-brand-pink/20 rounded-[15px]">
        <img
          src="/images/sample/2.jpeg"
          alt="post"
          className="rounded-[15px] w-full aspect-[3/2] object-contain"
        />
      </div>
    </div>
  );
};

export default PostBlock;
