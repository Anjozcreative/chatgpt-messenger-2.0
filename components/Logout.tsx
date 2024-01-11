"use client"

import { signOut, useSession } from "next-auth/react"


function Logout() {

  const { data: session } = useSession();
  return (
    <div className="md:flex items-center md:mx-auto md:mb-4">
      {session && (
        <img
        onClick={() => signOut()}
        src={session.user?.image!}
        alt="User Image"
        className="h-12 w-12 rounded-full cursor-pointer hover:opacity-50 mb-2 md:mb-0 mx-auto"
        />
      )}

      {session && <p
      onClick={() => signOut()}
      className="hover:opacity-50 cursor-pointer text-white text-sm md:text-lg mr-2 overflow-auto ml-4 hidden md:inline-flex">
        {session.user?.name}
        </p>
      }
    </div>
  )
}

export default Logout