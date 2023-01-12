import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { CurrentUser } from "./atoms/atoms";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

interface LoginPage_Props {}

const LoginPage_ = ({}: LoginPage_Props) => {
  const [currentUser_, setCurrentUser_] = useRecoilState(CurrentUser);
  const [email_, setEmail_] = useState("");
  const [password_, setPassword_] = useState("");

  const signIn = async () => {
    
      await signInWithEmailAndPassword(auth, email_, password_).then((res) => {
        if(auth.currentUser != null){
          setCurrentUser_(auth.currentUser)
        }
      }).catch(
      (e) => {
        console.log(e);
      }
      )
  };

  return (
    <div
      className={`flex relative overflow-hidden w-[350px] h-[500px] rounded-md flex-col items-center justify-center mx-2 bg-white/30 p-2 pt-[60px]`}
    >
      <p
        className={`text-[20px] text-black/80 font-black text-center w-full mb-5`}
      >
        Sign In
      </p>
      <p
        className={`text-[13px] text-black/50 font-medium text-left w-[215px]`}
      >
        E-Mail
      </p>
      <input
        type={"text"}
        placeholder={`email address..`}
        onChange={(obj) => {
          setEmail_(obj.target.value);
          console.log(obj.target.value);
        }}
        className={`bg-white/50 hover:bg-white/80 rounded-md m-2 mt-1 h-[35px] p-2 transition-all duration-400 font-thin`}
      />
      <p
        className={`text-[13px] text-black/50 font-medium text-left w-[215px] mt-1`}
      >
        Password
      </p>
      <input
        type={"password"}
        placeholder={`password..`}
        onChange={(obj) => {
          setPassword_(obj.target.value);
        }}
        className={`bg-white/50 hover:bg-white/80 rounded-md m-2 h-[35px] p-2 transition-all duration-400 font-thin`}
      />
      {/* <input type={'password'} placeholder={`confirm password..`} className={`bg-white/50 rounded-md m-2 h-[35px] p-2 font-thin`}/> */}
      <div
        className={`flex relative overflow-hidden hover:w-[225px] w-[220px] h-[40px] rounded-md flex-col items-center justify-center mx-2 mt-3 bg-blue-400 p-2 shadow-sm cursor-pointer hover:text-[15px] text-[16px] text-white/80 hover:text-white transition-all duration-400`}
        onClick={async () => {
          await signIn();
        }}
      >
        <p className={`font-bold text-center`}>Sign In</p>
      </div>
      <p
        className={`text-[13px] text-black/30 hover:text-black/50 font-medium text-center mt-[2px] cursor-pointer transition-all duration-400`}
      >
        Forgot your password?
      </p>
      <p
        className={`text-[13px] text-black/50 font-medium text-center w-full mt-8`}
      >
        Don't have a WI account?
      </p>
      <div
        className={`flex relative overflow-hidden hover:w-[240px] w-[235px] h-[40px] rounded-md flex-col items-center justify-center mx-2 mt-1 hover:bg-white bg-white/80 p-2 shadow-sm cursor-pointer hover:text-[15px] text-[16px] text-black/30 hover:text-black/50 transition-all duration-400`}
      >
        <p className={`font-bold text-center`}>Create new account</p>
      </div>
    </div>
  );
};

export default LoginPage_;
