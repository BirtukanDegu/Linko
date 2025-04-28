import { atma } from '@/fonts/font';
import { AuthDataType } from '@/types';
import { Lock, User } from 'iconsax-reactjs';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface LoginRegisterFormProps {
  content: {
    type: string;
    formHeading: string;
    formHint: string;
    btnText: string;
  };
  submitHandler: (arg: AuthDataType) => void;
}

const LoginRegisterForm: React.FC<LoginRegisterFormProps> = ({ content, submitHandler }) => {
  const [authData, setAuthData] = React.useState<AuthDataType>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen w-full max-w-md p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-4 w-full mb-6">
          <Image
            src="/images/Linko.svg"
            alt="logo"
            width={60}
            height={60}
            className="w-[40px] h-[40px]"
          />
          {/* <span className={`${atma.className} text-3xl font-extrabold text-[#23446e]`}>Linko</span> */}
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <h2 className="text-2xl font-semibold text-brand-dark-purple">{content.formHeading}</h2>
          <p className="text-sm text-gray-600">{content.formHint}</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (content.type === 'login') {
              submitHandler(authData);
            } else {
              submitHandler(authData);
            }
          }}
          className="space-y-4 w-full"
        >
          {content.type === 'register' && (
            <div className="flex items-center gap-2 border rounded-md px-3 py-2">
              <User className="text-gray-400" />
              <input
                type="text"
                placeholder="Username"
                className="w-full h-full outline-none text-sm placeholder:text-light-text text-brand-dark-purple"
                onChange={(e) => setAuthData({ ...authData, username: e.target.value })}
              />
            </div>
          )}

          <div className="flex items-center gap-2 border rounded-md px-3 py-2">
            <Mail className="text-gray-400" />
            <input
              type="email"
              placeholder={content.type === 'login' ? 'Your email' : 'Email'}
              className="w-full h-full outline-none text-sm placeholder:text-light-text text-brand-dark-purple"
              onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
            />
          </div>

          <div className="flex items-center gap-2 border rounded-md px-3 py-2">
            <Lock className="text-gray-400" />
            <input
              type="password"
              placeholder={content.type === 'login' ? 'Your password' : 'Password'}
              className="w-full h-full outline-none text-sm placeholder:text-light-text text-brand-dark-purple"
              onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
            />
          </div>

          {content.type === 'register' && (
            <div className="flex items-center gap-2 border rounded-md px-3 py-2">
              <Lock className="text-gray-400" />
              <input
                type="password"
                placeholder="Password Confirmation"
                className="w-full h-full outline-none text-sm placeholder:text-light-text text-brand-dark-purple"
                onChange={(e) => setAuthData({ ...authData, passwordConfirmation: e.target.value })}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-brand-purple text-white font-semibold rounded-md hover:bg-brand-purple/90 transition cursor-pointer"
          >
            {content.btnText}
          </button>
        </form>

        <div className="flex items-center gap-2 mt-4">
          <span className="text-sm text-gray-600">
            {content.type === 'login' ? "Don't have an account?" : 'Already have an account?'}
          </span>
          <button
            onClick={() => {
              if (content.type === 'login') {
                router.push('/sign-up');
              } else {
                router.push('/sign-in');
              }
            }}
            className="text-brand-blue hover:scale-105 transition-transform duration-500 cursor-pointer"
          >
            {content.type === 'login' ? 'Register' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
