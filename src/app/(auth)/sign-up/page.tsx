'use client'

import React from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import LoginRegisterForm from '@/components/LoginRegisterForm';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setAuthUser } from '@/redux/authUser/slice';
import { auth, db } from '@/app/firebase';

const content = {
  type: 'register',
  formHeading: 'Welcome!',
  formHint: 'Register to access to all features of Socialsquare.',
  btnText: 'Sign Up',
};

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  function handleRegister(username: string | null, email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password).then(async ({ user }) => {
      const ref = doc(db, 'users', user.uid);
      await setDoc(ref, { createdAt: Date.now().toString(), username, email });
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: username });
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
    <div className='flex items-center justify-center h-screen w-full  bg-gray-50'>
      <LoginRegisterForm content={content} submitHandler={handleRegister} />
    </div>
  );
};

export default SignIn;