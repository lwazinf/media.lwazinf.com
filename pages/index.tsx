import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CenterStage_ from "../components/CenterStage_";
import LoginPage_ from "../components/LoginPage_";
import { useRecoilState } from "recoil";
import { CurrentUser } from "../components/atoms/atoms";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

const Home: NextPage = () => {
  const [currentUser_, setCurrentUser_] = useRecoilState(CurrentUser);
  // const [loading_, setLoading_] = useState(false);
  // const navigate = useNavigate()

  useEffect(() => {
    if (auth.currentUser != null) {
      setCurrentUser_(auth.currentUser)
      console.log('user found')
    }else{
      console.log('user not found')
    }
  }, [currentUser_]);

  return (
    <main
      className={`flex w-full h-screen flex-col items-center justify-center`}
    >
      {auth.currentUser != null ? (
        <CenterStage_ />
      ) : (
        <LoginPage_ />
      )}
    </main>
  );
};

export default Home;
