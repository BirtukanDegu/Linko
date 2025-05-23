import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useUserAvatarUpload } from '@/hooks/use-users';

const Avatar = dynamic(() => import('react-avatar-edit'), { ssr: false });

interface UploadAvatarModalType {
  setAvatarUploadMode: (arg: boolean) => void;
}

function UploadAvatarModal({ setAvatarUploadMode }: UploadAvatarModalType) {
  const [avatar, setAvatar] = useState<string | null>(null);
  const uploadAvatar = useUserAvatarUpload(avatar!);

  async function onSubmit() {
    setAvatarUploadMode(false);
    await uploadAvatar();
  }

  function onClose() {
    setAvatar(null);
  }
  function onCrop(preview: any) {
    setAvatar(preview);
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center w-screen min-h-screen z-[4444] bg-white/40">
      <div className="flex flex-col items-center bg-white p-[50px] rounded-[15px] border-2 border-gray-300/20 gap-[30px]">
        <h2 className="text-xl font-semibold text-[#1d3a5f]">Uploading Avatar</h2>
        
        <Avatar
          width={300}
          height={300}
          imageWidth={300}
          onCrop={onCrop}
          onClose={onClose}
          src={undefined}
          label="Choose your photo..."
          labelStyle={{ color: 'rgb(145, 164, 191)', cursor: 'pointer' }}
          borderStyle={{
            display: 'flex',
            justifyContent: 'center',
            border: '2px solid #1d3a5f',
            borderRadius: '25px',
            fontSize: '17px',
            cursor: 'pointer',
          }}
        />
        
        <div className="flex w-full gap-5">
          <button onClick={onClose} className="flex-1 flex justify-center items-center rounded-[10px] p-3 bg-[#1877f2] text-white cursor-pointer">
            Close
          </button>
          <button onClick={onSubmit} className="flex-1 flex justify-center items-center rounded-[10px] p-3 bg-[#1877f2] text-white cursor-pointer">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadAvatarModal;
