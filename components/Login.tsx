'use client'
import { signIn } from "next-auth/react";
import Image from "next/image"

function Login() {
  return (
    <div className="bg-[#11a37f] h-screen flex flex-col items-center justify-center text-center">
      <Image
      src="https://links.papareact.com/2i6"
      width={300}
      height={300}
      alt="ChatGpt Logo"
       />
       <button onClick={()=> signIn('google')} className="text-white font-bold animate-pulse text-2xl">Sign in to use ChatGPT</button>
    </div>
  );
};

export default Login;