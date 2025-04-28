'use client'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useRouter } from 'next/navigation';
import LoginRegisterForm from '@/components/LoginRegisterForm';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setAuthUser } from '@/redux/authUser/slice';
import { auth } from '@/app/firebase';
import { AuthDataType } from '@/types';

const content = {
  type: 'login',
  formHeading: 'Welcome Back!',
  formHint: 'Enter your credentials to access your account.',
  btnText: 'Sign In',
};

const SignIn = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  function handleLogin(data: AuthDataType) {
    signInWithEmailAndPassword(auth, data.email, data.password).then(({ user }) => {
      dispatch(
        setAuthUser({
          username: user.displayName,
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }),
      );
      router.push('/profile');
    });
  }

  return (
    <div className='flex items-center justify-center h-screen w-full bg-gray-50'>
      <LoginRegisterForm content={content} submitHandler={handleLogin} />
    </div>
  );
};

export default SignIn;