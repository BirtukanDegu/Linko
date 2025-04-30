import { auth } from '@/app/firebase';
import { useAppSelector } from '@/hooks/redux-hooks';
import { useGetUserAvatar } from '@/hooks/use-users';
import { Camera } from 'iconsax-reactjs';
import React from 'react';


interface AvatarType {
  setAvatarUploadMode?: (arg: boolean) => void;
}

const Avatar = ({ setAvatarUploadMode }: AvatarType) => {
  const avatar = useAppSelector((state) => state.authUser.avatar);
  const { getAvatar } = useGetUserAvatar(auth.currentUser?.uid);

  React.useEffect(() => {
    (async () => {
      await getAvatar();
    })();
  }, [avatar]);

  return (
    <div className="w-full h-full relative">
      {avatar ? (
        <img src={avatar} alt="avatar" className="w-full h-full rounded-full object-cover" />
      ) : (
          <img src="/images/sample/1.jpeg" alt="avatar" className="w-full h-full rounded-full object-cover" />
      )}
      {setAvatarUploadMode && (
        <div
          className="absolute left-20 -bottom-5 bg-white rounded-full p-2 border border-[#91a4bf42] cursor-pointer transition-colors hover:text-[#5e97e1] text-[#1877f2]"
          onClick={() => setAvatarUploadMode(true)}
        >
          <Camera className="text-[20px]" />
        </div>
      )}
    </div>
  );
};

export default Avatar;
