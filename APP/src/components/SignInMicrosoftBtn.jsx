"use client";

import { FaMicrosoft } from "react-icons/fa";
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

const SignInMicrosoftBtn = () => {
  const handleSignIn = async () => {
    try {
      await signIn("azure-ad", { callbackUrl: "/welcomeToIPHA" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      onClick={handleSignIn}
      className="px-[20px] py-[10px] border-[1.5px] border-[var(--second-color)] [transition:opacity_0.3s,_background-color_0.3s] font-bold mt-[20px] hover:border-[var(--second-color)] flex w-full gap-2.5 justify-center items-center text-center bg-[var(--first-color)] hover:opacity-100 hover:cursor-pointer hover:text-primary-foreground hover:bg-secondary-foreground"
    >
      <FaMicrosoft />
      <span>Sign in with Microsoft</span>
    </Button>
  );
};
export default SignInMicrosoftBtn;
