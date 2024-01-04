"use client"

import { signOut, useSession } from "next-auth/react"


function Logout() {

  const { data: session } = useSession();
  return (
    <div>
      {session && (
        <img
        onClick={() => signOut()}
        src={session.user?.image!}
        alt="User Image"
        className="h-12 w-12 rounded-full cursor-pointer hover:opacity-50 mx-auto"
        />
      )}
    </div>
  )
}

export default Logout