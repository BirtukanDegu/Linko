'use client'

import React, { useState } from "react"
import { doc, DocumentData, getDoc } from "firebase/firestore"
import { db } from "@/app/firebase";
import { UserDataType } from "@/types";


export const useUserData = (id: string | undefined) => {
  const [userData, setUserData] = useState<DocumentData | UserDataType>();

  async function getUserDataById() {
    if (id && userData === undefined) {
      const ref = doc(db, 'users', id);
      const data = await getDoc(ref);
      setUserData(data.data());
    }
  }

  React.useEffect(() => {
    getUserDataById();
  }, [id]);

  return { getUserDataById, userData };
};


