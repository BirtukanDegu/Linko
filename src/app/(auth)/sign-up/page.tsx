'use client'

import React from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import LoginRegisterForm from '@/components/LoginRegisterForm';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setAuthUser } from '@/redux/authUser/slice';
import { auth, db } from '@/app/firebase';
import { AuthDataType } from '@/types';

const content = {
  type: 'register',
  formHeading: 'Welcome!',
  formHint: 'Register to access to all features of Linko.',
  btnText: 'Sign Up',
};

const SignIn = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  function handleRegister(data: AuthDataType) {
    createUserWithEmailAndPassword(auth, data.email, data.password).then(async ({ user }) => {
      const ref = doc(db, 'users', user.uid);
      await setDoc(ref, { 
        id: user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        createdAt: Date.now().toString(),
        username: data.username,
        email: data.email,
      });
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: data.username });
      }
      dispatch(
        setAuthUser({
          username: user.displayName,
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }),
      );
      router.push('/');
    });
  }
  return (
    <div className='flex items-center justify-center h-screen w-full bg-gray-50'>
      <LoginRegisterForm content={content} submitHandler={handleRegister} />
    </div>
  );
};

export default SignIn;